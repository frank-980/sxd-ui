import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* sxd-ui */
import SxdUi from '../packages'
import '../public/iconfont/iconfont.css';
Vue.use(SxdUi)
console.log(SxdUi)
/* highlight */
/*import hljs from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(hljs.vuePlugin)*/
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
