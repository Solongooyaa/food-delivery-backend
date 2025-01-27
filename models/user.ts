import mongoose, { model, Schema } from "mongoose";

const USER_SCHEMA = new Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  role: String,
  orderFoods: mongoose.Schema.Types.ObjectId,
  ttl: Date,
  isVerified: Boolean,
});

const UserModel = mongoose.models["User"] || model("User", USER_SCHEMA);

export { UserModel };
