import express, { type Request, type Response } from "express"
import { authRouter } from "./authRouter"
const router = express.Router()


router.get("/", (req: Request, res: Response)=>{
    res.status(200).send("Healthy")
})

router.use("/user", authRouter)

export default router