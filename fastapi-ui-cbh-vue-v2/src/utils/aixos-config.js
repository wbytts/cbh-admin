import axios from "axios";

const instance = axios.create({
  // 设置baseURL后，URL可以不用全写，写后部分即可
    baseURL: "/api/v1",
  //如果请求时间超过6000毫秒，则请求会被中断
    timeout: 6000,
  //自定义请求头，需要什么问后端
    headers: {
    "Content-Type": "application/json;charset=UTF-8",
    },
});
