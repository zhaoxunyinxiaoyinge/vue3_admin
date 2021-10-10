<template>
  <div>
    <el-button type="primary">v-mode使用</el-button>
    <input-form v-model="checked"></input-form>
    绑定属性值: {{ checked }}
    <el-divider>作用域插槽</el-divider>
    <defaults-solt>
      <template v-slot:header>
        <span>这里是剧名插槽</span>
      </template>
      <template v-slot:footer>
        <div>这里是尾部插槽</div>
      </template>
      <!-- 这里是具名插槽和作用域插槽一起使用 -->
      <!-- <template v-slot:center="defaultProps">
                <span v-for="item in defaultProps.list" :key="item.name">{{item.name}}</span>
            </template> -->

      <!-- 解构插槽 (不能又多个)-->
      <!-- <template v-slot:center="{ list }">
        <span v-for="item in list" :key="item.name">{{ item.name }}</span>
      </template> -->

      <!-- 动态插槽名 -->
      <template v-slot:[names]="defaultProps">
        <span v-for="item in defaultProps.list" :key="item.name">{{
          item.name
        }}</span>
      </template>
      <!-- 具名插槽,作用域同时进行缩写 -->
      <template #scale="{ list }">
        <span v-for="item in list" :key="item.name">{{ item.name }}</span>
      </template>
    </defaults-solt>

    <el-button @click="show">点击切换</el-button>  
    {{flag}}
    <transition name="fade">
 
      <div v-if="flag">显示</div>
    </transition>
  </div>
</template>
<script>
import InputForm from "./components/inputForm.vue";
import { ref } from "vue";
import DefaultsSolt from "./components/defaultSlot.vue";

export default {
  setup() {
    let checked = ref(5);
    let names = ref("center");
    let flag = ref(true);
    const show = () => {
      flag.value = !flag.value;
    };

    return {
      checked,
      names,
      flag,

      show,
    };
  },

  components: {
    InputForm,
    DefaultsSolt,
  },
};
</script>

<style lang="scss" scoped>
  .fade-enter-from,.fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active,.fade-leave-active {
      transition: opacity 0.5s ease;
  }
</style>
