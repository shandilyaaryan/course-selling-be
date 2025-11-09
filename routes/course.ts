import { Router } from "express";

const courseRouter = Router();

courseRouter.get("/preview", (req, res) => {
  res.send("These are all the courses");
});
courseRouter.post("/purchase", (req, res) => {
  res.send("Purchase this course");
});

export default courseRouter;
