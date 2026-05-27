import type { Request, Response } from "express";
import { authService } from "../services/authServices";
import sendRes from "../helpers/sendResponse";

// ------------signup
const signup = async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);

    if (user) {
      sendRes(res, {
        statusCode: 200,
        success: true,
        message: "signup successfully, verify your email ",
        // data: user
      });
    }
  } catch (error: any) {
    sendRes(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// ----------verify-otp
const verifyOtp = async (req: Request, res: Response) => {
  const result = await authService.verifyOtp(req.body);

  try {
    if (!result) {
      sendRes(res, {
        statusCode: 400,
        success: false,
        message: "Invalid or expired OTP request",
      });
    }

    sendRes(res, {
      statusCode: 200,
      success: true,
      message: "email verified successfully",
    });
  } catch (error: any) {
    sendRes(res, {
      statusCode: 400,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

// ---------resend otp controller
const resendOtp = async (req: Request, res: Response) => {

  try {
    const result = await authService.resentOtp(req.body);

    if (result) {
      sendRes(res, {
        statusCode: 200,
        success: true,
        message: "New OTP sent",
      });
    }
  } catch (error: any) {
    sendRes(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const authController = { signup, verifyOtp, resendOtp };
