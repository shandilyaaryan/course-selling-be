import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  imageURL: String,
  price: Number,
  creatorID: { type: Schema.Types.ObjectId },
});

const purchaseSchema = new Schema({
  userID: { type: Schema.Types.ObjectId },
  courseID: { type: Schema.Types.ObjectId },
});

export const userModel = mongoose.model("user", userSchema);
export const adminModel = mongoose.model("admin", adminSchema);
export const courseModel = mongoose.model("course", courseSchema);
export const purchaseModel = mongoose.model("purchase", purchaseSchema);
