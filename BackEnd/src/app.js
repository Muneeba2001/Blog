import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import appRouter from "./routes/index.js";
const appData = express();

appData.use(cors());
appData.use(express.json());
appData.use(appRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/Blogger")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error("DB connection error: ", err));

appData.listen(3000, () => {
  console.log("Server Started on port 3000!");
});
