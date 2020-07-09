<template>
  <div class="home">
    <div class="reason">
      <div class="top">
        <div class="line line-l"></div>汉兴科技
        <div class="line line-r"></div>
      </div>
      <div class="intro">
        汉兴科技于2016年成立，是中国光学检测行业排名前列的研发商和制造商
      </div>
      <div class="icons clearfix">
        <div class="part fl">
          <div class="part-top">
            <img src="../assets/icon2.png" alt="自主研发生产">
          </div>
          <div class="part-title">自主研发生产</div>
        </div>
        <div class="part fl">
          <div class="part-top second">
            <img src="../assets/icon1.png" alt="全球化销售">
          </div>
          <div class="part-title">全球化销售</div>
        </div>
        <div class="part fl">
          <div class="part-top third">
            <img src="../assets/icon3.png" alt="售前售后服务">
          </div>
          <div class="part-title">售前售后服务</div>
        </div>
      </div>
    </div>

    <div class="product">
      <div class="w">
        <div class="header">
          <span class="fl">产品展示</span>
          <router-link to="professors" class="fr">更多 ></router-link>
        </div>
      </div>
      <div class="product-lists">
        <el-carousel indicator-position="outside" height="510px" :interval="5000" trigger="click">
          <el-carousel-item v-for="(item, index) in productLists" :key="index">
            <div class="product-list clearfix">
              <a
                class="item fl"
                v-for="(c_item, c_index) in item"
                :key="c_index"
                href="javascript:;"
                @click="toProfessorsDetail(c_item)"
              >
                <div class="avator">
                  <img :src="c_item.avator" alt>
                </div>
                <div class="intro">
                  <div class="name">{{ c_item.name }}</div>
                  <div class="brief" v-html="c_item.brief.substring(0,80).concat('......')" style="line-height:30px"></div>
                </div>
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

     <div class="product">
      <div class="w">
        <div class="header">
          <span class="fl">荣誉专利</span>
        </div>
      </div>
      <div class="product-lists">
        <el-carousel indicator-position="outside" height="510px" :interval="5000" trigger="click">
          <el-carousel-item v-for="(patent, index) in patentLists" :key="index">
            <div class="product-list clearfix">
              <a class="item fl" v-for="(p_patent, p_index) in patent" :key="p_index" style="width:270px;height:450px;display:flex;justify-content:center;align-items: center;">
                <img :src="p_patent.imgUrl" alt="" style="height:420px;width:255px">
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="product">
      <div class="w">
        <div class="header">
          <span class="fl">合作伙伴</span>
          <!-- <router-link to="professors" class="fr">more ></router-link> -->
        </div>
      </div>
      <div class="product-lists">
        <el-carousel indicator-position="outside" height="210px" :interval="5000" trigger="click">
          <el-carousel-item v-for="(partner, index) in partnerLists" :key="index">
            <div class="product-list clearfix">
              <a class="item fl" v-for="(p_partner, p_index) in partner" :key="p_index" style="display:flex;justify-content:center;align-items: center;height:210px">
                <img :src="p_partner.imgUrl" alt="" style="height:120px;width:230px">
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  
    <!--右侧悬浮菜单-->
    <div class="slide">
      <ul class="icon">
        <li class="up" title="上一页"></li>
        <li class="qq"></li>
        <li class="tel"></li>
        <li class="wx"></li>
        <li class="down" title="下一页"></li>
      </ul>
      <ul class="info">
        <li class="qq">
          <p>在线沟通，请点我<a href="http://wpa.qq.com/msgrd?v=3&uin=1031652818&site=qq&menu=yes" target="_blank">在线咨询</a></p>
        </li>
        <li class="tel">
          <p>咨询热线：<br>153-3530-0606<br>客服QQ：<br>1031652818</p>
        </li>
        <li class="wx">
          <div class="img"><img src="../assets/wechat.png" /></div>
        </li>
      </ul>
    </div>
    <div id="btn" class="index_cy"></div>
  </div>
</template>

