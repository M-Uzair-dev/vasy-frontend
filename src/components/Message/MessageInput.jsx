import React, { useState } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";

export default function MessageInput({ state, onChange, submit }) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Send Your Message.."
        className="rounded-full border-none py-4 w-full pl-5 pr-10 outline-none bg-white"
        onChange={onChange}
        value={state}
      />
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-main hover:scale-110 duration-200 cursor-pointer"
        onClick={submit}
      >
        <RiSendPlane2Fill color="white" className="w-4 h-4" />
      </div>
    </div>
  );
}
