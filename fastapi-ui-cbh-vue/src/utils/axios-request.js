/*
 * @Description:
 * @FilePath: \cbh-admin-vue\src\utils\axios-request.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-14 22:58:22
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-24 16:18:40
 * good good study 📚, day day up ✔️.
 */
import axios from "axios";

const service = axios.create({
  // baseURL: "http://39.96.162.54:8888/api/v1",
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
    // console.log(response);
    return response.data;
  },
  (error) => {
    // console.log(error);
    if (error.response.status === 401) {
      localStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);

export function doPost(url, params) {
  return service.post(url, params);
}

export function doGet(url, params) {
  return service.get(url, { params });
}

export default service;
