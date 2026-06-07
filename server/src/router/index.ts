import express, { type Request, type Response } from "express"
import { authRouter } from "./authRouter"
import { categoryRouter } from "./categoryRouter"
import { productRouter } from "./productRouter"
const router = express.Router()


router.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Healthy")
})

router.use("/user", authRouter)
router.use("/category", categoryRouter)
router.use("/products", productRouter)

export default router