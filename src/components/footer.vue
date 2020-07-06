<template>
  <div class="footer">
    <div class="w">
      <div class="info fl">
        <div class="link">
          <router-link :to="item.link" v-for="(item, index) in menuLists" :key="index">{{ item.title }}</router-link>
        </div>
        <div class="msg">
          <p style="line-height:30px">
            地址：山东省 济南市 汉兴科技
            <br>
            电话：153-3530-0606 邮箱：153-3530-0606@163.com
            <br>
            版权所有：<a href="http://www.beian.miit.gov.cn" target="_blank">苏ICP备19063834号-1</a>
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
          title: '服务',
          link: 'News'
        },
        {
          title: '案例',
          link: 'Teaching'
        },
        {
          title: '关于我们',
          link: 'Professors'
        },
        {
          title: '联系我们',
          link: 'Customization'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #133B28;
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
