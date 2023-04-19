import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://map-travel-assistant-website-dev.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export default httpClient;
