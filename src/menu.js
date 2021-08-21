/*
 * @Author: your name
 * @Date: 2021-06-10 22:36:09
 * @LastEditTime: 2021-08-08 19:38:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\menu.js
 */
export default [
  {
    path: "/user",
    title: "表格组件使用",
    icon: "el-icon-user icon",
    name: "user",
    children: [
      {
        path: "/info",
        title: "常用表格",
        name: "info",
      },
    ],
  },

  {
    path: "/subject",
    title: "学科",
    name: "subject",
    icon: "el-icon-alarm-clock icon",
    children: [
      {
        path: "/js",
        title: "js学习",
        name: "js",
      },
      {
        path: "/ts",
        title: "ts学习",
        name: "ts",
      },
    ],
  },

  {
    path: "/home",
    title: "个人主页",
    name: "home",
    icon: "el-icon-user icon",
    children: [
      {
        path: "/user",
        title: "用户信息",
        name: "user",
      },
    ],
  },
];
