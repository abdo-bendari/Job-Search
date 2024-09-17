import multer from "multer";
import {v4 as uuidv4} from 'uuid'
import AppError from "../utils/Error.js";

export const customvalidation = {
   application :['application/pdf']
}

export const upload =(customvalidation)=>{
    const storage = multer.diskStorage({
        destination: function (req,file,cb){
            cb(null,'uploads/')
        },
        filename:function(req,file,cb){
            cb(null,uuidv4()+'-'+file.originalname)
        }
    })
    
    const fileFilter=(req,file,cb)=>{
        if(customvalidation.application.includes(file.mimetype)){
            cb(null,true)
        }else{
            cb(new AppError('invalid format',400))
        }
    }
    
    const upload = multer({
        storage,fileFilter,limits:{
            fileSize:1 * 1024 * 1024
        }
    })
    return upload
}