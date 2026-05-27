import { OTPMailSender } from "../helpers/mailService";
import { OTPmailTemplate } from "../helpers/OTPmailTemplates";
import { utils } from "../helpers/utils";
import type { ResendOtp, Usersignup, VerifyOTP } from "../interfaces/authInterface";
import { userSchema } from "../models/userSchema";
import bcrypt from "bcrypt";

// ------------signup
const signup = async (payload: Usersignup) => {
  const { fullname, email, password } = payload;

  // ---name validatine
  if (!fullname) {
    throw new Error("Name is required");
  }

  // ---email validatine
  if (!email) {
    throw new Error("Email is required");
  }

  if (!utils.isValidateEmail(email)) {
    throw new Error("Email not valid");
  }

  // ---password validatine
  if (!password) {
    throw new Error("Password is required");
  }

  if (!utils.isValidatePassword(password)) {
    throw new Error("Password not valid");
  }

  // ---------checking if email already exist
  const existemail = await userSchema.findOne({ email });

  if (existemail) {
    throw new Error("This email already used");
  }

  //  otp generate
  const otp = utils.generateOTP();

  // password hash
  const hashPassword = await bcrypt.hash(password, 10);

  //   create user
  const user = userSchema.create({
    fullname,
    email,
    password: hashPassword,
    otp,
    otpExpiry: Date.now() + 5 * 60 * 1000,
  });

  //   otp  mail send
  OTPMailSender({
    email,
    subject: "verify your OTP",
    template: OTPmailTemplate(otp),
  });

  return user;
};

// -----------Verify-otp
const verifyOtp = async (payload: VerifyOTP) => {
  const { email, otp } = payload;

  // ---email validatine
  if (!email) {
    throw new Error("Email is required");
  }

  if (!utils.isValidateEmail(email)) {
    throw new Error("Email not valid");
  }

  const userData = await userSchema.findOneAndUpdate(
    {
      email,
      otp,
      otpExpiry: { $gt: Date.now() },
      isVerified: false,
    },
    {
      $set: {
        otp: null,
        otpExpiry: null,
        isVerified: true,
      },
    },
    {
      returnDocument: "after",
    },
  );

  // if (!userData) {
  //   throw new Error("Invalid or expired OTP request");
  // }

  return userData;
};

// ---------resend otp
const resentOtp = async (payload: ResendOtp) => {
  const {email} = payload
  // ---email validatine
  if (!email) {
    throw new Error("Invalid Request");
  }

  if (!utils.isValidateEmail(email)) {
    throw new Error("Invalid Request");
  }

  const userData = await userSchema.findOne({ email, isVerified: false });

  if (!userData) {
    throw new Error("Invalid Request");
  }

  // otp generate
  const otp = utils.generateOTP();

  userData.otp = otp;
  userData.otpExpiry = new Date(Date.now() + 5 * 60 * 1000);
  await userData.save();

  //   otp  mail send
  OTPMailSender({
    email,
    subject: "verify your OTP",
    template: OTPmailTemplate(otp),
  });
  
  console.log(userData);
  

  return userData
};


// ----------sign in
const signIn = async ()=>{

}

export const authService = { signup, verifyOtp, resentOtp, signIn };
