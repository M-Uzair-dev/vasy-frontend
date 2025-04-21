import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useApi from "./api/useApi";

const UpdateValues = () => {
  const userId = localStorage.getItem("userId");
  const { apiCall: user, loading } = useApi("GET", (data) => {
    localStorage.setItem(
      "name",
      data.fullName ||
        data.name ||
        data.firstName + data.lastName ||
        "undefined"
    );
    localStorage.setItem("email", data.email || "undefined");
  });
  useEffect(() => {
    user(`/auth/user-details`);
  }, []);
  return <Outlet />;
};

export default UpdateValues;
