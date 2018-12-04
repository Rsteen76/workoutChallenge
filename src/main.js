import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueFire from 'vuefire'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'

import '../node_modules/nprogress/nprogress.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueFire)
Vue.config.productionTip = false

let app = ''
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      render: h => h(App),
      router
    }).$mount('#app')
  }
})
