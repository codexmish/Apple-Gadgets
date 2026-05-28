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

export interface UpdateUser {
  fullname?: string;
  address?: string;
  avatar?: string;
}

export interface FilteringUser {
  isVerified?: boolean;
  limit?: number;
  page?: number;
}
