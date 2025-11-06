import mongoose from "mongoose";
import 'dotenv/config.js'

console.log("trying")

const response = await mongoose.connect(process.env.MONGODB_URL)

if (mongoose) {
    console.log("connected to db")
}

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
  creatorID: { type: Schema.Types.ObjectId},
});

const purchaseSchema = new Schema({
  userID: { type: Schema.Types.ObjectId },
  courseID: { type: Schema.Types.ObjectId },
});


export const userModel = mongoose.model('user', userSchema);
export const adminModel = mongoose.model('admin', userSchema);
export const courseModel = mongoose.model('course', userSchema);
export const purchaseModel = mongoose.model('purchase', userSchema);
