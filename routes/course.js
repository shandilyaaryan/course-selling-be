import { Router } from "express"

const courseRouter = Router();


courseRouter.get("/course/preview", (req, res) => {});
courseRouter.post("/course/purchase", (req, res) => {});

export default courseRouter;