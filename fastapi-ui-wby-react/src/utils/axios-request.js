/**
 * @Description:
 * @FilePath: /fastapi-ui-wby-react/src/utils/axios-request.js
 * @**************************************************
 * @Author: BingYi
 * @Date: 2022-07-27 10:00:02
 * @LastEditors: BingYi
 * @LastEditTime: 2022-07-27 11:08:45
 * @motto: good good study 📚, day day up ✔️.
 */
import axios from 'axios';

// #################################默认请求实例#################################

const service = axios.create({
  baseURL: '/api/v1',
  timeout: 6000, // 六秒不返回结果，报错（也可以重试）
  headers: {
    // 默认请求格式 application/json
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    // 如果有token，将其附加到请求头上
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
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
    // 401表示无效凭证或者凭证过期，此时应该移除token令牌
    if (error.response.status === 401) {
      localStorage.removeItem('token');
    }
    return Promise.reject(error);
  }
);

export default service;

// #################################封装请求方法#################################

export function doPost(url, params) {
  return service.post(url, params);
}

export function doGet(url, params) {
  return service.get(url, { params });
}

export function doPut(url, params) {
  return service.put(url, params);
}

export function doDelete(url, params) {
  return service.delete(url, { params });
}
