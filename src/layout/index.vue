<template>
  <div class="container">
    <Main class="menus" :collapse="isCollapse">
      <sideBar
        :basePath="item.path"
        :key="index"
        :item="item"
        v-for="(item, index) in data"
      ></sideBar>
    </Main>

    <div class="content">
      <div class="top">
        <el-menu
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
        <span class="time">当前时间:{{ time }}</span>
      </div>

      <el-header class="header">
        <div class="collapse" @click="triggerCollapse">
          <span class="el-icon-s-unfold"></span>
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

        <ScreeFull />

        <el-dropdown split-button type="primary">
          个人中心
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>姓名:赵训银</el-dropdown-item>
              <el-dropdown-item>工号:97007164</el-dropdown-item>
              <el-dropdown-item>消息通知</el-dropdown-item>
              <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>

      <TagRouter />

      <!-- 解决组件动态组件不重新渲染地问题 -->
      <div class="main">
        <!-- <el-scrollbar height="600px"> -->
        <transition name="fade" mode="out-in">
          <router-view :key="router.currentRoute.fullPath"> </router-view>
        </transition>
        <!-- </el-scrollbar> -->
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, defineComponent, provide, onMounted } from "vue";

import { useRouter } from "vue-router";

import { mapState, mapActions, mapGetters, mapMutations, useStore } from "vuex";

import TagRouter from "./components/tag_router.vue";

import Avatar from "./components/avatar";

import Main from "./components/main.vue";

import sideBar from "./components/sideBar.vue";

import ScreeFull from "./components/screenFull.vue";

export default {
  created() {
    this.getCurrentRouter();
  },

  setup() {
    const store = useStore();

    const router = useRouter();

    const isCollapse = ref(true);

    const lange = ref("zh");

    provide("iscollapse", isCollapse);

    let menu = store.state.perssion.routes;
    const data = reactive(menu);

    let time = ref("");
    let timeId = ref(null);

    let timeFun = () => {
      setTimeout(() => {
        time.value = new Date().toLocaleString();
        timeFun();
      }, 1000);
    };

    onMounted(() => {
      clearTimeout(timeId.value);
      timeId.value = timeFun();
    });

    const loginOut = () => {
      window.localStorage.token = "";
      store.commit("login/clearToken");
      router.push({
        path: "/login",
      });
    };

    return {
      isCollapse,
      time,
      lange,
      data,
      loginOut,
      router,
    };
  },

  components: {
    TagRouter,
    Avatar,
    Main,
    sideBar,
    ScreeFull,
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
      return this.$router.currentRoute.value.matched.map((item) => {
        return { path: item.path, meta: item.meta };
      });
    },

    handleSelect() {},
  },
  watch: {
    // lang: function (newValue, oldValue) {
    //   this.$i18n.locale = newValue.value == "zh" ? "zh" : "en";
    //   ElMessage.success({
    //     type: "success",
    //     message: `当前切换地语言为:${newValue}`,
    //   });
    // },
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
    background-color: #3742e2e3;
    overflow: hidden;
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time {
      margin-right: 20px;
    }
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
    overflow: auto;
  }

  .title {
    width: auto;
    margin-left: 10px;
    color: #000;
    a {
      font-weight: bolder;
      font-size: 20px;
    }
  }

  .collapse {
    color: #000;
    // background-color: #000;
    font-size: 24px;
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
