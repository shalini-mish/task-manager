import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// --------------------------------------------
// SERVE REACT FRONTEND FROM SAME BACKEND PORT
// --------------------------------------------
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});
// --------------------------------------------

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server — IMPORTANT CHANGE HERE
const PORT = process.env.PORT || 4000;

//app.listen(PORT, "0.0.0.0", () => {
  //console.log(`Server running on http://0.0.0.0:${PORT}`);
//});
app.listen(4000, '0.0.0.0', () => console.log("Server running"));
