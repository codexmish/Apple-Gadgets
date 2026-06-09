import type { Request, Response } from "express";
import { productService } from "../services/productService";
import sendRes from "../helpers/sendResponse";

// -------create product controller
const createProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.createProduct(
      req.body,
      (req as any).files,
    );

    if (result) {
      sendRes(res, {
        statusCode: 200,
        success: true,
        message: "New Product Created successfully",
        data: result,
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

export const productController = { createProduct };