<script>
import api from '@/api/api'
import { $query } from '../flot/jquery.min.js'
export default {
  data () {
    return {      
      patentArr: [
        {
          imgUrl: '../static/images/patent/patent-1.png'
        },
        {
          imgUrl: '../static/images/patent/patent-2.png'
        },
        {
          imgUrl: '../static/images/patent/patent-3.png'
        },
        {
          imgUrl: '../static/images/patent/patent-4.png'
        },
        {
          imgUrl: '../static/images/patent/patent-5.png'
        },
        {
          imgUrl: '../static/images/patent/patent-6.png'
        }
      ],
      partnerArr: [
        {
          imgUrl: '../static/images/partner/partner-1.png'
        },
        {
          imgUrl: '../static/images/partner/partner-2.png'
        },
        {
          imgUrl: '../static/images/partner/partner-3.png'
        },
        {
          imgUrl: '../static/images/partner/partner-4.png'
        },
        {
          imgUrl: '../static/images/partner/partner-5.png'
        },
        {
          imgUrl: '../static/images/partner/partner-6.png'
        },
        {
          imgUrl: '../static/images/partner/partner-7.png'
        },
        {
          imgUrl: '../static/images/partner/partner-8.png'
        }
      ],
      listsArr: [],
      productArr: [
        {
          avator: '../static/images/product/AOI-1.png',
          name: 'A6离线AOI设备',
          brief: 'HX-A6是专为国内许多小批量、多机种的制造厂商开发的离线式AOI。进口的丝杆导轨实现最高的精度，3CCD彩色相机准确识别各部件的颜色变化，完全01005的检测能力，符合CE标准和人性化的机械设计，超大抽拉式操作托盘，可供操作人员置放PCB等物品，位于中间的LCD显示器可保护操作人员视力，集中的电路系统打开外罩便一目了然，方便维护保养，自动张开的双边夹具大大提高了使用效果。',
          introduceUrl: '../static/images/product/AOI-1-introduce-1.png,../static/images/product/AOI-1-introduce-2.png,../static/images/product/AOI-1-introduce-3.png'
        },
        {
          avator: '../static/images/product/AOI-2.png',
          name: 'A8在线AOI设备',
          brief: '随着对产品质量的要求及人工成本的不断提升，越来越多的制造商期望全自动化的制程，以此来提高效率，降低人工成本。汉兴科技研制的A8就是为了实现广大制造商这一理想，其配备多重软件分析算法，多种应用模式和各项高实用的辅助功能，除此之外，还配备高精度的运动系统。图像采集系统，使其检测速度更快，检出率更高，更稳定，以及在操作方面更为便捷。',
          introduceUrl: '../static/images/product/AOI-2-introduce-1.png,../static/images/product/AOI-2-introduce-2.png,../static/images/product/AOI-2-introduce-3.png,../static/images/product/AOI-2-introduce-4.png'
        },
        {
          avator: '../static/images/product/AOI-3.png',
          name: 'A680深度学习型',
          brief: 'HX-A680为汉兴科技公司离线系列AOI产品，一般放置在SMT生产线的旁边，与在线AOI是不同类的产品，在线AOI可以放在生产线上，与生产线动作频率一致。属于SMT生产线其中的一个环节，而多数离线AOI放在回流焊的后面，属于半自动检测设备，需要人手参与取放板操作。在线AOI可以直接检测，不需要人手协助，属于全自动检测设备。',
          introduceUrl: '../static/images/product/AOI-3-introduce-1.png,../static/images/product/AOI-3-introduce-2.png,../static/images/product/AOI-3-introduce-3.png'
        },
        {
          avator: '../static/images/product/AOI-4.png',
          name: 'A6T全自动离线混合贴装光学检测设备',
          brief: 'HX-A6T是一款引导新领域多功能检测创新AOI，它配备独特的图像采集技术及光源系统，可检测通孔和混合贴装技术电路板，是具有色环电阻波峰焊后、SMT回流后、元件面等工艺需求的最佳选择。',
          introduceUrl: '../static/images/product/AOI-4-introduce-1.png,../static/images/product/AOI-4-introduce-2.png,../static/images/product/AOI-4-introduce-3.png'
        }
      ],
      productLists: [],
      partnerLists: [],
      patentLists: [],
      getNewsStatus: true
    }
  },
  created () {
    this.computedProduct()
    this.computedPartner()
    this.computerPatent()
    this.getNewsLists()
    this.$emit('banner', true)
  },
  methods: {
    computedProduct () {
      this.productLists = this.common.getNumArr(this.productArr, 4)
    },
    computedPartner() {
      this.partnerLists = this.common.getNumArr(this.partnerArr, 4)
    },
    computerPatent() {
      this.patentLists = this.common.getNumArr(this.patentArr, 4)
    },
    loadmore () {
      this.getNewsStatus = false
      setTimeout(() => {
        this.getNewsStatus = true
      }, 2000)
    },
    toProfessorsDetail (product) {
      this.$router.push({
        path: 'professorsdetail',
        query: {
          product: product
        }
      })
    },
    toNewsDetail (index) {
      this.$router.push({
        path: 'newsdetail',
        query: { newsId: index }
      })
    },
    getNewsLists () {
      api.getNewsLists('/getNews')
        .then(res => {
          this.listsArr = res.newsList
        })
    }
  },
  mounted: function() {
    // 加载侧边浮窗动态js
    $('.slide .icon li').not('.up,.down').mouseenter(function () {
        $('.slide .info').addClass('hover');
        $('.slide .info li').hide();
        $('.slide .info li.' + $(this).attr('class')).show();
    });
    
    $('.slide').mouseleave(function () {
        $('.slide .info').removeClass('hover');
    });

    $('#btn').click(function () {
        $('.slide').toggle();
        if ($(this).hasClass('index_cy')) {
            $(this).removeClass('index_cy');
            $(this).addClass('index_cy2');
        } else {
            $(this).removeClass('index_cy2');
            $(this).addClass('index_cy');
        }
    });
  }
}
</script>

