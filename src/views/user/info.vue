<!--
 * @Author: your name
 * @Date: 2021-06-09 23:55:01
 * @LastEditTime: 2021-08-08 23:42:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit

 * @FilePath: \ELEment-UIe:\thinkJs\video_admin\src\views\user\info.vue
-->
<template>
  <div class="box">
    <el-button type="primary">树形表格</el-button>
    <el-button type="primary">自定义表头表格</el-button>
    <el-button type="primary">单选表格</el-button>
    <el-button type="primary">默认多选</el-button>
    <el-divider></el-divider>
    <el-table
      :data="
        tableData.filter((item) => {
          return (
            !search || item.name.toLowerCase().includes(search.toLowerCase())
          );
        })
      "
      fit
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
      @selection-change="handleSelectionChange"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        type="selection"
        width="55"
        fixed
        align="center"
        :selectable="
          (row, index) => {
            return index < 2 ? false : true;
          }
        "
      >
      </el-table-column>

      <el-table-column
        type="index"
        label="序号"
        width="180"
        align="center"
        fixed
      >
      </el-table-column>

      <el-table-column
        prop="id"
        label="ID"
        sortable
        width="180"
        fixed
        align="center"
      ></el-table-column>

      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        align="center"
        fixed
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180"
        align="center"
        fixed
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        fixed
        align="left"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column label="操作" fixed align="center">
        <template #header>
          <el-input
            v-model="search"
            placeholder="请输入查询参数"
            type="text"
          ></el-input>
        </template>

        <template #default>
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          children: [
            {
              id: 13,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
            {
              id: 14,
              date: "2016-05-01",
              name: "王小虎",
              address: "上海市普陀区金沙江路 1519 弄",
            },
          ],
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 5,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 6,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 7,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          id: 8,
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],

      search: "",

      currentPage: 1,
    };
  },
  methods: {
    handleSelectionChange() {},
    handleSizeChange() {},
    handleCurrentChange() {},
  },
};
</script>
<style lang="scss" scoped>
$box: 10px;
.box {
  padding: $box;
  box-sizing: border-box;
}
</style>
