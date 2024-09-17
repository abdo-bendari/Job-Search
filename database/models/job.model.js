import mongoose from "mongoose";
import { Schema } from "mongoose";

const jobSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobLocation: {
    type: String,
    enum: ["onsite", "remotely", "hybrid"],
  },
  workingTime: {
    type: String,
    enum: ["part-time", "full-time"],
  },
  seniorityLevel: {
    type: String,
    enum: ["Junior", "Mid-Level", "Senior", "Team-Lead", "CTO"],
  },
  jobDescription: String,

  technicalSkills: {
    type: [String],
  },
  softSkills: {
    type: [String],
  },
  addedBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  refToCompany :{
    type: Schema.Types.ObjectId,
    ref: "Company",
    required: true,
  }
});


const Job = mongoose.model("Job",jobSchema)
export default Job;