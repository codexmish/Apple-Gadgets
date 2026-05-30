import express, { type Request, type Response } from "express"
import dns from "dns"
import router from "./router";
import cookieParser from "cookie-parser"
import cors from "cors"
const app = express()
dns.setServers(["8.8.8.8", "8.8.4.4"]);
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(router)


export default app