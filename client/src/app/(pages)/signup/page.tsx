"use client";
import React, { useState } from "react";
import FormInput from "@/app/components/ui/FormInput";
import AuthButton from "@/app/components/ui/AuthButton";
import "react-toastify/dist/ReactToastify.css";
import { showToast } from "@/app/utils/toast";
import Link from "next/link";

const page = () => {
  // ----ragex
  const ragex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^.{6,}$/,
  };

  // -----error
  const [allError, setAllError] = useState({
    fullnameError: "border-[#d1d5db]",
    emailError: "border-[#d1d5db]",
    passwordError: "border-[#d1d5db]",
  });

  // ---form data
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  console.log(formData);

  // ------form submit handaler
  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation

    if (!formData.fullname || formData.fullname === "") {
      setAllError((prev) => ({ ...prev, fullnameError: "border-red-500" }));
    } else {
      setAllError((prev) => ({ ...prev, fullnameError: "border-[#d1d5db]" }));
    }

    if (
      !ragex.email.test(formData.email) ||
      !formData.email ||
      formData.email === ""
    ) {
      setAllError((prev) => ({ ...prev, emailError: "border-red-500" }));
    } else {
      setAllError((prev) => ({ ...prev, emailError: "border-[#d1d5db]" }));
    }

    if (
      !ragex.pass.test(formData.password) ||
      !formData.password ||
      formData.password === ""
    ) {
      setAllError((prev) => ({ ...prev, passwordError: "border-red-500" }));
    } else {
      setAllError((prev) => ({ ...prev, passwordError: "border-[#d1d5db]" }));
    }

    try {
      const res = await fetch("http://localhost:8000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      if (data.success == true) {
        showToast(data.message, "success");
      } else {
        showToast(data.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // --------onchange handaler
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full h-screen bg-black/30 backdrop-blur-3xl flex items-center justify-center">
        <div className="w-[450px] h-120 bg-white flex justify-center items-center rounded-2xl shadow-xl">
          {/* -----form */}
          <div>
            <div className="text-2xl text-blackText font-inter font-semibold flex items-center justify-center ">
              Sign Up
            </div>
            <form
              onSubmit={handleRegister}
              action=""
              className="flex flex-col space-y-4"
            >
              {/* ------fullname input */}
              <FormInput
                onchange={handleOnChange}
                name="fullname"
                label="Full Name"
                placeholder="Enter Your FullName"
                errBorder={allError.fullnameError}
              />
              {/* ------email input */}
              <FormInput
                onchange={handleOnChange}
                name="email"
                label="Email"
                placeholder="Enter Your Email"
                errBorder={allError.emailError}
              />
              {/* ------password input */}
              <FormInput
                onchange={handleOnChange}
                name="password"
                label="PassWord"
                placeholder="Enter Your Password"
                errBorder={allError.passwordError}
              />
               {/* -----button */}
              <AuthButton text="Sign Up" />
            </form>
            <div className="mt-6 text-center text-base text-black font-inter font-normal">
              Already have an account?{" "}
              <Link
                href={"/signin"}
                className="text-primaryOrange font-medium link-theme"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
