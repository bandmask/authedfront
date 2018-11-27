import Vue from 'vue'
import vueMq from 'vue-mq'
import router from './router'
import store from './store/store'
import media from './media'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$appName = 'authed front'
Vue.use(vueMq, media)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
