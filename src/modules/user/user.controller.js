import User from "../../../database/models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import catchError from "../../middleware/catchError.js";
import AppError from "../../utils/Error.js";
import { customAlphabet, nanoid } from "nanoid";
import sendEmail from "../../utils/sendEmail.js";

export const signUp = catchError(async (req, res,next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (userExist) {
    return next(new AppError("email already exist", 400));
  }
  req.body.password = bcrypt.hashSync(password, 8);
  const code = customAlphabet("0123456789", 4);
  req.body.code = code();
  const addUser = await User.insertMany(req.body);
  sendEmail({ to: email, html: `<h1>${req.body.code}</h1>` });
  return res.status(200).json({ message: "done", addUser });
});

export const logIn = catchError(async (req, res,next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ email });
  if (!userExist) {
    return next(new AppError("invalid email or password", 400));
  }
  const match = bcrypt.compareSync(password, userExist.password);
  if (!match) {
    return next(new AppError("invalid email or password", 400));
  }
  const token = jwt.sign({ email, _id: userExist.id }, "exam1");
  return res.status(200).json({ message: "done", token });
});

export const confirmEmail = catchError(async (req,res,next)=>{
        const {code ,email} = req.body
        const userExist = await User.findOne({email})
        if(!userExist){
            return next(new AppError("invalid email", 400));
        }
        if(userExist.code != code){
            return next(new AppError("invalid code", 400));
        }
        await User.updateOne({email},{confirmEmail:true,code:null,status:"online"})
        return res.status(200).json({message :"done"})
})

export const updateAccount =catchError(async(req,res,next)=>{
    const { email, mobileNumber } = req.body;
    const userId = req.user._id;
        const emailExist = await User.findOne({ email });
        if (emailExist) {
           return next(new AppError('Email already in use', 400)); 
        }
        const mobileExist = await User.findOne({ mobileNumber });
        if (mobileExist) {
           return next(new AppError('Mobile number already in use', 400));
      }
    const account = await User.findOneAndUpdate({_id :userId},req.body,{new:true})
if(!account){ return next(new AppError("not found",400))}
return res.status(201).json({ message: "done", account });

})


export const deleteAccount = catchError(async(req,res,next)=>{
    const userId = req.user._id;
    const account = await User.findOneAndDelete({_id :userId})
if(!account){ return next(new AppError("not found",400))}
return res.status(201).json({ message: "done", account });
})

export const getMyAccount = catchError(async(req,res,next)=>{
    const userId = req.user._id;                                /// take id from token 
    const account = await User.find({_id:userId})
    if(!account){return next(new AppError("not Found",400))}
return res.status(201).json({ message: "done", account });
})

export const getAccount =catchError(async(req,res,next)=>{
    const {id} = req.params.id;                                /// take id from params without token
    const account = await User.find({_id:req.params.id})
    if(!account){return next(new AppError("not Found",400))}
return res.status(201).json({ message: "done", account });
})

export const updatePassword =catchError(async(req,res,next)=>{
    const { password } = req.body;
    const userId = req.user._id;
      req.body.password = bcrypt.hashSync(password, 8);     
    const account = await User.findOneAndUpdate({_id :userId},req.body.password,{new:true})
if(!account){ return next(new AppError("not found",400))}
return res.status(201).json({ message: "done", account });
})
 
export const forgetPassword = catchError(async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });      
    if(!user){return next(new AppError("not found",400))}
    const code = customAlphabet("0123456789", 4);
    req.body.code = code();
    sendEmail({ to: email, html: `<h1>${req.body.code}</h1>` }); 
    const codeStatus = await User.updateOne({email :email},{code:req.body.code},{new:true})  
    return res.status(200).json({ message: "done" ,codeStatus});
  });

  export const ChangePassword = catchError (async (req,res)=>{
    const {code ,email,newPassword} = req.body
    const userExist = await User.findOne({email})
    if(!userExist){
        return next(new AppError("invalid email", 400));
    }
    if(userExist.code != code){
        return next(new AppError("invalid code", 400));
    }
    req.body.newPassword =bcrypt.hashSync(newPassword,8) 
    await User.updateOne({email},{password:req.body.newPassword,code:null},{new :true}) 
    return res.status(200).json({message :"done"})
})

export const getAccountsByRecoveryEmail = catchError(async (req, res) => {
  const { recoveryEmail } = req.query;
  const accounts = await User.find({ recoveryEmail });
  if (!accounts) {{return next(new AppError("not found",400))}}
  return res.status(200).json({ message: 'done', accounts });
});
