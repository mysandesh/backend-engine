import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ httpMethod: "get", message: "This is the auth route" });
});

export default router;
