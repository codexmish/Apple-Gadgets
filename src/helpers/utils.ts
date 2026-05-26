import crypto from "crypto";

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

export const utils = { isValidateEmail, isValidatePassword, generateOTP };
