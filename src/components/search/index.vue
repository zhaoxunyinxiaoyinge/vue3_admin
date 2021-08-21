<template>
  <div>
    <el-form ref="form" v-model="formData">
      <el-form-item :key="index" v-for="(item, index) in formItem">
        <el-input v-if="item.type === 'input'" clearable></el-input>
        <el-select v-else>
          <el-options
            :key="sIndex"
            v-for="(sItem, sIndex) in item.options"
            clearabel
          >
            {{ sItem.label }}
          </el-options>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  props: {
    formItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    const item = this.props;
    let formData = reactive({});
    const form = ref(null);
    return {
      formData,
      form,
    };
  },
};
</script>

<style lang="scss" scoped></style>
