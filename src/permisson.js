/*
 * @Author: your name
 * @Date: 2021-09-16 22:51:51
 * @LastEditTime: 2021-12-12 21:48:12
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-管理系统\video_admin\src\permisson.js
 */
import store from "./store";
import { router } from "./router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 白名单
const whiteList = ["/login", "/auth-redirect"];

router.beforeEach(async (to, from, next) => {
  NProgress.start();

  // 本地不存在，那么我从全局转态里面获取
  let token = store.getters["login/getToken"];

  if (!token) {
    token = window.localStorage.getItem("token");
    if (token) {
      // 调用方法本地，token,获取用户信息，菜单。
      store.dispatch("login/checkToken", token);
    }
  }

  if (token) {
    if (to.path === "/login") {
      next({
        path: "/dashboard",
      });
      NProgress.done();
    } else {
      let route = store.state.perssion.addRoute;
      if (route.length > 0) {
        next();
        NProgress.done();
      } else {
        try {
          let roles = await store.dispatch("user/getRoles");
          let realRoute = await store.dispatch(
            "perssion/getFilterRoutes",
            roles
          );

          realRoute.forEach((item) => {
            router.addRoute(item);
          });

          console.log(router.getRoutes());
          next({
            path: to.path,
          });
          NProgress.done();
        } catch (err) {}
      }
    }
  } else {
    let isWhilte = whiteList.includes(to.path);
    if (isWhilte) {
      next();
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.path,
        },
      });
      next();
    }
    NProgress.done();
  }
});
