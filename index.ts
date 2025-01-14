import { configDotenv } from "dotenv";
import express, { Request, Response } from "express";
const mongoose = require("mongoose");

const PORT = 8000;
const app = express();
app.use(express.json());

configDotenv();

export const connectMongoDB = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  await mongoose.connect(MONGODB_URI);
};

connectMongoDB();

const FOOD_CATEGORY_SCHEMA = new mongoose.Schema();
app.get("/", async (req: Request, res: Response) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
