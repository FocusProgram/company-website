<template>
  <div class="footer" style="background-color:#00113a;">
    <div class="w">
      <div class="info fl">
        <div class="link">
          <router-link :to="item.link" v-for="(item, index) in menuLists" :key="index">{{ item.title }}</router-link>
        </div>
        <div class="msg">
          <p style="line-height:30px">
            地址：山东省济南市槐荫区兴福寺南路与滨州路交叉路口往西北约100米(恒大翡翠华庭3期南侧约150米)
            <br>
            电话：153-3530-0606 邮箱：15335300606@163.com
            <br>
            版权所有：Copyright@2020 济南汉兴自动化科技有限公司&nbsp;|&nbsp;<a href="http://www.beian.miit.gov.cn" style="color:#f72b07;margin-right:0px" target="_blank"><img src="static/images/beian/icp_beian.png" style="margin-top:-5px">&nbsp;鲁ICP备20032717号-1</a>| <img src="static/images/beian/gongan.png" style="margin-top:-5px"><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=37010402000932"  style="color:#f72b07" target="_blank">&nbsp;鲁公安网备37010402000932号</a>
          </p>
        </div>
      </div>
      <div class="icons fr">
        <img src="@/assets/wechat.png" alt="" class="code">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuLists: [
        {
          title: '首页',
          link: '/'
        },
        {
          title: '产品列表',
          link: 'professors'
        },
        {
          title: '产品案例',
          link: 'productcase'
        },
        {
          title: '关于我们',
          link: 'introduction'
        },
        {
          title: '联系我们',
          link: 'contact'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #133b28;
  height: 200px;
  color: #fff;
  font-size: 14px;
  .w {
    height: 100%;
    padding: 50px 25px 0;
    a {
      color: #fff;
      margin-right: 10px;
    }
    .msg {
      padding-top: 18px;
    }
    .icons {
      .code {
        margin-right: 50px;
      }
    }
  }
}
</style>
