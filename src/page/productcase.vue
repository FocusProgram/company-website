<template>
  <div class="news common-box">
    <div class="w">
      <div class="title">产品案例</div>
      <div class="lists clearfix">
        <div class="list fl" v-for="(product, index) in listsArr" :key="index">
          <div class="list-poster">
            <a href="javascript:;" @click="toDetail(product)">
              <img :src="product.poster" alt>
              <div class="list-brief">{{ product.brief }}</div>
            </a>
          </div>
          <div class="list-msg">
            <div class="list-title ellipsis">{{ product.title }}</div>
            <div class="list-info clearfix">
              <span class="fl">{{ product.time }}</span>
              <!-- <a class="fr" href="javascript:;" @click="toDetail(index)">查看详情</a> -->
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="loadmore" @click="loadmore">加载更多</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      listsArr: [
        {
          poster: './static/images/productcase/productcase-1.png',
          title: 'AOI客户设备现场-1',
          brief: '',
          images: './static/images/productcase/productcase-1-1.png,./static/images/productcase/productcase-1-2.png,./static/images/productcase/productcase-1-3.png',
          time: '2018-04-04'
        },
        {
          poster: './static/images/productcase/productcase-2.png',
          title: 'AOI客户设备现场-2',
          brief: '',
          images: './static/images/productcase/productcase-2-1.png,./static/images/productcase/productcase-2-2.png,./static/images/productcase/productcase-2-3.png,./static/images/productcase/productcase-2-4.png',
          time: '2019-05-13'
        },
        {
          poster: './static/images/productcase/productcase-3.png',
          title: 'AOI客户设备现场-3',
          brief: '',
          images: './static/images/productcase/productcase-3-1.png,./static/images/productcase/productcase-3-2.png,./static/images/productcase/productcase-3-3.png',
          time: '2019-05-13'
        }
      ]
    }
  },
  methods: {
    loadmore () {
      console.log('加载更多')
    },
    toDetail (product) {
      this.$router.push({
        path: 'productcasedetail',
        query: { product: product }
      })
    }
  },
  created: function() {
    this.$emit('banner', false)
  }
}
</script>
<style lang="scss" scoped>
.news {
  .lists {
    padding: 0 15px;
    .list {
      width: 370px;
      margin: 0 10px 40px;
      .list-poster {
        width: 100%;
        height: 200px;
        border-radius: 10px;
        overflow: hidden;
        a {
          display: block;
          width: 100%;
          height: 100%;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .list-brief {
            width: 100%;
            position: absolute;
            bottom: -100px;
            left: 0;
            padding: 10px;
            background-image: linear-gradient(
              -180deg,
              rgba(19, 59, 40, 0.5) 0%,
              #133b28 100%
            );
            color: #ffffff;
            line-height: 18px;
            transition: all 0.3s;
          }
          &:hover {
            .list-brief {
              bottom: 0;
            }
          }
        }
      }
      .list-msg {
        padding: 10px 10px 0;
        .list-title {
          font-size: 18px;
          color: #133b28;
          font-weight: bold;
        }
        .list-info {
          margin-top: 6px;
          .fl {
            opacity: 0.3;
          }
          .fr {
            width: 58px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            border: 1px solid #133b28;
            font-size: 12px;
          }
        }
      }
    }
  }
  .loadmore {
    width: 370px;
    height: 48px;
    line-height: 48px;
    margin: 0 auto;
    border: 2px solid #133b28;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    color: #133b28;
    cursor: pointer;
  }
}
</style>
