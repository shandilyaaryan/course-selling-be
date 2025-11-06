import { Router } from "express";   
import { adminModel } from "../db.js";

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  await adminModel.create({
    email,
    password
  }) 
});

adminRouter.post("/signin", (req, res) => {
  res.send("Admin signin");
});

adminRouter.post("/delete", (req, res) => {
  res.send("Admin delete course");
});

adminRouter.post("/course", (req, res) => {
  res.send("Admin create course");
});

adminRouter.put("/course", (req, res) => {
  res.send("Admin add");
});

adminRouter.post("/course/bulk", (req, res) => {
  res.send("These are the courses");
});

export default adminRouter;
