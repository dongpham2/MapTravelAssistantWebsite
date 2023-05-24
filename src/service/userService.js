import httpClient from "src/api/httpClient";
import { API_GETALLUSER } from "src/config/apis";

export const getUserDetail = {
  getDetailUser(id) {
    return httpClient.get(`${API_GETALLUSER}/${id}`);
  },
};

export const updateUser = {
  updateUser(id, data) {
    return httpClient.patch(`${API_GETALLUSER}/${id}`, data);
  },
};
