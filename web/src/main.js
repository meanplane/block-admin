import Vue from 'vue'
import App from './App.vue'
import {post,fetch} from './plugins/axios'
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;


import router from './router'
import './plugins/element'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
