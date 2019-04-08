import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInformation: {}
  },
  mutation: {
    getUserInformation (state, data) {
      state.userInformation = data
    //   data = state.userInformation
    }
  }
})

export default store
