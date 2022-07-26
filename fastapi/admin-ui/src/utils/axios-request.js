/**
 * @Description:
 * @FilePath: /admin-ui/src/utils/axios-request.js
 * @**************************************************
 * @Author: BingYi
 * @Date: 2022-07-18 03:05:09
 * @LastEditors: BingYi
 * @LastEditTime: 2022-07-20 15:19:27
 * @good good study 📚, day day up ✔️.
 */
import axios from 'axios';

const service = axios.create({
  baseURL: '',
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
