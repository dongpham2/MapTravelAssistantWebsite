import httpClient from "src/api/httpClient";
import { API_POSTARTICLE } from "src/config/apis";

export const postService = {
  createPost(data) {
    return httpClient.post(API_POSTARTICLE, data);
  },
};
