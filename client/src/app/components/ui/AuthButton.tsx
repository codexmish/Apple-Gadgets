import React from "react";

interface AuthButtonProps {
  text: string;
}

const AuthButton = ({ text }: AuthButtonProps) => {
  return (
    <>
      <button
        type="submit"
        className="w-full bg-primaryOrange hover:bg-[#db6913] text-white font-semibold py-3 px-6 rounded-full shadow-md transition-all duration-200 cursor-pointer"
      >
        {text}
      </button>
    </>
  );
};

export default AuthButton;
