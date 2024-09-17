import joi from "joi";

const signUpSchema =joi.object({
    userName : joi.string().lowercase().min(3).max(15).trim().required(),
    email :joi.string().email().required(),
    password : joi.string().pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/).required(),
    confirmPassword:joi.string().valid(joi.ref('password')).required(),
    mobileNumber : joi.number(),
    DOB : joi.date(),
    role : joi.string().default("user")
    

})
export default signUpSchema