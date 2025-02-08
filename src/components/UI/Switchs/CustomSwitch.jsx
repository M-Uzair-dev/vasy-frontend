import { ToggleSwitch } from "flowbite-react";
import React, { useState } from "react";

const CustomSwitch = ({ isChecked = true, onChange = () => {}, id = "" }) => {
  const [checked, setchecked] = useState(isChecked);
  // return <ToggleSwitch checked={checked} onChange={setchecked} />;
  return (
    <label className="inline-flex items-center me-5 cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        checked={checked}
        onChange={(e) => {
          setchecked(!checked);
          onChange(e.target.checked, id);
        }}
      />
      <div className="relative w-5 h-3 bg-gray-200 rounded-full peer  peer-focus:ring-4 peer-focus:ring-green-100 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-2 after:w-2 after:transition-all  peer-checked:bg-green-400"></div>
    </label>
  );
};

export default CustomSwitch;
