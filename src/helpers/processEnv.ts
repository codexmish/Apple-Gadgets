import dotenv from "dotenv"
dotenv.config()

const config = {
    DB_URL: process.env.DB_URL as string
}

export default config