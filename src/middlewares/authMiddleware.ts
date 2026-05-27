import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../helpers/processEnv";
import sendRes from "../helpers/sendResponse";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { acc_tkn } = req.cookies;

    const decoded = jwt.verify(acc_tkn as string, config.JWT_SEC) as JwtPayload;

    if (decoded) {
      (req as any).user = decoded;
      next();
    } else {
      sendRes(res, {
        statusCode: 401,
        success: false,
        message: "unauthorized request",
      });
    }
  } catch (error) {
    console.log(error);

    sendRes(res, {
      statusCode: 401,
      success: false,
      message: "unauthorized request",
    });
  }
};

export default authMiddleware
