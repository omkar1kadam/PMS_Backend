import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

// student & admin can see projects
router.get("/", protect, getProjects);
router.post("/", protect, createProject);

// get single project
router.get("/:id", protect, getProjectById);

// update & delete only admins
router.put("/:id", protect, adminOnly, updateProject);
router.delete("/:id", protect, adminOnly, deleteProject);

export default router;
