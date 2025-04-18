import React from "react";

const CustomInput = ({
  name,
  value,
  setvalue,
  onChange,
  label,
  type = "text",
  placeholder = "Enter Value Here",
  error,
  id,
}) => {
  return (
    <div className="w-full">
      <div>
        <label
          htmlFor={name}
          className="block mb-2 font-medium text-[#737373] text-xs"
        >
          {label}
        </label>
        <input
          type={type}
          // type=""
          id={name}
          value={value}
          onChange={onChange}
          className=" border border-[#EDF2F7] text-lightGray font-medium outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
          placeholder={placeholder}
        />
      </div>
      {error && <div className="text-red-700 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default CustomInput;
