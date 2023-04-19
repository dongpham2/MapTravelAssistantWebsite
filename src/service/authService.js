import httpClient from "src/api/httpClient";
import { API_LOGIN, API_SIGNUP } from "src/config/apis";

export const AuthService = {
  login(user) {
    return httpClient.post(API_LOGIN, user);
  },
  signup(user) {
    return httpClient.post(API_SIGNUP, user);
  },
};
