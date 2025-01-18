import React, { useEffect } from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import { IoEye } from "react-icons/io5";
import PassInput from "../components/UI/Inputs/PassInput";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { useFormik } from "formik";
import * as Yup from "yup";
import useApi from "../api/useApi";

function SuperAdminlogin() {
  const { apiCall } = useApi("POST");
  const { apiCall: getUser } = useApi("GET");
  const nav = useNavigate();
  // const handleLogin = () => {
  //   localStorage.setItem("user", "super-admin");
  //   toastMessage("Welcome Super Admin!");
  //   nav("/");
  // };
  const validation = useFormik({
    validateOnChange: false,
    initialValues: {
      email: "super-admin@vasy.com",
      password: "adminadmin",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Please Enter Your Email"),
      password: Yup.string()
        .min(8, "Password must be atleast of 8 characters!")
        .required("Please Enter Your Password"),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await apiCall("/auth/login", {
          ...values,
          role: "superadmin",
        });
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", "super-admin");
        toastMessage("Welcome Super Admin!");
        nav("/");
      } catch (e) {
        console.log(e);
      }
    },
  });
  useEffect(() => {
    document.title = "Vasy - Super Admin Login";

    return () => {
      document.title = "Vasy - Admin Dashboard";
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen gap-36">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <h1 className="text-[#000000] text-[40px] font-medium">Sign In </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
            className="flex flex-col border-none bg-transparent pt-16 pb-4 gap-4 "
          >
            <div className=" border-b-2 border-black pr-36 ">
              <label htmlFor="" className="text-[#878C91] text-xs font-normal">
                Email address
              </label>
              <br />
              <input
                placeholder="Email Address"
                type="text"
                className="border-none focus:outline-none bg-transparent focus:ring-0 "
                name={"email"}
                onChange={validation.handleChange}
                value={validation.values.email || ""}
              />
              {validation.errors.email && (
                <div className="text-red-600 text-sm">
                  {validation.errors.email}
                </div>
              )}
            </div>
            <PassInput
              name={"password"}
              error={validation.errors.password}
              onChange={validation.handleChange}
              value={validation.values.password || ""}
            />
            <div className="flex justify-end items-center mt-6">
              <button
                type="submit"
                className="bg-[#0A72EA] px-16 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminlogin;
