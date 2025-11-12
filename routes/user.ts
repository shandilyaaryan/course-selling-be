import { Router } from "express";
import jwt from "jsonwebtoken";
import { userSchema, type UserSchema } from "../schemas/userSchema";
import { userModel } from "../db";

const userRouter = Router();
const JWT_SECRET = process.env.JWT_SECRET!;

userRouter.post("/signup", async (req, res) => {
  const userDetails = userSchema.safeParse(req.body);
  if (!userDetails.success) {
    return res.json({
      error: userDetails.error,
    });
  }
  const { username, password } = userDetails.data; 
  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(409).json({
        message: "Username already exists",
      });
    } else {
      const user = await userModel.create({
        username,
        password,
      });
      const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });
      res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      sameSite: "strict", 
      maxAge: 7 * 24 * 60 * 60 * 1000,
  });
      return res.status(201).json({ message: "Signup successful" });
    }
  } catch (error) {
    return res.status(411).json({
      message: "Error in creating the user",
      error,
    });
  }
});

userRouter.post("/signin", (req, res) => {
  
});

userRouter.get("/purchase", (req, res) => {
  res.send("These are all the courses you purchased");
});

userRouter.post("/purchase", (req, res) => {});
export default userRouter;
