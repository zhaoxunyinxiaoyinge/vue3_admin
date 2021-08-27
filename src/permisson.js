import store from "./store";
import {
    router
} from "./router";
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
            let roles = store.getters["user/getRoles"];
            if (roles.length > 0) {
                next();
                NProgress.done();
            } else {
                // 获取角色权限
                // note roles is Array and is not Object,like ["admin"]
                // 使用roles权限对所有的路由进行过域
                try {
                    roles = await store.dispatch("user/getRoles");
                    let realRoute = await store.dispatch("perssion/getFilterRoutes", roles);

                    realRoute.forEach((item) => {
                        router.addRoute(item);
                    });

                    next({
                        ...to,
                        replace: true
                    })

                    NProgress.done();

                } catch (err) {

                }

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
            next()
        }
        NProgress.done();
    }
});