<template>
  <div class="newsdetail common-box">
    <div class="w">
      <div class="title">{{product.title}}</div>
      <div class="time">{{product.time}}</div>
      <div class="content" v-html="product.brief">
      </div>
      <div v-for="(img, index) in imageLists" :key="index" style="text-align:center"><img :src="img" style="width:1100px;margin-top:10px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: this.$route.query.product,
      imageLists: this.$route.query.product.images.split(',')
    }
  },
  created () {
    console.log(this.imageLists)
  }
}
</script>
<style lang="scss" scoped>
.newsdetail {
  .content {
    padding: 50px 150px 0;
  }
}
</style>
