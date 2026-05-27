import express from "express"
import { authController } from "../controller/authController"
const router = express.Router()

router.post("/signup", authController.signup)
router.post("/verify-otp", authController.verifyOtp)
router.post("/resend-otp", authController.resendOtp)



export const authRouter = router
