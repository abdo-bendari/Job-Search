import mongoose from "mongoose";
import { Schema } from "mongoose"
const appSchema = new Schema ({
aboutJob :{
    type : Schema.Types.ObjectId,
    ref : "Job",
    required : true 
},
aboutUser :{
    type : Schema.Types.ObjectId,
    ref : "User",
    required : true 
},
userTechSkills :{
    type : [String]
},
userSoftSkills:{
    type : [String]
},
userResume : String 
})

const App = mongoose.model("App",appSchema)
export default App