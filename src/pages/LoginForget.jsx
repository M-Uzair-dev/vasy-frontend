import React from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import { IoEye } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function LoginForget() {
  const nav = useNavigate();
  return (
    <div className="flex  items-center justify-center h-screen  gap-36  ">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <h1 className="text-[#202020] text-[40px] font-medium">
            Forget Password ?
          </h1>
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
                value={"eureka22@email.com"}
              />
            </div>
          </form>
          <div className="flex justify-end items-center mt-6 gap-8">
            <h1 className="text-[#47464A] font-normal">
              {" "}
              We will send you the recovery <br />
              link{" "}
            </h1>
            <button
              className="bg-[#0A72EA] px-16 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
              onClick={() => nav("/password-recover")}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForget;
