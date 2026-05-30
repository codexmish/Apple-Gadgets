import FormInput from "@/app/components/ui/FormInput";

const page = () => {
  return (
    <>
      <div className="w-full h-screen bg-black/30 backdrop-blur-3xl flex items-center justify-center">
        <div className="w-[450px] h-120 bg-white flex justify-center items-center rounded-2xl shadow-xl">
          {/* -----form */}
          <div>
            <div className="text-2xl text-blackText font-inter font-semibold flex items-center justify-center mb-20">
              Sign In
            </div>
            <form action="" className="flex flex-col space-y-4">
              {/* ------fullname input */}
              <FormInput label="Full Name" placeholder="Enter Your FullName" />
              {/* ------email input */}
              <FormInput label="Email" placeholder="Enter Your Email" />
              {/* ------password input */}
              <FormInput label="PassWord" placeholder="Enter Your Password" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
