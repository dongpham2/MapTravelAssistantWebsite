import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";

export const fanpageService = {
  createFanpage(data) {
    return httpClient.post(API_CREATEFANPAGE, data);
  },
  getAllFanpage() {
    return httpClient.get(API_CREATEFANPAGE);
  },
  getDetailFanpage(id) {
    return httpClient.get(`${API_CREATEFANPAGE}/${id}`);
  },
  editFanpage(id, data) {
    return httpClient.patch(`${API_CREATEFANPAGE}/${id}`, data);
  },
  deleteFanpage(id, data) {
    return httpClient.post(`${API_CREATEFANPAGE}/delete/${id}`, data);
  },
};
