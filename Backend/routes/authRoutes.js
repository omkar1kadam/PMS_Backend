import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/authController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

// example admin-only route
router.get("/admin/data", protect, adminOnly, (req, res) => {
  res.json({ message: "Welcome Admin, you have special access!" });
});

export default router;
