<template>
  <div id="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>
<script>
import zhCn from "element-plus/es/locale/lang/zh-cn";
export default {
  name: "App",
  created() {},
  data() {
    return {
      locale: zhCn,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: left;
  color: #ecf0f3;
}
</style>
