import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Send Your Message.."
        className="rounded-full border-none py-4 w-full pl-5 pr-10 outline-none bg-white"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-[#87BC47] hover:scale-110 duration-200 cursor-pointer">
        <RiSendPlane2Fill color="white" className="w-4 h-4" />
      </div>
    </div>
  );
}
