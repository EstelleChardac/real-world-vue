import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/EstelleChardac/bogusdb",
  withCredentials: false,
  hearders: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

export default {
  getEvents() {
    return apiClient.get("/events");
  },
};
