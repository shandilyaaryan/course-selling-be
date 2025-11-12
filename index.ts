import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user";
import adminRouter from "./routes/admin";
import courseRouter from "./routes/course";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

const startServer = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connected to the database");
    app.listen(process.env.PORT! || 3000, () =>
      console.log(`Server is running on PORT ${process.env.PORT}`)
    );
  } catch (error) {
    console.log("Error connecting to the database" + error);
  }
};

startServer();
