import httpClient from "src/api/httpClient";
import { API_CREATEFANPAGE } from "src/config/apis";

export const fanpageService = {
  createFanpage(data) {
    return httpClient.post(API_CREATEFANPAGE, data);
  },
  getAllFanpage() {
    return httpClient.get(API_CREATEFANPAGE);
  },
};
