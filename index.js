import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(json());

app.get("/login", (req, res) => {});
app.get("/signup", (req, res) => {});
app.get("/purchase", (req, res) => {});
app.get("/get", (req, res) => {});

app.listen(3000);
