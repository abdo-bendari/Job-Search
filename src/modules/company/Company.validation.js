import joi from "joi"

const addCompanySchema =joi.object({
    companyName : joi.string().required(),
    description :joi.string().optional(),
    industry : joi.string().optional(),
    address: joi.string().optional(),
    numberOfEmployees : joi.number().min(11).max(20),
    companyEmail : joi.string().email().optional(),
    companyHR: joi.string().length(24).required(), 
})
export default addCompanySchema

