import dotenv from "dotenv"
dotenv.config()

const config = {
    DB_URL: process.env.DB_URL as string,
    MAIL_USER: process.env.MAIL_USER as string,
    MAIL_PASS: process.env.MAIL_PASS as string,
    JWT_SEC: process.env.JWT_SEC as string,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME as string,
    CLOUDINARY_API: process.env.CLOUDINARY_API as string,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET as string
}

export default config