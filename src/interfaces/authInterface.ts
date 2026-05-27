export interface Usersignup {
  fullname: string;
  email: string;
  password: string;
  role?: "user" | "moderator" | "admin";
}

export interface VerifyOTP {
  email: string;
  otp: string;
}

export interface ResendOtp {
  email: string;
}

export interface SignIn {
  email: string;
  password: string;
}
