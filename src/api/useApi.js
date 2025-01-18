import React, { useState } from "react";
import useAxios from "./useAxios";
const useApi = (method) => {
  const api = useAxios();

  //   States
  const [response, setresponse] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);
  //   Axios Api Call Configuration
  const options = {
    method,
  };

  //   Api Call Function
  const apiCall = async (url, data) => {
    setloading(true);
    try {
      const res = await api.request({ ...options, url, data });
      setresponse(res);
      setloading(false);
      return res;
    } catch (e) {
      console.log(e);
      seterror(e);
      setloading(false);
    }
  };

  return { apiCall, loading, response, error };
};

export default useApi;
