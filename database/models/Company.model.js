import mongoose from "mongoose";
import { Schema } from "mongoose";

const companySchema = new Schema ({
companyName :{
    type : String,
    unique : true ,
    required : true
},
description : String ,
industry : String ,
address : String ,
numberOfEmployees : {
    type : Number,
    min : 11,
    max : 20
},
companyEmail :{
    type : String,
    unique : true
},
companyHR :{
    type : Schema.Types.ObjectId,
    required : true ,
    ref :"User"
},
})

const Company = mongoose.model("Company",companySchema)
export default Company

