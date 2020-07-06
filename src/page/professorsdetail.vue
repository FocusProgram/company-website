<template>
  <div class="professordetail common-box">
    <div class="w">
      <div class="title">{{product.name}}</div>
      <div class="main clearfix">
        <div class="poster fl">
          <div class="teachers-list">
            <div class="avator">
              <img :src="product.avator" alt style="height:450px">
            </div>
            <!-- <div class="intro">
              <div class="name">{{name}}</div>
              <div class="brief">
              </div>
            </div> -->
          </div>
        </div>
        <div class="summary">
          <div class="c-summary">
            <div class="summary-title">简介：</div>
            <div class="summary-content">{{product.brief}}
            </div>
          </div>
          <div class="e-summary">
            <div class="summary-title">Introduction:</div>
            <div class="summary-content" v-for="(item, index) in introduceUrlLists" :key="index">
              <!-- The chief capital mentor of the school of business at north clear think tank
              <br>Researcher of China national conditions research center of Peking University
              <br>Doctoral supervisor of graduate school of Chinese academy of sciences
              <br>American project management association
              <br>U have to serve the famous investment bank, Goldman sachs, an investment bank and the first Boston to participate in China's three largest listed companies in the United States (jinshan petrochemical, datang power, China southern airlines) listed process;
              <br>After returning to China, he was the chief representative of CAPITALHOUSE investment group in China.
              As the foreign representative of China's light industrial investment fund, the company has led the investment demonstration and investment project supervision of dozens of enterprises. -->
              <img :src="item" style="width:840px"><br><br>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      product: this.$route.query.product,
      introduceUrlLists: this.$route.query.product.introduceUrl.split(',')
    }
  },
  created () {
    this.$emit('banner', false)
    console.log(this.introduceUrlLists)
  }
}
</script>
<style lang="scss" scoped>
.professordetail {
  .title {
    letter-spacing: 3px;
  }
  .main {
    padding: 0 35px;
    .poster {
      margin-right: 20px;
      .teachers-list {
        width: 270px;
        height: 493px;
        background: #ffffff;
        box-shadow: 0 0 8px 0 rgba(30, 76, 53, 0.25);
        border-radius: 10px;
        overflow: hidden;
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
    .summary {
      overflow: hidden;
      .e-summary {
        margin-top: 20px;
      }
      .summary-title {
        font-size: 18px;
        color: #133b28;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .summary-content {
        color: #151515;
        line-height: 24px;
      }
    }
  }
}
</style>
