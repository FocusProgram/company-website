<template>
  <div class="professors common-box">
    <div class="w">
      <div class="title">产品列表</div>
      <div class="products-lists clearfix">
        <div class="products-list fl" v-for="(product, index) in productsArr" :key="index">
          <a href="javascript:;" @click="toDetail(product)">
            <div class="avator">
              <img :src="product.avator" alt>
            </div>
            <div class="intro">
              <div class="name">{{ product.name }}</div>
              <div class="brief" v-html="product.brief"></div>
            </div>
          </a>
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
      productsArr: [
        {
          avator: './static/images/product/AOI-1.png',
          name: 'A6离线AOI设备',
          brief: 'HX-A6是专为国内许多小批量、多机种的制造厂商开发的离线式AOI。进口的丝杆导轨实现最高的精度，3CCD彩色相机准确识别各部件的颜色变化，完全01005的检测能力，符合CE标准和人性化的机械设计，超大抽拉式操作托盘，可供操作人员置放PCB等物品，位于中间的LCD显示器可保护操作人员视力，集中的电路系统打开外罩便一目了然，方便维护保养，自动张开的双边夹具大大提高了使用效果。',
          introduceUrl: './static/images/product/AOI-1-introduce-1.png,./static/images/product/AOI-1-introduce-2.png,./static/images/product/AOI-1-introduce-3.png'
        },
        {
          avator: './static/images/product/AOI-2.png',
          name: 'A8在线AOI设备',
          brief: '随着对产品质量的要求及人工成本的不断提升，越来越多的制造商期望全自动化的制程，以此来提高效率，降低人工成本。汉兴科技研制的A8就是为了实现广大制造商这一理想，其配备多重软件分析算法，多种应用模式和各项高实用的辅助功能，除此之外，还配备高精度的运动系统。图像采集系统，使其检测速度更快，检出率更高，更稳定，以及在操作方面更为便捷。',
          introduceUrl: './static/images/product/AOI-2-introduce-1.png,./static/images/product/AOI-2-introduce-2.png,./static/images/product/AOI-2-introduce-3.png,./static/images/product/AOI-2-introduce-4.png'
        },
        {
          avator: './static/images/product/AOI-3.png',
          name: 'A680深度学习型',
          brief: 'HX-A680为汉兴科技公司离线系列AOI产品，一般放置在SMT生产线的旁边，与在线AOI是不同类的产品，在线AOI可以放在生产线上，与生产线动作频率一致。属于SMT生产线其中的一个环节，而多数离线AOI放在回流焊的后面，属于半自动检测设备，需要人手参与取放板操作。在线AOI可以直接检测，不需要人手协助，属于全自动检测设备。',
          introduceUrl: './static/images/product/AOI-3-introduce-1.png,./static/images/product/AOI-3-introduce-2.png,./static/images/product/AOI-3-introduce-3.png'
        },
        {
          avator: './static/images/product/AOI-4.png',
          name: 'A6T全自动离线混合贴装光学检测设备',
          brief: 'HX-A6T是一款引导新领域多功能检测创新AOI，它配备独特的图像采集技术及光源系统，可检测通孔和混合贴装技术电路板，是具有色环电阻波峰焊后、SMT回流后、元件面等工艺需求的最佳选择。',
          introduceUrl: './static/images/product/AOI-4-introduce-1.png,./static/images/product/AOI-4-introduce-2.png,./static/images/product/AOI-4-introduce-3.png'
        }
      ]
    }
  },
  methods: {
    loadmore () {},
    toDetail (product) {
      this.$router.push({
        path: 'professorsdetail',
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
.professors {
  .products-lists {
    padding: 0 16px;
    .products-list {
      width: 270px;
      height: 493px;
      margin: 11px;
      background: #ffffff;
      box-shadow: 0 0 8px 0 rgba(30, 76, 53, 0.25);
      border-radius: 10px;
      overflow: hidden;
      a {
        display: block;
        width: 100%;
        height: 100%;
        .avator {
          width: 100%;
          height: 236px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .intro {
          padding: 30px 20px 0;
          .name {
            color: #133b28;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .brief {
            color: #666666;
            line-height: 40px;
          }
        }
      }
    }
  }
  .loadmore {
    width: 370px;
    height: 48px;
    line-height: 48px;
    margin: 40px auto 0;
    border: 2px solid #133b28;
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    color: #133b28;
    cursor: pointer;
  }
}
</style>
