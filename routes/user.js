import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("Signup successfull");
});
userRouter.post("/signin", (req, res) => {
  res.send("Signin successfull");
});
userRouter.get("/purchases", (req, res) => {
  res.send("These are all the courses you purchased");
});

export default userRouter;
