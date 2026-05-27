import { OTPMailSender } from "../helpers/mailService";
import { OTPmailTemplate } from "../helpers/OTPmailTemplates";
import config from "../helpers/processEnv";
import { utils } from "../helpers/utils";
import type {
  ResendOtp,
  SignIn,
  UpdateUser,
  Usersignup,
  VerifyOTP,
} from "../interfaces/authInterface";
import { userSchema } from "../models/userSchema";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  const { email } = payload;
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

  return userData;
};

// ----------sign in
const signIn = async (payload: SignIn) => {
  const { email, password } = payload;

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

  // -----check if user not exist
  const userData = await userSchema.findOne({ email }).select("+password");

  if (!userData) {
    throw new Error("INVALD CREDENTIALS");
  }

  // passwordCheck
  const matchPassword = await bcrypt.compare(password, userData.password);

  if (!matchPassword) {
    throw new Error("INVALD CREDENTIALS");
  }

  //   JWT toke genarate
  const jwtPayload = {
    id: userData.id,
    name: userData.fullname,
    email: userData.email,
    role: userData.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.JWT_SEC, { expiresIn: "1d" });

  const RefreshToken = jwt.sign(jwtPayload, config.JWT_SEC, {
    expiresIn: "30d",
  });

  return { accessToken, RefreshToken, userData };
};

// -------------get profile
const getProfile = async (_id: string) => {
  const profileData = await userSchema.findOne(
    { _id },
    { fullname: 1, email: 1, role: 1, avatar: 1, address: 1 },
  );
  return profileData;
};

// ---------update profile
const updateProfile = async (
  payload: UpdateUser,
  avatarPayload: UpdateUser,
  _id: string,
) => {
  const { fullname, address } = payload;
  const avatar = avatarPayload;
  const userData = await userSchema.findOne({ _id });

  if (!userData) {
    throw new Error("Something went wrong");
  }

  if (fullname && fullname.trim()) userData.fullname = fullname;
  if (address && address.trim()) userData.address = address;
  if (avatar) {
    const avatarUrl = await utils.uploadToCloudinary({
      mimetype: (avatar as any).mimetype,
      imgBuffer: (avatar as any).buffer,
    });

    // deleting previous avatar
    if (userData.avatar) {
      utils.destroyFromCloudinary(userData.avatar);
    }

    // set new avatar
    userData.avatar = avatarUrl;
  }

  userData.save();
  return userData;
};

// -----get userList
const getUserList = async () => {
  const userList = await userSchema.find();
  return userList;
};

export const authService = {
  signup,
  verifyOtp,
  resentOtp,
  signIn,
  getProfile,
  updateProfile,
  getUserList,
};
