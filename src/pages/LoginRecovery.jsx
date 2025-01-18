import React from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LoginRecovery() {
  const nav = useNavigate();
  return (
    <div className="flex  items-center justify-center h-screen gap-36">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <h1 className="text-[#000000] text-[40px] font-medium">
            Recover Password{" "}
          </h1>
          <form
            action="#"
            className="flex flex-col border-none bg-transparent pt-16 pb-4 gap-4 "
          >
            <div className=" border-b-2 gap-16 flex items-center justify-between">
              <input
                type="text"
                className="border-none focus:outline-none bg-transparent focus:ring-0  "
                placeholder="New-Password"
              />
              <IoEye color="#878C91" className="h-7 w-6" />
            </div>
            <div className=" border-b-2 gap-16 flex items-center justify-between">
              <input
                type="text"
                className="border-none focus:outline-none bg-transparent focus:ring-0  "
                placeholder=" Confirm-Password"
              />
              <IoEye color="#878C91" className="h-7 w-6" />
            </div>
          </form>
          <div className="flex justify-end gap-24 items-center mt-6">
            <button
              className="bg-[#0A72EA] px-16 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
              onClick={() => nav("/password-success")}
            >
              Recover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRecovery;
