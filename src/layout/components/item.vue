<template>
  <div class="title">
    <i :class="icon ? icon : ''"></i>
    <span>{{ title }}</span>
  </div>
</template>

<script>
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
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    width: 50px;
    color: #fff;
  }

  span {
    flex: 1;
  }
}
</style>
