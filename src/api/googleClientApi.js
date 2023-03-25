import axios from "axios";

const HttpClient = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default HttpClient;
