import User from "../../../database/models/user.model.js";
import Company from "../../../database/models/Company.model.js";
import Job from "../../../database/models/job.model.js";
import App from "../../../database/models/app.model.js";
import catchError from "../../middleware/catchError.js";
import AppError from "../../utils/Error.js";

export const addCompanies = catchError(async (req, res, next) => {
  const {companyHR} = req.body
  const user = await User.findOne({_id:companyHR,role:"HR"})
  if(!user){return next(new AppError("not allowed",400))}
  const newCompany = await Company.insertMany(req.body);
  res.status(201).json({ message: 'Company added successfully', newCompany });
})

export const updateCompany = catchError(async(req,res,next)=>{
    const HR_Id= req.user._id
    const company=await Company.findOneAndUpdate({companyHR:HR_Id},req.body,{new:true})
    if(!company){return next(new AppError("not found",400))}
    res.status(201).json({ message: 'Company updated successfully', company });
})

export const deleteCompany = catchError(async(req,res,next)=>{
    const HR_Id= req.user._id
    const company=await Company.findOneAndDelete({companyHR:HR_Id},req.body)
    if(!company){return next(new AppError("not found",400))}
    res.status(201).json({ message: 'Company updated successfully', company });
})


export const getCompanyWithJobs =catchError(async(req,res,next)=>{
    const {companyId} = req.params;           /// take id from params without token   
    const company = await Company.findOne({_id:companyId})
    if(!company){return next(new AppError("not Found",400))}
    const jobs=await Job.findOne({addedBy:company.companyHR })
return res.status(201).json({  company ,jobs});
})

export const getByName = catchError(async(req,res,next)=>{
    const {name} = req.params;            
    const company = await Company.findOne({companyName:name})
    if(!company){return next(new AppError("not Found",400))}
return res.status(201).json({ message:"done" ,company });
})


export const getAppForSpecificJob =catchError(async(req,res,next)=>{
const userId = req.user._id
const { jobId } = req.params;
const user = await User.findOne({_id:userId,role:"HR"})
if(!user){return next(new AppError("not Found",400))}
const job=await Job.findById(jobId).populate("refToCompany")
if(!job){
    return next(new AppError("Not authorized to view applications for this job",400))
}
const applications=await App.find({aboutJob:jobId}).populate('aboutUser')
if(!applications){
    return next(new AppError("No applications found for this job",400))
}
return res.status(201).json({ message:"done" ,applications});

})


