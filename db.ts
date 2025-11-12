import mongoose, { Document, Schema, type CallbackError } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  username: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isModified(path: string): boolean;
}

async function hashPassword(this: IUser, next: (err?: CallbackError) => void) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
}

const userSchema = new Schema<IUser>({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

const adminSchema = new Schema<IUser>({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  firstName: String,
  lastName: String,
});

userSchema.pre("save", hashPassword);
adminSchema.pre("save", hashPassword);

const courseSchema = new Schema({
  title: String,
  description: String,
  imageURL: String,
  price: Number,
  creatorId: { type: Schema.Types.ObjectId, ref: "Admin" },
});

const purchaseSchema = new Schema({
  creatorId: { type: Schema.Types.ObjectId, ref: "Admin" },
  courseId: { type: Schema.Types.ObjectId, ref: "Course" },
  userId: { type: Schema.Types.ObjectId, ref: "User" },
});

export const userModel = mongoose.model("User", userSchema);
export const adminModel = mongoose.model("Admin", adminSchema);
export const courseModel = mongoose.model("Course", courseSchema);
export const purchaseModel = mongoose.model("Purchase", purchaseSchema);
