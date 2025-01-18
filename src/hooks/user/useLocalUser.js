import React from "react";

const useLocalUser = () => {
  const user = localStorage.getItem("user");
  return user;
};

export default useLocalUser;
