import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "API Route" });
});

export default routes;
