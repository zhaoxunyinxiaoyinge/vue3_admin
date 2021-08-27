import {
  createApp
} from "vue";

import App from "./App.vue";

import {
  router
} from "./router/index";

import ElementPlus from "element-plus";

import "element-plus/lib/theme-chalk/index.css";

require('./permisson.js');

// import {
//   createI18n
// } from "vue-i18n";

import zhCn from 'element-plus/es/locale/lang/zh-cn';




// import "dayjs/locale/zh-cn";


import "./common/reset.css";

// import "element-plus/packages/theme-chalk/src/base.scss";
import Store from "./store/index.js";

Store.commit("lang/setLang", zhCn);

// const messages = {
//   [enLocale.name]: {
//     // el 这个属性很关键，一定要保证有这个属性，
//     el: enLocale.el,
//     // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
//     message: {
//       hello: "hello world",
//     },
//   },
//   [zhLocale.name]: {
//     el: zhLocale.el,
//     // 定义您自己的字典，但是请不要和 `el` 重复，这样会导致 ElementPlus 内部组件的翻译失效.
//     message: {
//       hello: "你好，世界",
//     },
//   },
//   testLocale: {
//     el: {},
//     // 没有定义 message 字段，会 fallback 回到 en 去, fallbackLocale 的定义在下方 👇
//   },
// };
// const i18n = createI18n({
//   locale: zhLocale.name,
//   fallbackLocale: enLocale.name,
//   messages,
// });

const app = createApp(App);
// 语言国际化
app.use(ElementPlus, {
  locale: zhCn
});

app.use(Store);

// app.use(i18n);

app.use(router).mount("#app");