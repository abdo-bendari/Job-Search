import { Router } from "express";
import * as hbh from "./job.controller.js";
import verifyToken from "../../middleware/auth.js";
import  {upload}  from "../../middleware/fileUpload.js";
import validation from "../../middleware/validation.js";
import addJobSchema from "./Job.validation.js";
import { customvalidation } from "../../middleware/fileUpload.js";
const jobRouter = Router()

jobRouter
.post('/addJob',verifyToken,validation(addJobSchema),hbh.addJob)
.put('/updateJob',verifyToken,hbh.updateJob)
.delete('/deleteJob',verifyToken,hbh.deleteJob)
.get('/withCompany',verifyToken,hbh.getJobWithCompany)
.get('/ByName/:name',hbh.getJobWithCompanyByName)
.get('/filterBy',verifyToken,hbh.filterBy)
.post('/apply',verifyToken,hbh.applyToJob)
.post('/addPdf',upload(customvalidation.application).single('userResume'),hbh.addPdf)
export default jobRouter