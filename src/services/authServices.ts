import { utils } from "../helpers/utils";
import type { Usersignup } from "../interfaces/authInterface";
import { userSchema } from "../models/userSchema";

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

  //   create user
  const user = userSchema.create({
    fullname,
    email,
    password,
    otp,
    otpExpiry: Date.now() + 5 * 60 * 1000,
  });

  return user
};

export const authService = { signup };
