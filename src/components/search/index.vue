<template>
  <Fragment>
    <!-- 表单标题 -->
    <div class="title" ></div>

  <el-form  :model=""  :rules=""  :inline=""  :label-position=""   :label-width="" :size=""  :disabled=""   >
    <!--form 表单写入 -->

    <!-- input 框的写入 -->

    <!-- select选项框的写入 -->

    <!-- select 加载更多 -->

    <!-- radio 组的选择-->

    <!-- checkbox sing -->

    <!-- checkbox group -->

    <!-- date日期选择器 -->

    <!-- 日期时间框 -->

    <!-- 时间框 -->

    <!-- 图片上传 -->

    <!-- 级联选择框 -->

    <!-- 文件上传 -->

    <!-- 文本描述 -->

    <!-- 数字框 -->

    <!-- tooptip 文本提示 -->
  </el-form>
  </Fragment>
</template>
<script>
import { reactive,Fragment} from "vue";
export default {
  props: {
    model:{},
    
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
