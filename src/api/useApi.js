import axios from "axios";
import { useState } from "react";

const useAxios = () => {
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL:
      import.meta.env.MODE == "development"
        ? "http://localhost:8080"
        : "https://backend-vasy.vercel.app",
  });
  if (token) {
    api.defaults.headers.common["authorization"] = `${token}`;
  }
  return api;
};

const useApi = (method, callBack) => {
  const api = useAxios();
  const [response, setresponse] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  const options = {
    method,
  };

  const apiCall = async (url, data) => {
    setloading(true);
    try {
      const res = await api.request({ ...options, url, data });
      setresponse(res);
      setloading(false);
      if (callBack) callBack(res.data);
      return res;
    } catch (e) {
      seterror(e);
      setloading(false);
    }
  };

  return { apiCall, loading, response, error };
};

export default useApi;
