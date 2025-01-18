import React from "react";

export default function SingleMessage({ message, type }) {
  return (
    <div
      className={`flex ${type === "user" ? "justify-end" : "justify-start"} `}
    >
      <div
        className={`rounded-xl ${
          type === "user" ? "bg-main p-3 text-white" : "bg-[#E9E9E9] p-3"
        }`}
      >
        {message}
      </div>
    </div>
  );
}
