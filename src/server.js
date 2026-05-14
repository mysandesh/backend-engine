import express from "express";

// Import Routers
import movieRoutes from "./routes/movieRoutes.js";

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
