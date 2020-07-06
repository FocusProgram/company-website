import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/page/home')
const Introduction = () => import('@/page/introduction')
const ProductCase = () => import('@/page/productcase')
const ProductCaseDeatil = () => import('@/page/productcasedetail')
const Professors = () => import('@/page/professors')
const ProfessorsDetail = () => import('@/page/professorsdetail')
const Contact = () => import('@/page/contact')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*', // 当url不存在 自动跳转到首页
      redirect: '/'
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/productcase',
      name: 'productcase',
      component: ProductCase
    },
    {
      path: '/productcasedetail',
      name: 'productcasedetail',
      component: ProductCaseDeatil
    },
    {
      path: '/professors',
      name: 'professors',
      component: Professors
    },
    {
      path: '/professorsdetail',
      name: 'professorsdetail',
      component: ProfessorsDetail
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
