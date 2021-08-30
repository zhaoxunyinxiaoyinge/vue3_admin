<template>
  <div class="box">
    <el-card class="box-card card-width" :body-style="{ 'font-size': '14px' }">
      <div slot="header" class="clearfix">
        <span class="text">个人信息</span>
      </div>
      <div class="text item">姓名:赵训银</div>
      <div class="text">工号:89742987</div>
      <div class="text">职位:前端工程师</div>
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
.text {
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0;
}
</style>
