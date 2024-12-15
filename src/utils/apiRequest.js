import axios from "axios";

export const apiRequest = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080/api"
      : "https://kid-network-server.onrender.com/api",
  withCredentials: true,
});
