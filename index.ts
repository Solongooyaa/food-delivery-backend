import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const cors = require("cors");

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

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema({
  categoryName: String,
  id: Number,
});

const FoodCategoryModel = mongoose.model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

app.get("/food-category/", async (req: Request, res: Response) => {
  //Create new Food Category
  const data = await FoodCategoryModel.find();
  res.json(data);
});

app.get("/food-category/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params.id;
  const item = await FoodCategoryModel.findById(id);
  res.json(item);
});

app.post("/food-category/", async (req: Request, res: Response) => {
  const newItem = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
  });
  res.json(newItem);
});

app.put("/food-category/:id", async (req: Request, res: Response) => {
  const updatedItem = await FoodCategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      categoryName: req.body.categoryName,
    },
    { new: true }
  );
  res.json(updatedItem);
});

app.delete("/food-category/:id", async (req: Request, res: Response) => {
  const deletedItem = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  res.json(deletedItem);
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
