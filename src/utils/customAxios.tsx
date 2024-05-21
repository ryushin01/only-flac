import axios from "axios";

// const BASE_URL = "/only-flac/data";
const BASE_URL = "/data";

export const customAxios = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    Authorization: localStorage.getItem("accessToken"),
  },
});
