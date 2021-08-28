<template>
  <el-aside class="menus" :width="collapse ? 'auto' : '249px'">
    <el-scrollbar wrap-class="scroll-view">
      <div class="logo" v-if="!collapse">
        <el-image
          :src="logoUrl"
          style="width: 40px; height: 40px; border-radius: 10px"
          border-radius="5px"
        ></el-image>
        <span class="name">后台管理系统</span>
      </div>

      <div class="logo-min" v-else>
        <el-image
          :src="logoUrl"
          style="width: 40px; height: 40px; border-radius: 10px"
        ></el-image>
      </div>

      <el-menu
        class="el-menu-vertical-demo"
        :collapse="collapse"
        :unique-opened="true"
        text-color="#fff"
        active-text-color="red"
        background-color="#22442de3"
        :router="true"
        :collapse-transition="false"
        :default-active="activeRouter"
      >
        <slot></slot>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { onMounted, provide, ref } from "vue";
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const logoUrl = ref(
      "https://static001.infoq.cn/resource/image/7e/59/7ea41e1bb9338b87368c6f61c7d9f059.jpg"
    );

    const activeRouter = ref("");
    onMounted(() => {
      activeRouter.value = window.location.hash.slice(1);
    });

    return {
      logoUrl,
      activeRouter,
    };
  },
};
</script>

<style lang="scss" scoped>
.menus {
  height: 100%;
  border-right: none;
  background-color: #22442de3;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 249px;
  min-height: 400px;
}

.el-menu {
  border-right: 1px solid #22442de3;
}

.scroll-view {
  overflow-x: hidden;
}

.logo {
  display: flex;
  justify-content: flex-start;
  padding-left: 25px;
  flex-wrap: wrap;
  overflow: hidden;
  align-items: center;
  height: 50px;
  color: #fff;
  font-weight: bolder;
  position: relative;
  .name {
    margin-left: 10px;
  }
}

.logo-min {
  display: flex;
  justify-content: center;
  height: 50px;
}
</style>
