<template>
  <div class="introduction common-box">
    <div class="w">
      <div class="title">公司简介</div>
      <div><img src="static/images/banner/banner-1.jpg" style="width:900px;margin-left:50px"></div>
      <div class="content" v-loading="loading" v-html="content" style="line-height:30px"></div>
    </div>
  </div>
</template>
<script>
import api from '@/api/api'
export default {
  data () {
    return {
      menuLists: [],
      activeIndex: 0,
      content: '',
      loading: true
    }
  },
  created () {
    this.getBrief()
    this.$emit('banner', false)
  },
  methods: {
    getContent (index) {
      this.activeIndex = index
      this.loading = true
      this.getBrief()
    },
    getBrief () {
      setTimeout(() => {
        api.getBrief('/getBrief')
          .then(res => {
            // this.content = res.brief
            this.content = '汉兴科技于2016年成立，是中国光学检测行业排名前列的研发商和制造商。汉兴科技以专注的精神和独特的创意设计能力，通过自主研发和制造，打造了多款经典的光学检测仪，如离线机A6、离线机680、在线机A8等近年来，汉兴科技在中国及海外市场稳步增长，公司旗下检测仪在多个国家和地区上线。汉兴科技拥有强大的技术研发能力，能够满足各种市场需求。汉兴科技拥有自主研发的技术体系，公司员工由最初的5人发展到现在的百人，公司70%以上员工为技术人员，在自主研发方面都积累了不少的专利。完善的研发、制造、质量控制及良好的售后服务体系，令汉兴科技能持续不断的改进检测仪，提供优质的用户体验和打造具有竞争力的产品。通过这些努力， 汉兴科技已树立了一个专业的光学检测行业的品牌形象，并得到了海内外客户的普遍认可。汉兴科技致力于为打破国外品牌的垄断局面， 以践行“自主创新作为国家核心发展基石”的企业愿景，不论新产品研发、新技术突破还是市场化竞争力方面， 均在加快人才储备， 快速实现可持续发展未来，汉兴科技将为继续专注于光学检测仪的研发，加大市场渗透力度、进一步拓展全球业务、聚焦客户服务， 努力朝“光学检测百年品牌”的目标迈进。'
            this.loading = false
          })
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.introduction {
  .w {
    padding: 0 100px;
    .menu {
      height: 40px;
      line-height: 40px;
      width: 1000px;
      border-bottom: 2px solid #133B28;
      padding: 0 80px;
      span {
        display: inline-block;
        width: 16.66%;
        text-align: center;
        a {
          &.active {
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
    .content {
      padding: 50px;
    }
  }
}
</style>
