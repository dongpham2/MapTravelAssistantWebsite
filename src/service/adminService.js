import httpClient from "src/api/httpClient";
import { API_GETALLUSER } from "src/config/apis";

export const adminService = {
  // getAllUsers(users) {
  //   return httpClient.get(API_GETALLUSER);
  // },
  getAllUsers() {
    return httpClient.get(API_GETALLUSER);
  },
  deleteUsers(id) {
    return httpClient.delete(`${API_GETALLUSER}/${id}`);
  },
};
