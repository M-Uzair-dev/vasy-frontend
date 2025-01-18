import React from "react";

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between cursor-pointer border border-[#EDF2F7] text-lightGray font-medium outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden" //
      />
      <span>{label}</span>
      <div
        className={`mr-3 h-4 w-4 rounded-full border ${
          checked ? "bg-blue-500 border-blue-500" : "border-lightGray"
        } flex items-center justify-center`}
      >
        {checked && <div className="h-2 w-2 bg-white rounded-full"></div>}
      </div>
    </label>
  );
};

export default RadioButton;
