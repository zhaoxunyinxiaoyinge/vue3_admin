/*
 * @Author: your name
 * @Date: 2021-06-10 00:08:57
 * @LastEditTime: 2021-08-08 16:16:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\views\user\router.js
 */
import Layout from "./../../layout";
import Info from "./info.vue";
export default [
  {
    path: "/user",
    component: Layout,
    meta: {
      title: "用户信息",
    },
    redirect: "/user/info",
    children: [
      {
        path: "info",
        component: () => import("./info.vue"),
        meta: {
          title: "用户详情",
        },
      },
    ],
  },
];
