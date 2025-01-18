import React from "react";

const CustomSelect = ({
  label,
  options,
  placeholder = "Select a Value",
  selected,
  setselected,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-2 font-medium text-[#737373] text-xs">
          {label}
        </label>
      )}
      <select
        defaultValue={selected}
        onChange={(e) => setselected(e.target.value)}
        className="border border-[#EDF2F7] text-lightGray font-medium outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full "
      >
        <option value="">{placeholder}</option>
        {options?.map((option, index) => (
          <option key={index} value={option?.value}>
            {option?.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
