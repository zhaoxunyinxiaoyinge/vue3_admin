
<template>
  <div>
    <div class="qrcode"    id="print">打印一下</div>
  </div>
</template>
<script>
  export default {
      data(){
        return {

        }
      },
      mounted(){
        this.$nextTick(()=>{
           console.log(this.erCode(document.getElementById("print")))
        })
      
      }
   }; 
</script>

<style lang="scss" scoped>
  .qrcode{
    display: inline-block;
    img {
        width: 132px;
        height: 132px;
        background-color: red; //设置白色背景色
        padding: 6px; // 利用padding的特性，挤出白边
        box-sizing: border-box;
    }
}
</style>
