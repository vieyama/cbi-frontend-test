import axios from "axios";
import { BASE_URL } from "constants/globalVariable";
import Cookies from "js-cookie";

const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

customAxios.interceptors.request.use((config) => {
  const cookie = Cookies.get("auth");
  const authCookie = cookie && JSON.parse(cookie);

  config.headers = {
    Authorization: `Bearer ${authCookie?.token}`,
  };
  return config;
});

export default customAxios;
