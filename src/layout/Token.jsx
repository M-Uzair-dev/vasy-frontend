import React from "react";

import { setAuthToken } from "../api/useAxios";
import { Outlet } from "react-router-dom";

const Token = ({ children }) => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return <>{children}</>;
};

export default Token;
