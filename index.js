import express from "express";
import mongoose from "mongoose";
import "dotenv/config.js";
import userRouter from "./routes/user.js";
import courseRouter from "./routes/course.js";
import adminRouter from "./routes/admin.js";
const app = express();

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

const startServer = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to db");
    app.listen(3000, console.log("Server is running"));
  } catch (error) {
    console.log("Connection failed", error);
    process.exit(1)
  }
};

startServer();
