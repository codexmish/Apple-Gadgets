import express, { type Request, type Response } from "express"
import { authRouter } from "./authRouter"
import { categoryRouter } from "./categoryRouter"
const router = express.Router()


router.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Healthy")
})

router.use("/user", authRouter)
router.use("/category", categoryRouter)

export default router