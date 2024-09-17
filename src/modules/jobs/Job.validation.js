import joi from "joi";

const addJobSchema =joi.object({
    jobTitle : joi.string().required(),
    jobLocation :joi.string().valid("onsite", "remotely", "hybrid"),
    workingTime : joi.string().valid("part-time", "full-time"),
    seniorityLevel: joi.string().valid("Junior", "Mid-Level", "Senior", "Team-Lead", "CTO"),
    jobDescription : joi.string().optional(),
    technicalSkills : joi.array().items(joi.string()).optional(),
    softSkills : joi.array().items(joi.string()).optional(),
    addedBy: joi.string().length(24).required(),  
    refToCompany: joi.string().length(24).required()
})
export default addJobSchema