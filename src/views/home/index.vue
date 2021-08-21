<template>
  <div class="box">
    <el-card class="box-card card-width" :body-style="{ 'font-size': '14px' }">
      <div slot="header" class="clearfix">
        <span>用户信息</span>
      </div>
      <div class="text item">姓名:赵训银</div>
    </el-card>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
}
.card-width {
  width: 30%;
}
</style>
