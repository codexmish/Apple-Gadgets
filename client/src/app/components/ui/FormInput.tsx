

type FormInputProps = {
  label: string;
  placeholder: string;
  name: string;
  onchange: React.ChangeEventHandler<HTMLInputElement>
  errBorder: string
};

const FormInput = ({ label, placeholder,name, onchange, errBorder }: FormInputProps) => {
  return (
    <>
      <div className="w-[378px]">
        <label className="mb-2 block text-[14px] text-blackText font-inter font-semibold">
          {label}
        </label>

        <input
        onChange={onchange}
          type="text"
          name={name}
          placeholder={placeholder}
          className={`
          h-10 w-full rounded-[5px] border ${errBorder}
          bg-white px-3 text-[14px] text-blackText font-inter font-medium
          outline-none placeholder:text-[#9ca3af]
          focus:border-[#c7cdd5]`}
        />
      </div>
    </>
  );
};

export default FormInput;
