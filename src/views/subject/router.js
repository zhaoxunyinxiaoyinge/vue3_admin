import Layout from "./../../layout";
import Ts from "./ts.vue";
import Js from "./js.vue";

export default [
  {
    path: "/subject",
    meta: {
      title: "学科管理",
    },
    component: Layout,
    redirect: "/subject/ts",

    children: [
      {
        path: "ts",
        meta: {
          title: "ts开发",
        },
        component: Ts,
      },
      {
        path: "js",
        meta: {
          title: "js开发",
        },
        component: Js,
      },
    ],
  },
];
