import mongoose from "mongoose";
import bcrypt from "bcrypt"

const user = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    otp: {
      type: String,
      default: null,
    },
    otpExpiry: {
      type: Date,
    },
    role: {
      type: String,
      require: true,
      default: "user",
      enum: ["user", "moderator", "admin"],
    },
  },
  { timestamps: true },
);


user.methods.comparePassword = async function (plainPass: string) {
  return await bcrypt.compare(plainPass, this.password);
};

export const userSchema = mongoose.model("user", user);
