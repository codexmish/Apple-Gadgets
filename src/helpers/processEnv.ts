import dotenv from "dotenv"
dotenv.config()

const config = {
    DB_URL: process.env.DB_URL as string,
    MAIL_USER: process.env.MAIL_USER as string,
    MAIL_PASS: process.env.MAIL_PASS as string
}

export default config