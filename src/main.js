import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.config.silent = false
import 'bootstrap/dist/css/bootstrap.css'
import router from './router';


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
