<template>
  <div class="dialog">
    <el-dialog
      title="提示"
      v-model="visable"
      width="30%"
      :before-close="handleClose"
    >
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visable = false">取 消</el-button>
          <el-button type="primary" :loading="loading" @click="handleSure"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import {ElMessageBox} from "element-plus"
export default {
  setup() {
    const visable = ref(false);
    const loading = ref(false);

    const handleClose = () => {
      visable.value = false;
    };

    const show=()=>{
        visable.value=true;
    }

    const handleSure = () => {
      loading.value = true;
      ElMessageBox.confirm("确认关闭?")
        .then(() => {
          visable.value = false;
        })
        .finally(() => {
          loading.value = false;
        });
    };

    onMounted(()=>{
      console.log("开始了");
    })

    return {
      visable,

      handleClose,
      handleSure,
      show,
      
      loading,
    };
  },
};
</script>
