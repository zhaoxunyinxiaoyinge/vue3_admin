/*
 * @Author: your name
 * @Date: 2021-08-15 00:09:58
 * @LastEditTime: 2021-08-19 00:42:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\utils\request.js
 */
import axios from "axios";
import store from "store"

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {
    Message
} from "element-plus"


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
}

const handleResponse = (res) => {
    if (res.code === 401) {
        Message.error("当前用户没有权限");
        return
    }

    if (res.code !== 200) {
        //指定不同地转态码之后，执行弹框提示
        Message({
            message: res.message || res.msg || "Error",
            type: "error",
            duration: 5 * 1000
        });

        if (res.code == 50001) {
            MessageBox.confirm(
                "您已经退出, 可以继续停留在本页面, 也可以重新登录",
                "确定退出", {
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning"
                }

            ).then(res => {
                // 这里是用户当前的登录已经过期，需要重新登录
                store.dispatch("login/resetToken");
                location.reload();
            })

        }

        return Promise.reject(new Error(res.message));
    } else {
        return res.data;
    }
}


const server = axios.create({
    baseURL: "",
    withCredentials: true,
    timeout: 3000
});

server.interceptors.request.use((config) => {
    NProgress.start();
    let token = getToken();
    config.headers["Authorization"] = "Bearer " + token;

    return config
}, err => {
    return Promise.reject(err);
})

server.interceptors.response.use(config => {
    NProgress.done();
    return config
}, err => {
    return Promise.reject(err)
})

export {
    server
};