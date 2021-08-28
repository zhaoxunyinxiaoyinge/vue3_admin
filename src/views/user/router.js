import Layout from "./../../layout";
export default [
  {
    name: "user",
    path: "/user",
    component: Layout,
    meta: {
      title: "tabel组件管理",
    },
    redirect: "/user/info",

    children: [
      {
        name: "info",
        path: "info",
        component: () => import("./info.vue"),
        meta: {
          title: "tabel组件管理",
          icon: "el-icon-s-order",
        },
      },
    ],
  },
];
