<template>
  <div>
    <el-input v-model="goes">
      <template #append>
        <el-button type="primary" @click="incrment">新增</el-button>
      </template>
    </el-input>
  </div>
</template>
<script>
export default {
  props: ["modelValue"],
  computed: {
    goes: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
  methods: {
    incrment() {  
      alert(++this.goes);
   
    },
  },
};
</script>
