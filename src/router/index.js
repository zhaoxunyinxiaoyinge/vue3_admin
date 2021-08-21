import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from "vue-router";
import Login from "./../login/index";
import NotFound from "./../notFound/index.vue";
import Dashboard from "./../views/dashboard"

let module = require.context("./../views", true, /\.js$/);
let route = [];

//暂时这样处理
module.keys().forEach((item) => {
  route.push(...module(item).default);
});

const routes = [{
    path: "/",
    meta: {
      title: "用户主页",
    },
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    meta: {
      title: "控制面板"
    },
    hidden: true,
    component: Dashboard
  },

  {
    path: "/login",
    meta: {
      hidden: true,
      title: "用户登录",
    },
    component: Login,
  },
  ...route,
  {
    path: "/:pathMatch(.*)*",
    meta: {
      title: "notFound",
    },
    component: NotFound,
  },
];

// BUG
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});


export {
  router
};