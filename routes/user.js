import { Router } from "express";


const userRouter = Router();


userRouter.post("/user/signup", (req, res) => {});
userRouter.post("/user/signin", (req, res) => {});
userRouter.get("/user/purchases", (req, res) => {});

export default userRouter;