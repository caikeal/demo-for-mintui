import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from './components/Home.vue'
import TabList from './components/TabList.vue'

const routes = [
  { path: '/', component: Home, title: '首页' },
  { path: '/home', component: Home, name: 'Home', title: '首页' },
  { path: '/tab-list', component: TabList, name: 'TabList', title: '切换列表' },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { App },
  router
}).$mount('#app')

let indexScrollTop = 0
router.beforeEach((to, from, next) => {
  // 修正各个页面的滑动高度
  if (to.path !== '/') {
    indexScrollTop = document.body.scrollTop
  }

  // 背景颜色修正
  if (to.path === '/login' || to.path === '/register') {
    document.body.style.backgroundColor = '#fff'
  } else {
    document.body.style.backgroundColor = '#e9ecf5'
  }

  try {
    next()
  } catch (e) {
    console.log(e)
    next(false)
  }
})

router.afterEach((to, from, next) => {
  // 修正各个页面的滑动高度
  if (to.path !== '/') {
    document.body.scrollTop = 0
  } else {
    Vue.nextTick(() => {
      document.body.scrollTop = indexScrollTop
    })
  }

  // 添加各个页面的title
  document.title = to.title || document.title
})
