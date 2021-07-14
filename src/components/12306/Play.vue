<template>
  <el-carousel indicator-position="outside" height="400px">
    <el-carousel-item v-for="items in images" :key="item">
      <img :src="items.url"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      images:[
        {url:require("../../assets/100zn.jpg")},
        {url:require("../../assets/play2.jpg")},
        {url:require("../../assets/play3.jpg")}

      ]
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
