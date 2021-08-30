import axios from "axios";
import store from "@/store";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { ElMessage } from "element-plus";

const getToken = () => {
  let token = window.localStorage.getItem("token");
  if (token) {
    return token;
  } else {
    let stateToken = store.state.login.token;
    if (stateToken) {
      window.localStorage.setItem("token", stateToken);
      return stateToken;
    } else {
      return "";
    }
  }
};

const handleResponse = (res) => {
  if (res.code === 401) {
    ElMessage.error("当前用户没有权限");
    return;
  }

  if (res.code !== 200) {
    //指定不同地转态码之后，执行弹框提示
    ElMessage({
      message: res.message || res.msg || "Error",
      type: "error",
      duration: 5 * 1000,
    });

    if (res.code == 50001) {
      MessageBox.confirm(
        "您已经退出, 可以继续停留在本页面, 也可以重新登录",
        "确定退出",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).then((res) => {
        // 这里是用户当前的登录已经过期，需要重新登录
        store.dispatch("login/resetToken");
        location.reload();
      });
    }

    return Promise.reject(new Error(res.message));
  } else {
    return res.data;
  }
};

const Server = axios.create({
  // mock api 地址
  baseURL: process.env.UE_APP_BASE_API,
  withCredentials: true,
  timeout: 3000,
});

Server.interceptors.request.use(
  (config) => {
    NProgress.start();
    let token = getToken();
    config.headers["Authorization"] = "Bearer " + token;

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Server.interceptors.response.use(
  (config) => {
    NProgress.done();
    return Promise.resolve(config.data);
  },
  (err) => {
    NProgress.done();
    return Promise.reject(err);
  }
);

export { Server };
