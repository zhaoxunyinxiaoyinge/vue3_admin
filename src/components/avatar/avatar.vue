
<template>
    <div>
        <vue-cropper
            class="cropper"
            ref="cropper"
            src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
            alt="Source Image"
            preview=".preview"

    
    />
<!-- 
    <div class="preview" v-if="scroppImage">
        <el-image :src="scroppImage"></el-image>
    </div> -->
    <div  class="crop-placeholder"  />
    </div>
</template>
<script>
import {ref,onMounted} from "vue";
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';


export default {
    components:{VueCropper},
    setup() {
        const imgSrc=ref("@/assets/db.jpeg");
        const scroppImage=ref("");
        const cropper=ref(null)
        
        let onReady=()=>{};
        let onCropstart=()=>{};
        let onCropmove=()=>{}
        let onCropend=()=>{}
        let onCrop=()=>{}
        let onZoom=()=>{}

        onMounted(()=>{
            // console.log(cropper,"33")
            // scroppImage.value=cropper.value.getCroppedCanvas()
        })
        return {
            imgSrc,
            onReady,
            onCropmove,
            onCropstart,
            onCropend,
            onCrop,
            onZoom,
            cropper
        }
    },
}
</script>
<style scoped>
.cropper {
    width: 200px;
}
</style>