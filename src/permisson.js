/*
 * @Author: your name
 * @Date: 2021-08-17 01:12:12
 * @LastEditTime: 2021-08-21 11:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit;
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\permisson.js
 */
import store from "./store";
import {
    router
} from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 白名单
const whiteList = ["/login", "/auth-redirect"];

router.beforeEach((to, from, next) => {
    NProgress.start();
    // 默认从当前页面下的本地缓层中获取token;
    let token = "";
    token = window.localStorage.getItem("token");
    if (token) {
        token = store.getters['login/getToken'];
    }

    if (token) {
        if (to.path === "/login") {
            next({
                path: "/",
            });
            NProgress.done();
        } else {
            const roles = store.getters['user/getRoles'];
            if (roles.length > 0) {
                next();
            } else {
                // 获取角色权限
                // const {
                //     roles
                // } = await store.dispatch('user/getInfo');
                next()
                NProgress.done();
            }
        }

    } else {
        let isWhilte = whiteList.includes(to.path);
        if (isWhilte) {
            next();
        } else {
            console.log(to.path, "to path")
            next({
                path: "/login",
                query: "redirect=" + to.path,
            });
        }
        NProgress.done();
    }
});