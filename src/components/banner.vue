<template>
  <div class="banner">
    <el-carousel
      trigger="click"
      height="650px"
      :indicator-position="indicatorStatus"
      :interval="5000"
    >
      <el-carousel-item
        v-for="(item, index) in bannerLists"
        :key="index"
        :style="`background: url(${item}) repeat center`"
      ></el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  data () {
    return {
      bannerLists: ['./static/images/banner/banner-5.png', './static/images/banner/banner-9.jpg', './static/images/banner/banner-7.png','./static/images/banner/banner-8.jpg','./static/images/banner/banner-6.png'],
      indicatorStatus: 'inside'
    }
  },
  created () {
    this.indicatorStatus = this.bannerLists.length > 1 ? 'inside' : 'none'
  }
}
</script>
<style>
.banner .el-carousel__button {
  opacity: 1;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #afafaf;
}
.banner .el-carousel__indicator.is-active button {
  background-image: linear-gradient(-180deg, #ffb67e 0%, #ff7f48 100%);
}
.banner .el-carousel__arrow {
  font-size: 20px;
  background-color: rgba(31, 45, 61, 0.3);
}
</style>
