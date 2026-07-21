import axios from "axios";

const localhost = "http://localhost:3000/api";
const production = import.meta.env.VITE_API_URL;
const baseURL = process.env.NODE_ENV === "production" ? production : localhost;

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default api;