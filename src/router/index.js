import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Login from "./../login/index";
import NotFound from "./../notFound/index.vue";
import Dashboard from "./../views/dashboard";

import Layout from "./../layout";

let module = require.context("./../views", true, /router.js/);
let asyncRoute = [];

//暂时这样处理
module.keys().forEach((item) => {
  asyncRoute.push(...module(item).default);
});

let containRoute = [
  {
    path: "/",
    meta: {
      title: "控制面板",
    },
    component: Layout,
    name: "welcome",
    redirect: "/dashboard",
    children: [
      {
        name: "dashboard",
        path: "/dashboard",
        meta: {
          title: "控制面板",
          hidden: false,
          icon: "el-icon-s-platform",
        },

        component: Dashboard,
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    meta: {
      hidden: true,
      title: "用户登录",
    },
    component: Login,
  },

  {
    path: "/404",
    name: "notFound",
    meta: {
      hidden: true,
      title: "notFound",
    },
    component: NotFound,
  },
];

// BUG
const router = createRouter({
  history: createWebHashHistory(),
  routes: containRoute,
});
window.router = router;

export { router, asyncRoute, containRoute };
