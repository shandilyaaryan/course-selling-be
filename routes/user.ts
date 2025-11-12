import { Router } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { userSchema } from "../schemas/userSchema";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  const userDetails = userSchema.safeParse(req.body);
  if(!userDetails.success){
    res.json({
      error: userDetails.error
    })
  }
});

userRouter.post("/signin", (req, res) => {
  res.send("Signin Successfull");
});

userRouter.get("/purchase", (req, res) => {
  res.send("These are all the courses you purchased");
});

userRouter.post("/purchase", (req, res) => {});
export default userRouter;