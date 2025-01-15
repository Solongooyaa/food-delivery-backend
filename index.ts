import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const cors = require("cors");
import { foodCategoryRouter } from "./router/food-category";
import { FoodCategoryModel } from "./models/food-category";
import { foodRouter } from "./router/food";
import { foodOrderRouter } from "./router/food-order";

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

app.use("/food-category/", foodCategoryRouter);
app.use("/food/", foodRouter);
app.use("/food-order/", foodOrderRouter);

// app.use("/food-category/", async (req: Request, res: Response) => {
//   const newItem = await FoodCategoryModel.create({
//     categoryName: req.body.categoryName,
//   });
//   res.json(newItem);
// });

// app.use("/food-category/:id", async (req: Request, res: Response) => {
//   const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       categoryName: req.body.categoryName,
//     },
//     { new: true }
//   );
//   res.json(updatedItem);
// });

// app.use("/food-category/:id", async (req: Request, res: Response) => {
//   const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
//   res.json(deletedItem);
// });

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
