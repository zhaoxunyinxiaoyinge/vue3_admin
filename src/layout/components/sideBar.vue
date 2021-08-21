<template>
  <div class="sidebar">
    <el-submenu
      :index="path ? path + '/' + list.path : list.path"
      v-if="list.children && list.children.length > 0"
    >
      <template #title>
        <i :class="list.icon" class="icon-style"></i>
        <span class="txt">{{ list.title }}</span>
      </template>

      <sideBar
        :path="list.path"
        :key="index"
        :list="item"
        v-for="(item, index) in list.children"
      ></sideBar>
    </el-submenu>

    <el-menu-item :index="path ? path + list.path : list.path" v-else>
      <i :class="list.icon"></i>
      <template #title>
        <span class="txt">{{ list.title }}</span>
      </template>
    </el-menu-item>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "sideBar",
  props: {
    list: {
      type: Object,
      default() {
        return {};
      },
    },
    path: {
      type: String,
      default: "",
    },
  },
  setup(props, context) {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 100%;
}

.el-submenu {
  width: auto;
  text-align: left;
  i.icon {
    color: #fff;
  }

  .txt {
    flex: 1;
    margin-left: 20px;
    text-align: left;
  }

  .el-menu-item:hover {
    background: rgb(71, 12, 12) !important;
  }

  .el-menu-item {
    text-align: left;
  }
}
.el-menu-item {
  .txt {
    text-align: center;
    margin-left: 10px;
  }
}
</style>
