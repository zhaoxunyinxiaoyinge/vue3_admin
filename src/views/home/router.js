import Layout from "./../../layout";
import Home from "./index.vue";
export default [{
  name: "home",
  path: "/home",
  component: Layout,
  meta: {
    title: "用户主页",

  },
  redirect: "/home/user",
  children: [{
    name: "person",
    path: "user",
    component: Home,
    meta: {
      title: "用户中心",
      role: ["admin"],
      icon: "el-icon-s-custom",
    },
  }, ],
}, ];