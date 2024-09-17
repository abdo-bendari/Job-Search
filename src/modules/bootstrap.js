import jobRouter from "./jobs/job.routes.js";
import userRouter from "./user/user.routes.js";
import companyRouter from "./company/company.routes.js";
import dbconn from "../../database/dbConnection.js";
import globalError from "../middleware/globalError.js";
import AppError from "../utils/Error.js";
import cors from "cors"

export const bootstrap = (app, express) => {
  process.on("uncaughtException", (err) => {
    console.log(err);
  });
  app.use(express.json());
  dbconn;
  const baseUrl ='/api/v1'
  app.use(cors())
  app.use(`${baseUrl}/user`, userRouter);
  app.use(`${baseUrl}/job`, jobRouter);
  app.use(`${baseUrl}/company`, companyRouter);
  app.use("*", (req, res, next) => {
    next(new AppError("route not found", 400));
  });
  process.on("unhandledRejection", (err) => {
    console.log(err);
  });
  app.use(globalError);
};
