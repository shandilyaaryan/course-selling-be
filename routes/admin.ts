import { Router } from "express";  

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
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

adminRouter.get("/course/bulk", (req, res) => {
  res.send("These are the courses");
});

export default adminRouter;