import User from "../../../database/models/user.model.js";
import Company from "../../../database/models/Company.model.js";
import Job from "../../../database/models/job.model.js";
import App from "../../../database/models/app.model.js";
import catchError from "../../middleware/catchError.js";
import AppError from "../../utils/Error.js";


export const addJob =catchError(async (req, res, next) => {
    const {addedBy} = req.body
    const user = await User.findOne({_id:addedBy})
    if(!user){return next(new AppError("not allowed",400))}
    const newJob = await Job.insertMany(req.body);
    res.status(201).json({ message: 'job added successfully', newJob });
  })

  export const updateJob = catchError(async(req,res,next)=>{
    const addedId= req.user._id
    const job=await Job.findOneAndUpdate({addedBy:addedId},req.body,{new:true})
    if(!job){return next(new AppError("not found",400))}
    res.status(201).json({ message: 'Job updated successfully', job });
})

export const deleteJob = catchError(async(req,res,next)=>{
    const addedId= req.user._id
    const job=await Job.findOneAndDelete({addedBy:addedId},req.body)
    if(!job){return next(new AppError("not found",400))}
    res.status(201).json({ message: 'Job deleted successfully', job });
})

export const getJobWithCompany =catchError(async(req,res,next)=>{
    const addedId= req.user._id
    const job = await Job.findOne({addedBy:addedId})
    if(!job){return next(new AppError("not Found",400))}
    const company=await Company.findOne({companyHR: job.addedBy})
return res.status(201).json({job ,company});
})

export const getJobWithCompanyByName =catchError(async(req,res,next)=>{
    const {name}=req.params
    const company = await Company.find({companyName:name})
    if(!company){return next(new AppError("not Found",400))}
  const job = await Job.findOne({addedBy:company.companyHR})
return res.status(201).json({job ,company});
})

export const filterBy = catchError(async (req, res, next) => {
    const { jobTitle, jobLocation, workingTime, seniorityLevel, technicalSkills } = req.body;
    let filters = {};
    if (jobTitle) {
      filters.jobTitle = jobTitle;
    }
    if (jobLocation) {
      filters.jobLocation = jobLocation;
    }
    if (workingTime) {
      filters.workingTime = workingTime;
    }
    if (seniorityLevel) {
      filters.seniorityLevel = seniorityLevel;
    }
    if (technicalSkills) {
      filters.technicalSkills =  technicalSkills;
    }
    const jobs = await Job.find(filters);
    if (!jobs) {
      return next(new AppError("Not Found", 400));
    }
    return res.status(200).json({ jobs });
  });

  export const applyToJob = catchError(async (req, res, next) => {
      const { aboutJob } = req.body;
      const userId = req.user._id;
      const user =await User.findById(userId)
      if (!user) {
        return next(new AppError('user not found', 400));
      }
      const job = await Job.findById(aboutJob)
      if (!job) {
        return next(new AppError('Job not found', 400));
      }
      const insertedApp = await App.insertMany(req.body)
      res.status(201).json({ message: 'Application submitted successfully',insertedApp  });
    })

    export const addPdf = catchError(async(req,res,next)=>{
        req.body.userResume=req.file.filename
        const uploadPdf = await App.create(req.body)
        return res.status(200).json({ uploadPdf });
    })