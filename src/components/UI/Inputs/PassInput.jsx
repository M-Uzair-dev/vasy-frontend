import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const PassInput = ({ name, error, onChange, value }) => {
  const [showPass, setshowPass] = useState(false);

  return (
    <div className=" border-b-2 gap-16 flex items-center justify-between">
      <input
        type={showPass ? "text" : "password"}
        className="border-none focus:outline-none bg-transparent focus:ring-0  "
        placeholder="Password"
        error={error}
        onChange={onChange}
        value={value}
        name={name}
      />

      {!showPass && (
        <IoEye
          onClick={() => setshowPass((p) => !p)}
          color="#878C91"
          className="h-7 w-6 cursor-pointer"
        />
      )}
      {showPass && (
        <IoEyeOff
          onClick={() => setshowPass((p) => !p)}
          color="#878C91"
          className="h-7 w-6 cursor-pointer"
        />
      )}
    </div>
  );
};

export default PassInput;
