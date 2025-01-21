import axios from "axios";


const useAxios = () => {
  const token = localStorage.getItem("token");
  let url = import.meta.env.MODE == "development" ? "http://localhost:8080" : "https://backend-vasy.vercel.app/"

  const api = axios.create({
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

let url =  import.meta.env.MODE == "development" ? "http://localhost:8080" : "https://backend-vasy.vercel.app/"
const api = axios.create({
  baseURL: url,
});

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["authorization"] = `${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export { api, setAuthToken };
