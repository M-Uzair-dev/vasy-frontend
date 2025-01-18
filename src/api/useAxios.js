import axios from "axios";
const useAxios = () => {
  const token = localStorage.getItem("token");

  const api = axios.create({
    // baseURL: "http://localhost:8080",
    baseURL: "https://vasy-y.vercel.app",
  });
  // Automatically Set Token into Header.
  if (token) {
    // Add Your Headers Here
    api.defaults.headers.common["authorization"] = `${token}`;
  }
  // You can use api for calls without useApi
  return api;
};

export default useAxios;
