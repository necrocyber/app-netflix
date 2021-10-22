import Axios from "axios";

declare module "axios" {
  interface AxiosRequestConfig {
    handlerEnabled?: boolean;
    _retry?: boolean;
  }
}

const axiosInstance = Axios.create({
  baseURL: "http://localhost:3003/api",
  timeout: 15000,
});

axiosInstance.defaults.handlerEnabled = true;

export default axiosInstance;
