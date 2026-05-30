type FormInputProps = {
  label: string;
  placeholder: string;
};

const FormInput = ({ label, placeholder }: FormInputProps) => {
  return (
    <>
      <div className="w-[378px]">
        <label className="mb-2 block text-[14px] text-blackText font-inter font-semibold">
          {label}
        </label>

        <input
          type="text"
          placeholder={placeholder}
          className="
          h-10 w-full rounded-[5px] border border-[#d1d5db]
          bg-white px-3 text-[14px] text-blackText font-inter font-medium
          outline-none placeholder:text-[#9ca3af]
          focus:border-[#c7cdd5]
        "
        />
      </div>
    </>
  );
};

export default FormInput;
