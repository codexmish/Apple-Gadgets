import express from "express";
import { authController } from "../controller/authController";
import authMiddleware from "../middlewares/authMiddleware";
const router = express.Router();

router.post("/signup", authController.signup);
router.post("/verify-otp", authController.verifyOtp);
router.post("/resend-otp", authController.resendOtp);
router.post("/signin", authController.signIn);
router.get("/profile", authMiddleware, authController.getProfile);

export const authRouter = router;
