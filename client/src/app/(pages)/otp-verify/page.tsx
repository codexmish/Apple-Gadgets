"use client";
import AuthButton from "@/app/components/ui/AuthButton";
import { showToast } from "@/app/utils/toast";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const page = () => {
  // ---form data
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  // ---handaler
  const handleverification = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    await setFormData((prev) => ({
      ...prev,
      email: searchParams.get("email") ?? "",
    }));

    try {
      const res = await fetch("http://localhost:8000/user/verify-otp", {
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
        router.push(`/signin`);
      } else {
        showToast(data.message, "error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resendOtpHandaler = async () => {
    await setFormData((prev) => ({
      ...prev,
      email: searchParams.get("email") ?? "",
    }));

    try {
      const res = await fetch("http://localhost:8000/user/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success == true) {
        showToast(data.message, "success");
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
            <div className="text-2xl text-blackText font-inter font-semibold flex items-center justify-center mb-10">
              Verify OTP
            </div>

            {/* ---form */}
            <form
              onSubmit={handleverification}
              action=""
              className="flex flex-col space-y-4"
            >
              {/* input */}
              <input
                onChange={(e) => {
                  setFormData((prev) => ({
                    ...prev,
                    otp: e.target.value,
                  }));
                }}
                type="text"
                className="
          h-20 w-[250px] rounded-[5px] border-2 border-black
          bg-white px-3 text-6xl text-blackText font-inter font-medium
          outline-none placeholder:text-[#9ca3af] text-center"
              />
              {/* button */}
              <AuthButton text="Verify" />
              <div className="mt-3 text-center text-base text-black font-inter font-normal">
                Dont get otp?{" "}
                <span
                  onClick={resendOtpHandaler}
                  className="text-primaryOrange font-medium link-theme cursor-pointer"
                >
                  Resend otp
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
