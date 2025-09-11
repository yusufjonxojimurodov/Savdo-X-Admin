import axios from "axios";
import router from "../../routers/router";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 20000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 500) {
      router.push("/500");
    }
    return Promise.reject(error);
  }
);

export const api = ({ url, open = false, ...props }) => {
  const token = localStorage.getItem("access_token");

  if (!open) {
    props.headers = {
      Authorization: `Bearer ${token}`,
      ...props.headers,
    };
  }

  return instance({
    url,
    ...props,
  });
};

export { instance as axiosInstance };

export default api;
