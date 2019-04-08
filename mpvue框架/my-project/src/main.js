import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'
import store from './vuex/store'
// import Vuex from 'vuex'

const fly = new Fly()
Vue.prototype.$fly = fly

// Vue.use(Vuex)
Vue.prototype.$store = store

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
