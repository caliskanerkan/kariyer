import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_LOCAL_SERVER
});
axiosInstance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
export default axiosInstance;
