import type { Request, Response } from "express";
import { authService } from "../services/authServices";
import sendRes from "../helpers/sendResponse";

// ------------signup
const signup = async(req: Request, res: Response)=>{
    try {
        const user = await authService.signup(req.body)

        sendRes(res, {
            statusCode: 200,
            success: true,
            message: "signup successfully",
            data: user
        })
    } catch (error: any) {
        
        sendRes(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error
        })
    }

}

export const authController = {signup}