import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(vuetify)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
