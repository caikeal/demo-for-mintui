import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import App from './App'
import Home from './components/Home.vue'
import TabList from './components/TabList.vue'
/* eslint-disable no-new */
let router = new VueRouter()
router.map({
    '/': {
        component: Home,
        title: '首页'
    },
    '/home': {
        component: Home,
        name: 'Home',
        title: '首页'
    },
    '/tab-list': {
        component: TabList,
        name: 'TabList',
        title: '切换列表'
    }
})

// 无路由切换至/
router.redirect({ '*': '/' })

router.start(Vue.extend({
    components: {
        app: App
    }
}), '#app')

let indexScrollTop = 0
router.beforeEach(transition => {
    // 修正各个页面的滑动高度
    if (transition.to.path !== '/') {
        indexScrollTop = document.body.scrollTop
    }

    // 背景颜色修正
    if (transition.to.path === '/login' || transition.to.path === '/register') {
        document.body.style.backgroundColor = '#fff'
    } else {
        document.body.style.backgroundColor = '#e9ecf5'
    }

    try {
        transition.next()
    } catch (e) {
        console.log(e)
        transition.abort()
    }
})

router.afterEach(transition => {
    // 修正各个页面的滑动高度
    if (transition.to.path !== '/') {
        document.body.scrollTop = 0
    } else {
        Vue.nextTick(() => {
            document.body.scrollTop = indexScrollTop
        })
    }

    // 添加各个页面的title
    document.title = transition.to.title || document.title
})
