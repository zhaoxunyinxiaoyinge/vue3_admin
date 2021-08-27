import Layout from "./../../layout";
import Ts from "./ts.vue";
import Js from "./js.vue";

export default [{
  path: "/subject",
  name: "subject",
  meta: {
    title: "脚本语言管理",
    hidden: false,
    icon: "el-icon-takeaway-box",
  },
  component: Layout,
  redirect: "/subject/ts",
  children: [{
      name: "ts",
      path: "ts",
      meta: {
        title: "ts开发",
        hidden: false,

      },
      component: Ts,
    },

    {
      path: "js",
      name: "js",
      meta: {
        title: "js开发",
        hidden: false
      },
      component: Js,
    },
  ],
}, ];