<style>
.home .el-carousel__button {
  opacity: 1;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #afafaf;
}
.home .el-carousel__indicator.is-active button {
  background-image: linear-gradient(-180deg, #2b6d51 0%, #133b28 100%);
}
.home .el-carousel__arrow {
  font-size: 44px;
  width: 70px;
  height: 70px;
  color: #133b28;
  background: #ffffff;
  box-shadow: 0 0 8px 0 rgba(255, 127, 72, 0.25);
}
</style>
<style lang="scss" scoped>
.home {
  overflow: hidden;
  padding-bottom: 50px;
  .reason {
    padding-top: 70px;
    padding-bottom: 80px;
    text-align: center;
    .top {
      position: relative;
      display: inline-block;
      font-size: 36px;
      color: #133b28;
      font-weight: bold;
      .line {
        position: absolute;
        opacity: 0.2;
        background: #1e4c35;
        width: 582px;
        height: 1px;
        top: 26px;
        &.line-l {
          right: 460px;
        }
        &.line-r {
          left: 460px;
        }
      }
    }
    .intro {
      font-size: 24px;
      color: #252525;
      line-height: 38px;
      padding-top: 36px;
    }
    .icons {
      width: 1200px;
      margin: 0 auto;
      padding: 90px 60px 0;
      .part {
        width: 160px;
        margin: 0 100px;
        .part-top {
          width: 100%;
          height: 160px;
          line-height: 160px;
          opacity: 0.3;
          background: #133b28;
          box-shadow: 0 0 8px 0 #133b28;
          border-radius: 100%;
          text-align: center;
          margin-bottom: 16px;
          &.second {
            opacity: 1;
          }
          &.third {
            opacity: 0.5;
          }
        }
        .part-title {
          font-size: 18px;
          color: #133b28;
        }
      }
    }
  }
  .header {
    height: 80px;
    line-height: 80px;
    border-bottom: 2px solid #133b28;
    padding: 0 20px;
    font-weight: bold;
    margin-bottom: 40px;
    .fl {
      font-size: 25px;
      color: #555555;
    }
    .fr {
      font-size: 24px;
      color: #133b28;
    }
  }
  .review,
  .news {
    background: #ffffff;
    box-shadow: 0 0 8px 0 rgba(19, 59, 40, 0.25);
    padding-top: 20px;
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
  }
  .product {
    padding-top: 20px;
    padding-bottom: 40px;
    .product-lists {
      width: 1348px;
      margin: 0 auto;
      .product-list {
        padding: 0 90px;
        .item {
          display: block;
          width: 270px;
          height: 493px;
          margin: 0 11px;
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
    }
  }
  .news {
    padding-bottom: 30px;
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
}
@media screen and (max-width: 1348px) {
  .home {
    .product {
      .product-lists {
        width: 1200px;
        .product-list {
          padding: 0 16px;
        }
      }
    }
  }
}
/**悬浮窗样式 */
.slide{
  width: 50px;
  height: 250px;
  position: fixed;
  top: 50%;
  margin-top: -126px;
  background: #133b28;
  right: 0;
  border-radius: 5px 0 0 5px;
  z-index: 999;
}
.slide ul{
  list-style: none;
}
.slide .icon li{
  width: 49px;
  height: 50px;
  background: url('../flot/image/icon.png') no-repeat;
}
.slide .icon .up{
  background-position:-330px -120px ;
}
.slide .icon li.qq{
  background-position:-385px -73px ;
}
.slide .icon li.tel{
  background-position:-385px -160px ;
}
.slide .icon li.wx{
  background-position:-385px -120px ;
}
.slide .icon li.down{
  background-position:-330px -160px ;
}
.slide .info{
  top: 50%;
  height: 147px;
  position: absolute;
  right: 100%;
  background: #018D75;
  width: 0px;
  overflow: hidden;
  margin-top: -73.5px;
  transition:0.5s;
  border-radius:4px 0 0 4px ;
}
.slide .info.hover{
  width: 145px;
}
.slide .info li{
  width: 145px;
  color: #CCCCCC;
  text-align: center;
}
.slide .info li p{
  font-size: 1.1em;
  line-height: 2em;
  padding: 15px;
  text-align: left;
}
.slide .info li.qq p a{
  display: block;
  margin-top: 12px;
  width: 100px;
  height: 32px;
  line-height: 32px;
  color: #00DFB9;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border: 1px solid #00DFB9;
  border-radius: 5px;
}
.slide .info li.qq p a:hover{
  color: #FFFFFF;
  border: none;
  background: #00E0DB;
}
.slide .info li div.img{
  height: 100%;
  background: #DEFFF9;
  margin: 15px;
}
.slide .info li div.img img{
  width: 100%;
  height: 100%;
}
.index_cy{
  width: 30px;
  height: 30px;
  background: url('../flot/image/index_cy.png');
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: 140px;
  background-position: 62px 0;
  cursor: pointer;
}
.index_cy2{
  width: 30px;
  height: 30px;
  background: url('../flot/image/index_cy.png');
  position: fixed;
  right: 0;
  top: 50%;
  margin-top: 140px;
  background-position: 30px 0;
  cursor: pointer;
}
</style>
