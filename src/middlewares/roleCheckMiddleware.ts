import type { NextFunction, Request, Response } from "express";
import sendRes from "../helpers/sendResponse";

const roleCheckMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const role = ["admin", "moderator"];

  if (role.includes((req as any).user.role)) {
    next();
  } else {
    sendRes(res, {
      statusCode: 400,
      success: false,
      message: "Forbiddnen",
    });
  }
};

export default roleCheckMiddleWare;
