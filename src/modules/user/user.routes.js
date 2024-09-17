import { Router } from "express";
import * as cr7 from "./user.controller.js";
import signUpSchema from "./user.validation.js";
import verifyToken from "../../middleware/auth.js";
import validation from "../../middleware/validation.js";
const userRouter = Router();

userRouter
.post("/signUp", validation(signUpSchema), cr7.signUp)
.post('/logIn',cr7.logIn)
.patch('/confirm',cr7.confirmEmail)
.put('/updateAccount',verifyToken,cr7.updateAccount)
.delete('/delete',verifyToken,cr7.deleteAccount)
.get('/getMyAccount',verifyToken,cr7.getMyAccount)
.get('/getAccount/:id',verifyToken,cr7.getAccount)
.patch('/updatePassword',verifyToken,cr7.updatePassword)
.post('/f',cr7.forgetPassword)
.patch('/change',cr7.ChangePassword)
export default userRouter;
