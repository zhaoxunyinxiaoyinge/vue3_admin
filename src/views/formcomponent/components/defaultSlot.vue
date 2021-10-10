<template>
  <div>
    <!-- <slot>我是备用插槽</slot> -->
    <header>
       <slot name="header"></slot>
       <slot name="footer"></slot>
    <!--这里提供作用域插槽  -->
        <slot name="center" :list="list"></slot>
    <!-- 缩写的具名插槽和用域插槽以 -->
        <slot name="scale" :list="list"></slot>
    </header>
  </div>
</template>

<script >
import { reactive } from "vue";
export default {
   setup(){
     const list=reactive([{name:'xiaomei'}])
     return {
       list
     }
   }
}
</script>
