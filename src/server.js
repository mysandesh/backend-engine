import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";
import "dotenv/config";

// Import Routers
import movieRoutes from "./routes/movieRoutes.js";
config();
connectDB();

const app = express();

// API Routes
app.use("/movies", movieRoutes);

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = 5001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
