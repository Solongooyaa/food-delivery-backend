import mongoose, { model, Schema } from "mongoose";

const FOOD_CATEGORY_SCHEMA = new Schema(
  {
    categoryName: String,
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
  price: Number,
  image: String,
  ingredients: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodCategory",
  },
});
const FoodModel = model("Food", FOOD_SCHEMA, "food");

export { FoodModel };

const FoodOrderItemSchema = new Schema({
  food: String,
  quantity: Number,
});

const FOOD_ORDER_SCHEMA = new Schema({
  user: String,
  totalPrice: Number,
  foodOrderItems: [FoodOrderItemSchema],
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
  },
});

const FoodOrderModel = model("FoodOrder", FOOD_ORDER_SCHEMA, "food-order");

// const FoodOrderModel =
//   mongoose.models["FoodOrder"] || model("User", FOOD_ORDER_SCHEMA);

export { FoodOrderModel };

const USER_SCHEMA = new Schema(
  {
    email: String,
    password: String,
    phoneNumber: String,
    address: String,
    role: String,
    orderFoods: mongoose.Schema.Types.ObjectId,
    ttl: Date,
    isVerified: Boolean,
  },
  { timestamps: true }
);

const UserModel = model("User", USER_SCHEMA, "user");

export { UserModel };
