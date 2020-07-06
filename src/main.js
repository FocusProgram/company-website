// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'
import App from './App'
import router from './router'
import common from './api/common'
import * as filters from './api/filters'
import BaiduMap from 'vue-baidu-map'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(BaiduMap, {
  ak: '3zYv2l6H81yf4RF4AS25X3FwQULdG3L2'
})
Vue.prototype.common = common

// 跳转后返回顶部
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
})

// 引入mockjs
require('./mock.js')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
