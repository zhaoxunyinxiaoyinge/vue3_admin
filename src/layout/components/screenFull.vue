<template>
  <div class="screen-wrap">
    <span class="el-icon-full-screen screen" @click="changeFull"></span>
  </div>
</template>
<script>
import screenfull from "screenfull";

export default {
  name: "Screenfull",
  data() {
    return {
      isScreenFull: false,
    };
  },

  mounted() {
    this.init();
  },

  beforeDestory() {
    this.destory();
  },

  methods: {
    changeFull() {
      if (!screenfull.isEnabled) {
        console.log("不支持开启，全屏操作");
      }

      screenfull.toggle();
    },

    screenChange() {
      this.isScreenFull = screenfull.isScreenFull;
    },

    init() {
      screenfull.on("change", this.screenChange);
    },

    destory() {
      screenfull.off("change", this.screenChange);
    },
  },
};
</script>

<style lang="scss" scoped>
.screen-wrap {
  cursor: pointer;
}

.screen {
  margin-right: 20px;
  font-size: 20px;
  &:hover {
    font-size: 24px;
  }
}
</style>
