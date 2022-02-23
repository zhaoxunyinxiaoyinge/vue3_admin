<!--
 * @Author: your name
 * @Date: 2021-09-16 22:51:51
 * @LastEditTime: 2021-12-12 22:25:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-管理系统\video_admin\src\views\home\index.vue
-->
<template>
  <div class="box">
    <el-card class="box-card card-width" :body-style="{ 'font-size': '14px' }">
      <div slot="header" class="clearfix">
        <span class="text">个人信息</span>
      </div>
      <div class="text item">姓名:赵训银</div>
      <div class="text">工号:89742987</div>
      <div class="text">职位:前端工程师</div>
      <Avatar />
    </el-card>
  </div>
</template>
<script>
import Avatar from "@/components/avatar/avatar.vue"
export default {
  components:{Avatar},
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
