import express from "express";
import authMiddleware from "../middlewares/authMiddleware";
import roleCheckMiddleWare from "../middlewares/roleCheckMiddleware";
import { productController } from "../controller/productController";
import multer from "multer";
const upload = multer();
const router = express.Router();

router.post(
  "/createproduct",
  authMiddleware,
  roleCheckMiddleWare,
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "images", maxCount: 4 },
  ]),
  productController.createProduct,
);

export const productRouter = router;
