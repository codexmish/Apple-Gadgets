import express, { type Request, type Response } from "express"
import dns from "dns"
const app = express()
dns.setServers(["8.8.8.8", "8.8.4.4"]);
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})


export default app