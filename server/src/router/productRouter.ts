import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import roleCheckMiddleWare from "../middlewares/roleCheckMiddleware";
import { productController } from "../controller/productController";
const router = express.Router();

router.post(
  "/createProduct",
  authMiddleware,
  roleCheckMiddleWare,
  productController.createProduct,
);

export const productRouter = router;
