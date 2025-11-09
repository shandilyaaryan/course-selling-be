import { Router } from "express";

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.send("Signup Successfull");
});

userRouter.post("/signin", (req, res) => {
  res.send("Signin Successfull");
});

userRouter.get("/purchase", (req, res) => {
  res.send("These are all the courses you purchased");
});

userRouter.post("/purchase", (req, res) => {});
export default userRouter;
