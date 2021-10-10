<template>
<Fragment>
  <div class="box">
    <el-button type="primary">树形表格</el-button>
    <el-button type="primary">自定义表头表格</el-button>
    <el-button type="primary" @click="checkedItem" >单选表格</el-button>
    <el-button type="primary" @click="checkedItems">默认多选</el-button>
    
    <el-divider></el-divider>
    <el-table
    ref="table"
    
     :span-method="arraySpanMethod"
    :row-style="({row,rowIndex})=>{
      if(rowIndex%2!==0){
        return 'blue';
      }
    }"
    :row-class-name="({row,rowIndex})=>{if(rowIndex%2==0){ return 'red' }}"
    v-loading="loading"
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

      highlight-current-row
      @select="handleSelectionChange"

      @selection-change="hangdleChange"

      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        type="selection"
        width="55"
        fixed
        align="center"
         :reserve-selection="true"
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
        align="center"
        :formatter="formatDate"
 
      ></el-table-column>

      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180"
        align="center"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址"
        align="left"
        show-overflow-tooltip
        width="300"
      >
      </el-table-column>

        <el-table-column
        prop="address"
        label="地址"
        align="left"
        width="300"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column label="操作" fixed="right" width="200" align="center" >
        <template #header>
          <el-input
            v-model="search"
            placeholder="请输入查询参数"
            type="text"
          ></el-input>
        </template>

        <template #default>
          <el-button type="primary" @click="showDialog">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="margin-top: 20px">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <Dialog ref="dialog" />
  </div>
</Fragment>
</template>
<script>
import {Fragment} from "vue"

import {getData} from "./api";

import Dialog from "@/components/dialog";
import {formatDate} from "./utils/index"

export default {
  name: "info",
  components:{
    Dialog
  },

  data() {
    return {
      tableData: [
      ],
      listQuery:{
        page:1,
        limit:10,
      },

      total:0,

      loading:false,

      current:"",
    };
  },
  
  created(){
    this.getTabelData(this.listQuery);

  },

  mounted(){
   
  },

  methods: {
    getTabelData(params){
      this.loading=true;
      getData(params).then((res)=>{
        this.loading=false;
        this.tableData=res.data;
        this.listQuery={
          page:res.page,
          limit:res.limit
        }
        this.total=res.total;
      }).finally(()=>{
        this.loading=false;
      })
    },
    showDialog(){
      this.$refs.dialog.show();
    },

    formatDate,

    checkedItems(){

    },


    handleSelectionChange(selection,row) {
      this.$refs.table.clearSelection();
      let length=selection.length;
      if(length==0){
        return 
      }
       this.$refs.table.toggleRowSelection(row, true);
    },

    hangdleChange(val){
      
    },

    arraySpanMethod({ row, column, rowIndex, columnIndex }){
      if(rowIndex==0){
        if(columnIndex==1){
          return [1,2]
        }else if(columnIndex==2){
          return [0,0]
        }
      }
    },

    handleSizeChange(val) {
      this.listQuery.limit=val;
      this.getTabelData(this.listQuery)
    },

    handleCurrentChange(val) {
      this.listQuery.page=val;
      this.getTabelData(this.listQuery)
    },

    //测试

    selectData(data){
      console.log(data);
    }
  },
};
</script>
<style lang="css" scoped>

.box {
  padding: 10px;
  box-sizing: border-box;
}

/* 深度选择器 */
.el-table /deep/ .red {
   color:red
}

</style>
