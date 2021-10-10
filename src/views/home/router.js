import Layout from "./../../layout";
export default [
  {
    name: "home",
    path: "/home",
    component: Layout,
    meta: {
      title: "用户主页",
    },
    redirect: "/home/user",
    children: [
      {
        name: "person",
        path: "user",
        component: () => import("./index.vue"),
        meta: {
          title: "用户中心",
          role: ["admin"],
          icon: "el-icon-s-custom",
        },
        isShowTips:true
      },
    ],
  },
];
