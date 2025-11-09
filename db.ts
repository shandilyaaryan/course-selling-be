import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: String,
  firstName: String,
  lastName: String,
});
const adminSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  imageURL: String,
  price: Number,
  creatorId: { type: Schema.Types.ObjectId, ref: "Admin" },
});

const purchaseSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  creatorId: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  courseId: { type: Schema.Types.ObjectId, ref: "Course", required: true },
});

export const userModel = mongoose.model("User", userSchema);
export const adminModel = mongoose.model("Admin", adminSchema);
export const courseModel = mongoose.model("Course", courseSchema);
export const purchaseModel = mongoose.model("Purchase", purchaseSchema);
