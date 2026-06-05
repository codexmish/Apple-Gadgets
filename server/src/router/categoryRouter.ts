import express from "express";
import { catagoryController } from "../controller/catagoryController";
import authMiddleware from "../middlewares/authMiddleware";
import roleCheckMiddleWare from "../middlewares/roleCheckMiddleware";
const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  roleCheckMiddleWare,
  catagoryController.createCategory,
);

export const categoryRouter = router;
