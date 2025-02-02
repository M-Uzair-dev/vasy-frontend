import axios from "axios";

const useAxios = () => {
  const token = localStorage.getItem("token");

  const api = axios.create({
    baseURL:
      import.meta.env.MODE == "development"
        ? "http://localhost:8080"
        : "https://vasy-y.vercel.app",
  });
  if (token) {
    api.defaults.headers.common["authorization"] = `${token}`;
  }
  return api;
};

export default useAxios;

let url =
  import.meta.env.MODE == "development"
    ? "http://localhost:8080"
    : "https://backend-vasy.vercel.app/";

const api = axios.create({
  baseURL: url,
});

console.log(import.meta.env.MODE, url);

const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["authorization"] = `${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export { api, setAuthToken };
