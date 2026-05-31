import AuthButton from "@/app/components/ui/AuthButton";

const page = () => {
  return (
    <>
      <div className="w-full h-screen bg-black/30 backdrop-blur-3xl flex items-center justify-center">
        {/* Main Card Container */}
        <div className="w-[450px] p-10 bg-white rounded-[24px] shadow-xl font-sans">
          {/* Header Section */}
          <h2 className="text-3xl font-bold text-center text-blackText mb-2 tracking-wide">
            Verification
          </h2>
          <p className="text-sm text-center text-gray-500 mb-8">
            Enter the code sent to your device
          </p>

          {/* Form Container */}
          <div className="space-y-6">
            {/* OTP Input Boxes styled like the inputs in image_98097d.png */}
            <div className="flex justify-center gap-4 my-6">
              {[1, 2, 3, 4].map((index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="-"
                  className="w-14 h-14 text-center text-xl font-semibold border border-gray-300 rounded-lg bg-white text-gray-700 placeholder-gray-300 focus:outline-none"
                />
              ))}
            </div>

            {/* Theme-matched Orange Action Button */}
            <button
              type="button"
              className="w-full py-3.5 bg-[#f27a22] text-white font-semibold rounded-full hover:bg-[#e06912] transition-colors shadow-md text-base"
            >
              Verify
            </button>

            <AuthButton/>
            
          </div>

          {/* Footer Link matching the "Already have an account? Login" style */}
          <div className="text-center mt-8 text-sm text-[#111]">
            Didn't receive the code?{" "}
            <span className="text-[#f27a22] font-semibold cursor-pointer hover:underline">
              Resend
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
