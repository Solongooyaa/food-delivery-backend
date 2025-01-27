import mongoose, { model, Schema } from "mongoose";

const FOOD_SCHEMA = new Schema({
  foodName: String,
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodCategory",
  },
});

const FoodModel = mongoose.models["Food"] || model("Food", FOOD_SCHEMA);

export { FoodModel };
