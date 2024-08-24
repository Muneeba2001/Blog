import { Router } from "express";
import blogConroller from "../controller/index.js";
const appRouter = Router();

appRouter.get("/blog", blogConroller.get);
appRouter.post("/blog", blogConroller.create);

export default appRouter;
