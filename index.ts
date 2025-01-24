import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const cors = require("cors");
import { foodCategoryRouter } from "./router/food-category";
import { FoodCategoryModel, UserModel } from "./models/food-category";
import { foodRouter } from "./router/food";
import { foodOrderRouter } from "./router/food-order";
import { userRouter } from "./router/user";

const PORT = 8000;
const app = express();
app.use(cors());
app.use(express.json());

configDotenv();

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};

connectMongoDB();

app.use("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.use("/food-category", foodCategoryRouter);
app.use("/food", foodRouter);
app.use("/food-order", foodOrderRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
