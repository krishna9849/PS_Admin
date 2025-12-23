import axios from "axios";

// const baseURL = process.env.NEXT_PUBLIC_API_URL;
// console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
// if (!baseURL) {
//   console.warn("NEXT_PUBLIC_API_URL is not defined");
// }
// export const api = axios.create({
//   baseURL,
//   withCredentials: true,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error("Unauthorized request");
    }
    return Promise.reject(error);
  }
);
