import React from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

function LoginPasswordSuccess() {
  const nav = useNavigate();
  return (
    <div className="flex  items-center justify-center h-screen gap-36">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <div className="flex justify-center">
            <IoIosCheckmarkCircle color="#0A72EA" className="h-32 w-32 	" />
          </div>
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-[30px] font-bold">
              Password Reset Successfully
            </h1>
            <p className="text-[15px] font-medium">
              Your password has been updated successfully, Now you can Sign In
              <br /> with the new password.
            </p>
          </div>
          <div className="flex justify-center gap-24 items-center mt-6">
            <button
              onClick={() => nav("/admin-login")}
              className="bg-[#0A72EA] px-32 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPasswordSuccess;
