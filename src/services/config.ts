import { API_URL } from "@/constants/app.const";
import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "sonner";

const axiosInterceptors = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken") || ""}`,
  },
});

export const setAuthTokenOnAxiosInterceptors = (authToken: string) => {
  axiosInterceptors.defaults.headers["Authorization"] = `Bearer ${authToken}`;
  axiosInterceptors.defaults.headers["Content-Type"] = `application/json`;
};

axiosInterceptors.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return {
      ...response,
      data: data?.data || data,
    };
  },
  (error: AxiosError) => {
    const { response } = error;
    const data: any = response?.data;
    const message = data?.error || data?.message || error.message;
    toast.error(message);
    return Promise.reject({
      ...error,
      message,
    });
  }
);

export default axiosInterceptors;
