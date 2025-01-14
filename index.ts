import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");

const PORT = 8000;
const app = express();
app.use(express.json());

configDotenv();
const URI = process.env.MONGODB_URI;

const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      "Database Connection URI is not definedd in environment variables."
    );
  }
  try {
    await mongoose.connect(MONGODB_URI);
  } catch (error) {
    console.log("Failed to connect to the MongoDB database:", error);
  }
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
  res.send(data);
});
app.get("/food-category/:id", async (req: Request, res: Response) => {
  //Create Food Category
  const id = req.params;
  //   const date = Date.now();

  const newItem = await FoodCategoryModel.findById({ id });
  res.send({
    message: "New Food.",
    newItem,
  });
});

app.post("/food-category/:id", async (req: Request, res: Response) => {
  //Create new Food Category

  const newItem = await FoodCategoryModel.create({ categoryName: "Fruit" });
  res.send({
    message: "New Food.",
    newItem,
  });
});

app.put("/food-category/:id", async (req: Request, res: Response) => {
  // Update Food Category
  const updateItem = await FoodCategoryModel.create({
    categoryName: req.body.categoryName,
  });

  //Fetch all Food Categories
  const foodCategories = await FoodCategoryModel.find();
  res.send({
    message: "hi",
    foodCategories,
  });

  console.log(foodCategories);
  //   console.log(id);
});
app.delete("/food-category/:id", async (req: Request, res: Response) => {
  //Delete all Food Categories
  // const foodCategories = await FoodCategoryModel.filter(());
  const deleteItem = await FoodCategoryModel.findByDelete(req.params.id);
  res.json(deleteItem);
});

app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
