// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './lib/mui/css/mui.css'
import './assets/styles/iconfont.css'
import './lib/mui//js/mui.js'
// require styles
import 'swiper/dist/css/swiper.css'
import './assets/styles/icons-extra.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

/* reset.css初始化浏览器默认样式 */
import './assets/styles/reset.css'
/* border.css一像素边框解决方案 */
import './assets/styles/border.css'
/* 解决移动端点击事件三百毫秒延迟事件 */
import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.config.productionTip = false
  /* eslint-disable no-new */
import 'lib-flexible/flexible.js'


import axios from 'axios'
Vue.prototype.$http = axios

router.beforeEach((to, from, next) => {``
  if (to.meta.isAuthor & store.state.user.isLogin === false) {
    next({
      name: 'login',
      params: {
        redirect: to.path
      }
    })
  } else {
    next()
  }
})



new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})








