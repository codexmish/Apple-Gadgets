// const cloudinary = require("cloudinary").v2;
import { v2 as cloudinary } from "cloudinary";
import config from "../helpers/processEnv";

cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.CLOUDINARY_API,
  api_secret: config.CLOUDINARY_SECRET,
});

export default cloudinary;
