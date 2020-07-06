<template>
  <div class="contact common-box">
    <div class="w">
      <div class="title">联系我们</div>
     <div class="map">
        <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <bm-info-window :show="map.show">汉兴科技<br/><br/>广东省 深圳市 宝安区 西乡</bm-info-window>
            </bm-marker>
        </baidu-map>
      <img src="" alt="">
      </div>
      <div class="detail">
        <span><i>公司地址：</i>山东省 济南市 </span>
        <span class="active"><i>咨询电话：</i>153-3530-0606</span>
        <span><i>邮箱地址：</i>153-3530-0606@163.com</span>
      </div>
      <div class="codes clearfix">
        <div class="code fr">
          <img src="@/assets/wechat.png" alt="">
          <div class="code-title">客服微信</div>
        </div>
        <div class="code fr active">
          <img src="@/assets/wechat.png" alt="">
          <div class="code-title">微信公众平台</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  .map {
    width: 900px;
    height: 300px;
    border-radius: 10px;
    margin: 0 auto;
    overflow: hidden;
    background-color: skyblue;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .detail {
    width: 900px;
    margin: 45px auto 50px;
    span {
      color: #151515;
      &.active {
        margin: 0 90px;
      }
      i {
        font-size: 18px;
        color: #133B28;
      }
    }
  }
  .codes {
    width: 900px;
    margin: 0 auto;
    .code {
      text-align: center;
      &.active {
        margin-right: 50px;
      }
      img {
        width: 100px;
        height: 100px;
      }
      .code-title {
        margin-top: 10px;
        color: #133B28;
      }
    }
  }
}
</style>

<script>
export default {
  created: function() {
    this.$emit('banner', false)
  },
  data: () => ({
    map: {
        center: {lng: 113.869162, lat: 22.581635},
        zoom: 15,
        show: true,
        dragging: true
    }
  }),
  methods: {
    handler ({BMap, map}) {
      // let me = this;
      console.log(BMap, map)
      // 鼠标缩放
      map.enableScrollWheelZoom(true)
      // 点击事件获取经纬度
      map.addEventListener('click', function (e) {
        console.log(e.point.lng, e.point.lat)
      })
    }
  }
}
</script>
