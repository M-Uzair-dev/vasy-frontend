import React, { useEffect, useState } from "react";
import Superadminlogo from "../assets/Superadminlogo.png";
import PassInput from "../components/UI/Inputs/PassInput";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "../components/UI/Toast/toastMessage";
import { api } from "../api/useAxios";

function SuperAdminlogin() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Vasy - Super Admin Login";

    return () => {
      document.title = "Vasy - Admin Dashboard";
    };
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      if (!data.email) {
        toastMessage("Email is required", "error");
        return;
      }
      if (!data.password) {
        toastMessage("Password is required", "error");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        toastMessage("Please enter a valid email !", "error");
        return;
      }
      setLoading(true);
      const res = await api.post("/auth/login", {
        email: data.email,
        password: data.password,
        role: "superadmin",
      });
      if (res.status == 200) {
        toastMessage("Welcome Super Admin !", "success");
        localStorage.setItem("user", "super-admin");
        localStorage.setItem("userId", res.data.user._id);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name || res.data.user.role);
        localStorage.setItem("email", res.data.user.email);
        setLoading(false);
        navigate("/dashboard");
      } else {
        toastMessage(res.message || "Invalid Credentials !", "error");
        setLoading(false);
        return;
      }
    } catch (e) {
      toastMessage(e.response.data.message || "Invalid Credentials !", "error");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen gap-36">
      <div>
        <img src={Superadminlogo} alt="" />
      </div>
      <div className=" bg-[#EDF2F7] py-28 px-36   rounded-2xl">
        <div className="flex flex-col  ">
          <h1 className="text-[#000000] text-[40px] font-medium">Sign In </h1>
          <form
            onSubmit={handleSubmit}
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
              />
            </div>
            <PassInput name={"password"} />
            <div className="flex justify-end items-center mt-6">
              <button
                type="submit"
                className="bg-[#0A72EA] px-16 py-4 rounded-lg text-[#EDF2F7] text-sm font-medium "
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SuperAdminlogin;
