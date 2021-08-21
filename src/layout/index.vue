<template>
  <div class="container">
    <Main class="menus" :collapse="isCollapse">
      <sideBar
        :path="''"
        :key="index"
        :list="item"
        v-for="(item, index) in data"
      ></sideBar>
    </Main>

    <div class="content">
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#ffff"
        text-color="#000"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>

      <el-header class="header">
        <div class="collapse" @click="triggerCollapse">
          <span>|||</span>
        </div>

        <div class="title">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item
              v-for="item in getBreadcrumb()"
              :to="item"
              :key="item.path"
              >{{ item.meta.title }}</el-breadcrumb-item
            >
          </el-breadcrumb>
        </div>

        <div class="more">
          <el-link class="link" type="primary" :underline="true"
            >查看当前项目文档</el-link
          >

          <el-radio-group v-model="lange" :border="true">
            <el-radio-button label="zh">中文</el-radio-button>
            <el-radio-button label="en">英文</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 用户头像和昵称 -->
        <Avatar />

        <el-dropdown split-button type="primary">
          个人中心
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>姓名:赵训银</el-dropdown-item>
              <el-dropdown-item>工号:97007164</el-dropdown-item>
              <el-dropdown-item>消息通知</el-dropdown-item>
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <TagRouter />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, defineComponent } from "vue";

import { mapState, mapActions, mapGetters, mapMutations } from "vuex";

import TagRouter from "./components/tag_router.vue";

import Avatar from "./components/avatar";

import Main from "./components/main.vue";
import menus from "./../menu";
import sideBar from "./components/sideBar.vue";

export default {
  created() {
    this.getCurrentRouter();
  },

  setup() {
    const isCollapse = ref(false);
    const lange = ref("zh");
    const data = reactive(menus);
    return {
      isCollapse,
      lange,
      data,
    };
  },

  components: {
    TagRouter,
    Avatar,
    Main,
    sideBar,
  },

  computed: {},

  methods: {
    ...mapActions("app", ["actionTagRouter"]),
    triggerCollapse() {
      this.isCollapse = !this.isCollapse;
    },

    getCurrentRouter() {
      let tagUrl = this.$router.currentRoute.value.path;
      let title = this.$router.currentRoute.value.meta.title;
      //   window.sessionStorage.setItem("activeRouter", tagUrl);
      this.actionTagRouter({ title, path: tagUrl });
    },

    getBreadcrumb() {
      console.log(this.$router);
      return this.$router.currentRoute.value.matched.map((item) => {
        return { path: item.path, meta: item.meta };
      });
    },

    handleSelect() {},
  },
  watch: {
    lang: function (newValue, oldValue) {
      this.$i18n.locale = newValue.value == "zh" ? "zh" : "en";
      ElMessage.success({
        type: "success",
        message: `当前切换地语言为:${newValue}`,
      });
    },
    $route: "getCurrentRouter",
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  width: 100%;

  .menu {
    height: 100%;
    background-color: #7c0a23e3;
    overflow-y: hidden;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .el-header {
    height: 60px;
    display: flex;
    justify-content: flex-start;

    align-items: center;
    border-bottom: 1px solid #eee;
    background-color: rgba(238, 238, 238, 0.979);
  }

  .el-menu-demo {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;

    .el-menu-item {
      height: 100%;
    }

    .el-submenu {
      height: 50px;
      overflow: hidden;
    }
  }

  .main {
    flex: 1;
  }

  .title {
    width: 200px;
    margin-left: 10px;
    color: #000;
    a {
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .collapse {
    color: #fff;
    background-color: #000;
    width: 30px;
    cursor: pointer;
  }

  .more {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
  }

  .link {
    margin-right: 30px;
  }
  .dropdown {
    margin-left: 150px;
  }

  .tag {
    height: 60px;
    border-bottom: 1px solid #fdf6f6;
  }
}
</style>
