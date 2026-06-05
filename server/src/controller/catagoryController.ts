import type { Request, Response } from "express";
import { caragoryService } from "../services/catagoryService";
import sendRes from "../helpers/sendResponse";

// ------create category
const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await caragoryService.createCategory(req.body);

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

// ------get all category
const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await caragoryService.getAllCategory();

    sendRes(res, {
      statusCode: 200,
      success: true,
      data: categories,
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

export const catagoryController = { createCategory, getAllCategory };
