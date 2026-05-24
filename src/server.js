import express from "express";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";
import "dotenv/config";

// Import Routes
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

//Handle unhandled promise rejections (such as database connection errors)
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception:", err);
  await disconnectDB();
  process.exit(1);
});
