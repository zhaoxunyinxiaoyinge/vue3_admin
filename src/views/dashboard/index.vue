<template>
  <div>
    <div class="container">
      <div class="bg" ref="divOne"></div>
      <div class="bg" ref="divTwo"></div>
      <div class="bg" ref="divThree"></div>
      <div class="bg" ref="divFour"></div>
      <div class="bg" ref="divFive"></div>
      <div class="bg" ref="divSix"></div>
      <div class="bg" ref="divSeven"></div>
      <div class="bg" ref="divEight"></div>
      <div class="bg" ref="divNing"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { ref, reactive, onMounted } from "vue";

import { getEchearts } from "./api/index";

export default {
  setup() {
    const divOne = ref(null);
    const divTwo = ref(null);
    const divThree = ref(null);
    const divFour = ref(null);
    const divFive = ref(null);
    const divSix = ref(null);
    const divSeven = ref(null);
    const divEight = ref(null);
    const divNing = ref(null); 
    let setOptions=reactive({data:[]});
    
    const init=(res)=>{
    const eDiveOne = echarts.init(divOne.value);
    const eDiveTwo = echarts.init(divTwo.value);
    const eDiveThree = echarts.init(divThree.value);
    const eDiveFour = echarts.init(divFour.value);
    const eDiveFive = echarts.init(divFive.value);
    const eDiveSix= echarts.init(divSix.value);
    const eDiveSeven = echarts.init(divSeven.value);
    const eDiveEight= echarts.init(divEight.value);
    const eDiveNight= echarts.init(divNing.value);
        eDiveOne.setOption(res);
        eDiveTwo.setOption(res);
        eDiveThree.setOption(res);
        eDiveFour.setOption(res);
        eDiveFive.setOption(res);
        eDiveSix.setOption(res);
        eDiveSeven.setOption(res);
        eDiveEight.setOption(res);
        eDiveNight.setOption(res);
    }
 

    const getData = (obj) => {
      getEchearts(obj).then((res) => {
            init(res);
      });
    };

    onMounted(async() => {
     await getData({ url: "/getEcharts", method: "get" });
    });

    return {
      divOne,
      divTwo,
      divThree,
      divFour,
      divFive,
      divSix,
      divSeven,
      divEight,
      divNing,
      
      setOptions
    };
  },
};
</script>

<style scoped lang="scss">
.container {
  display: grid;
  grid-template-columns:33% 33% 33%;
  grid-template-rows: 280px 280px 280px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  // align-content: center; 要容器的高度要大于子容器的高度
  // justfly-content:center;要容器的宽度要大于子容器的宽度
}

.bg {
  background-color:rgba(0,0,0,.1);
  border-radius: 5px;
}
</style>
