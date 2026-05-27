import crypto from "crypto";
import cloudinary from "../configs/cloudinaryConfi";

// ---email razex
function isValidateEmail(email: string) {
  const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRagex.test(email);
}

// ---password razex
function isValidatePassword(password: string) {
  const passwordRagex = /^.{6,}$/;
  return passwordRagex.test(password);
}

// ---otp generator
const generateOTP = () => {
  return crypto.randomInt(1000, 10000).toString();
};

// -----upload to cloudinary
const uploadToCloudinary = async ({ mimetype, imgBuffer }: any) => {
  const dataUrl = `data:${mimetype};base64,${imgBuffer.toString("base64")}`;
  const res = await cloudinary.uploader.upload(dataUrl);
  return res.secure_url;
};

// ------distroy from cloudinary
const destroyFromCloudinary= (url: string)=>{
  const publicId = url.split("/").pop()?.split(".").shift()

  cloudinary.uploader.destroy(publicId as string, (error, result)=>{
    if(error){
      console.log("destroy from cloudinary:", error);
    }
    
  })
}

export const utils = {
  isValidateEmail,
  isValidatePassword,
  generateOTP,
  uploadToCloudinary,
  destroyFromCloudinary
};
