import express from "express";
import jwt from "jsonwebtoken";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
const app = express();

app.use(express.json());

app.use("/user",userRouter);
app.use("/course", courseRouter);

app.listen(3000)
