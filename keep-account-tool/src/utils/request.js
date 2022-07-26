import axios from 'axios';

axios.defaults.responseType = 'json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});


// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error)
  },
);


// 响应拦截器
service.interceptors.response.use(
  response => {
    let {data} = response;
    return data;
  },
  error => {
    return Promise.reject(error)
  }
);


export default service;


