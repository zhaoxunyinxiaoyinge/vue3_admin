import Layout from "./../../layout";
export default [
  {
    name: "InputMode",
    path: "/input",
    component: Layout,
    meta: {
      title: "v-model组件地使用",
      role: ["admin"],
      icon: "el-icon-s-custom",
    },
    redirect: "/input/index",
    children: [
      {
        name: "inputModeIndex",
        path: "index",
        component: () => import("./index.vue"),
        meta: {
          title: "组件中使用Mode",
          role: ["admin"],
          icon: "el-icon-s-operation",
        },
        isShowTips:true
      },
    ],
  },
];