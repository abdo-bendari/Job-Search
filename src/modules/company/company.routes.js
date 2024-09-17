import { Router } from "express";
import* as CR7 from "./company.controller.js";
import validation from "../../middleware/validation.js";
import addCompanySchema from "./Company.validation.js";
const companyRouter = Router()
import verifyToken from "../../middleware/auth.js";

companyRouter
.post('/add',validation(addCompanySchema),CR7.addCompanies)
.put('/updateCompany',verifyToken,CR7.updateCompany)
.delete('/deleteCompany',verifyToken,CR7.deleteCompany)
.get ('/withJobs/:companyId',CR7.getCompanyWithJobs)
.get('/byName/:name',CR7.getByName)

//////////////////////////////////////////////////////////
companyRouter.get('/getJobWithApps/:jobId',verifyToken,CR7.getAppForSpecificJob)


export default companyRouter