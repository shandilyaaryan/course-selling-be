import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import courseRouter from "./routes/course";

const app = express();
app.use(express.json());
const MONGODB_URL = process.env.MONGODB_URL!;

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

const startServer = async () => {
  try {
    const response = await mongoose.connect(MONGODB_URL);
    if (response) {
      console.log("Connected to the db");
      app.listen(3000, () => console.log("Server is running on Port 3000"));
    }
  } catch (e) {
    console.log("Error connecting to the Database", e);
    process.exit(1);
  }
};

startServer();
