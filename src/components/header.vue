<template>
  <div class="header">
    <div class="top">
      <div class="logo fl">
        <router-link to="/">
          <img src="@/assets/hanxing-logo.png" alt="汉兴科技" link="/">
        </router-link>
      </div>
      <div class="tel fr" style="color:#00458e;font-weight:bolder"><img src="@/assets/phone.png" style="margin-top:-5px">&nbsp;咨询热线：153-3530-0606</div>
    </div>
    <div class="menu">
      <div class="center">
        <router-link
          :to="item.link"
          v-for="(item, index) in menuLists"
          :key="index"
          :class="{'active': activeIndex === index}"
          @click.native="changeIndex(index)"
        >{{ item.title }}</router-link>
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
          link: 'news'
        },
        {
          title: '案例',
          link: 'teaching'
        },
        {
          title: '关于我们',
          link: 'introduction'
        },
        {
          title: '联系我们',
          link: 'contact'
        }
      ],
      activeIndex: 0
    }
  },
  methods: {
    changeIndex (index) {
      this.activeIndex = index
    }
  },
  watch: {
    '$route' (val) {
      this.menuLists.map((item, index) => {
        if (val.path.indexOf(item.link) !== -1) {
          this.activeIndex = index
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: relative;
  z-index: 10;
  .top {
    height: 70px;
    background-color: #133b28;
    background: url("../assets/Group.png");
    padding: 0 70px;
    color: #fff;
    position: relative;
    overflow: hidden;
    .logo {
      a {
        display: block;
        width: 100%;
        height: 50px;
        padding-top: 10px;
      }
    }
    .tel {
      font-size: 24px;
      margin-top: 20px;
    }
  }
  .menu {
    height: 50px;
    background-color: #fff;
    box-shadow: 0 4px 4px 0 rgba(19, 59, 40, 0.25);
    text-align: center;
    .center {
      display: inline;
    }
    a {
      display: inline-block;
      height: 100%;
      line-height: 50px;
      padding: 0 35px;
      color: #133b28;
      font-size: 18px;
      margin: 0 11px;
      &:hover,
      &.active {
        background-color: #133b28;
        color: #fff;
      }
    }
  }
}
</style>
