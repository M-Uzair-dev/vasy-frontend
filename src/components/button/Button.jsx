import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
function Button({
  title = "Button",
  onclick,
  loading,
  outline,
  className = "",
  type = "button",
}) {
  return (
    <button
      onClick={onclick}
      type={type}
      className={`hover:scale-x-105 duration-200 hover:shadow-main flex items-center gap-5 border-2 rounded-lg px-14 py-2  text-lg font-medium ${
        outline ? "text-main border-main " : "bg-main text-white"
      } ${className}`}
    >
      {title}
      {loading && (
        <AiOutlineLoading3Quarters
          color={outline ? "#0a72ea" : "#ffffff"}
          className="w-4 h-4 animate-spin"
        />
      )}
    </button>
  );
}

export default Button;
