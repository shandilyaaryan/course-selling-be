import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(json());

app.get("/login", (req, res) => {});
app.post("/signup", (req, res) => {});
app.get("/courses", (req, res) => {});
app.put("/course/purchase", (req, res) => {});
app.get("/user/courses", (req, res) => {});
app.listen(3000);
