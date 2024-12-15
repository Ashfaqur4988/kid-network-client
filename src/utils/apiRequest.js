import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://kid-network-server.onrender.com/api",
  withCredentials: true,
});
