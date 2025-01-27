import mongoose, { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema({
  categoryName: String,
});

const FoodCategoryModel =
  mongoose.models["FoodCategory"] ||
  model("FoodCategory", FOOD_CATEGORY_SCHEMA);

export { FoodCategoryModel };
