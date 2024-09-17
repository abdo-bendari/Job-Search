import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
fristName : String ,
lastName : String ,
userName :{
    type:String ,
    required:true
},
email : {
    type:String ,
    required:true,
    unique: true
},
confirmEmail :{
    type : Boolean,
    default : false
},
recoveryEmail : String ,
password :{
    type : String,
    required : true
},
code : Number,
DOB :  Date,
mobileNumber :{
    type : Number,
    unique: true
},
 role :{
    type : String ,
    enum : ["user","HR"],
    default: "user"

 },
 status: {
    type: String,
    enum: ["online", "offline"],
    default: "offline"
}
})

const User = mongoose.model("User",userSchema)
export default User