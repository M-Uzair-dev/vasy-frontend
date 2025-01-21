import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/SideBar/Sidebar";
import NavBar from "../components/NavBar/NavBar";
import useLocalUser from "../hooks/user/useLocalUser";
import { setAuthToken } from "../api/useAxios";
const RootLayout = () => {
  const user = useLocalUser();
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  useEffect(() => {
    
    if (user === "agent") {
      document.title = "Vasy - Agent Dashboard";
    }
    if (user === "admin") {
      document.title = "Vasy - Admin Dashboard";
    }
    if (user === "resturant") {
      document.title = "Vasy - Resturant Dashboard";
    }
    if (user === "super-admin") {
      document.title = "Vasy - Super Admin Dashboard";
    }

    // Optionally, clean up by resetting the title when the component unmounts
    return () => {
      document.title = "Vasy - Admin Dashboard";
    };
  }, []);

  return (
    <div>
      <Sidebar />
      <div className="ml-72">
        <NavBar />
      </div>
      <div className="ml-72 overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
