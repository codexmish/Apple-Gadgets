import type { Request, Response } from "express";
import { caragoryService } from "../services/catagoryService";
import sendRes from "../helpers/sendResponse";

const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await caragoryService.createCategory(req.body);
    console.log(category);

    sendRes(res, {
      statusCode: 200,
      success: true,
      message: "category created",
      data: category,
    });
  } catch (error: any) {
    sendRes(res, {
      statusCode: 500,
      success: false,
      message: error.message,
      error: error,
    });
  }
};

export const catagoryController = { createCategory };
