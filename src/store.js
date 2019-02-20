import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      {id: 1, name: "yuchan", email: "yuchan@gmail.com", password: "123"},
      {id: 2, name: "seeds", email: "seeds@gmail.com", password: "123"}
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {

  },
  actions: {

  }
})
