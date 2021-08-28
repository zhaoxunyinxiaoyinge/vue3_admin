<template>
  <div :class="!isCollpase ? 'normal' : 'scale'">
    <i class="tubiao" :class="icon ? icon : ''"></i>
    <span slot="title">{{ title }}</span>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: {
    title: {
      type: String,
      default: "",
    },

    icon: {
      type: String,
      default: "",
    },
  },
  setup() {
    const isCollpase = inject("iscollapse");

    return {
      isCollpase,
    };
  },
};
</script>

<style lang="scss" scoped>
.normal {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 100;
  i {
    font-size: 18px;
    color: #fff;
    width: 30px;
  }

  span {
    flex: 1;
  }
}

.scale {
  overflow-x: hidden;
  font-size: 16px;
  font-weight: 100;

  i {
    font-size: 18px;
    color: #fff;
    width: 60px;
  }
}
</style>
