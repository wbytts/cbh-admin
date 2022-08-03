import axios from "axios";

const service = axios.create({
  baseURL: "/api/v1",
  timeout: 6000, // 六秒不返回结果，报错（也可以重试）
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
