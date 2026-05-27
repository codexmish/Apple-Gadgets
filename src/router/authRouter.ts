import express from "express";
import { authController } from "../controller/authController";
import authMiddleware from "../middlewares/authMiddleware";
import multer from "multer";
const upload = multer();
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOtp);
router.post("/resend-otp", authController.resendOtp);
router.post("/signin", authController.signIn);
router.get("/profile", authMiddleware, authController.getProfile);
router.put(
  "/updateprofile",
  authMiddleware,
  upload.single("avatar"),
  authController.updateProfile,
);

export const authRouter = router;
