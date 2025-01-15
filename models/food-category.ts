import { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    categoryName: String,
    id: String,
  },
  { timestamps: true }
);

const FoodCategoryModel = model(
  "FoodCategory",
  FOOD_CATEGORY_SCHEMA,
  "food-category"
);

export { FoodCategoryModel };

const FOOD_SCHEMA = new Schema({
  foodName: String,
  category: String,
  price: Number,
});
const FoodModel = model("Food", FOOD_SCHEMA, "food");

export { FoodModel };

const FOOD_ORDER_SCHEMA = new Schema(
  {
    food: String,
    category: String,
  },
  { timestamps: true }
);

const FoodOrderModel = model("FoodOrder", FOOD_ORDER_SCHEMA, "food-order");

export { FoodOrderModel };
