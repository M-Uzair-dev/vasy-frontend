import React, { useEffect, useState } from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PassInput from "../components/UI/Inputs/PassInput";
import { toastMessage } from "../components/UI/Toast/toastMessage";

function Restaurantlogin() {
  const nav = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("user", "resturant");
    toastMessage("Welcome Resturant Admin!");
    nav("/");
  };
  useEffect(() => {
    document.title = "Vasy - Resturant Login";

    return () => {
      document.title = "Vasy - Admin Dashboard";
    };
  }, []);
  return (
    <div className="flex  items-center justify-center h-screen gap-36">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <h1 className="text-[#000000] text-[40px] font-medium">Sign In </h1>
          <form
            action="#"
            className="flex flex-col border-none bg-transparent pt-16 pb-4 gap-4 "
          >
            <div className=" border-b-2 border-black pr-36 ">
              <label htmlFor="" className="text-[#878C91] text-xs font-normal">
                Email address
              </label>
              <br />
              <input
                type="text"
                className="border-none focus:outline-none bg-transparent focus:ring-0 "
                placeholder="Enter Email Address"
                // value={"eureka22@email.com"}
              />
            </div>
            <PassInput />
          </form>
          <div className="flex justify-between gap-24 items-center mt-6">
            <button
              className="text-[#47464A] text-sm font-normal border-b-2 border-[#47464A] cursor-pointer"
              onClick={() => nav("/forgot-password")}
            >
              Forget Password?
            </button>
            <button
              onClick={handleLogin}
              className="bg-[#0A72EA] px-16 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Restaurantlogin;
