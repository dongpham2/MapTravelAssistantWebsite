import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://map-travel-assistant-website-dev.onrender.com",
  // baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});
const data = JSON.parse(localStorage.getItem("persist:root"));
const userData = JSON.parse(data.auth);
if (data && userData.token) {
  httpClient.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer " + userData.user.token;
    return config;
  });
}
export default httpClient;

// import axios from "axios";

// const httpClient = axios.create({
//   baseURL: "https://map-travel-assistant-website-dev.onrender.com",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });
// export default httpClient;
