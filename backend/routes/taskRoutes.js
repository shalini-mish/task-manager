import express from "express";
import { protect } from "../middleware/auth.js";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

// Routes
router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

// ⭐ Toggle route
router.patch("/:id/toggle", protect, toggleTaskStatus);

export default router;
