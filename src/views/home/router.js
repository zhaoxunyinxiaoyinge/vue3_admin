import Layout from "./../../layout";
import Home from "./index.vue";
export default [
  {
    path: "/home",
    component: Layout,
    meta: {
      title: "用户主页",
    },
    redirect: "/home/user",
    children: [
      {
        path: "user",
        component: Home,
        meta: {
          title: "个人信息",
        },
      },
    ],
  },
];
