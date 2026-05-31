"use client";
import AuthButton from "@/app/components/ui/AuthButton";
import FormInput from "@/app/components/ui/FormInput";
import { showToast } from "@/app/utils/toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  // ----ragex
  const ragex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    pass: /^.{6,}$/,
  };

  // ---form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  console.log(formData);

  const router = useRouter();

  // -----error
  const [allError, setAllError] = useState({
    emailError: "border-[#d1d5db]",
    passwordError: "border-[#d1d5db]",
  });
  // --------onchange handaler
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ------form submit handaler
  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validation

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
      const res = await fetch("http://localhost:8000/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success == true) {
        showToast(data.message, "success");
        router.push(`/`);
      } else {
        showToast(data.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-black/30 backdrop-blur-3xl flex items-center justify-center">
        <div className="w-[450px] h-100 bg-white flex justify-center items-center rounded-2xl shadow-xl">
          <div>
            <div className="text-2xl text-blackText font-inter font-semibold flex items-center justify-center ">
              Sign In
            </div>
            <form
              onSubmit={handleRegister}
              action=""
              className="flex flex-col space-y-4"
            >
              {/* ------Email input */}
              <FormInput
                onchange={handleOnChange}
                name="email"
                label="email"
                placeholder="Enter Your email"
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

              <AuthButton text="Sign in" />

              <div className="mt-3 text-center text-base text-black font-inter font-normal">
                Dont have an account?{" "}
                <Link
                  href={"/signin"}
                  className="text-primaryOrange font-medium link-theme"
                >
                  sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
