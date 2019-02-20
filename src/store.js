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
    //ログインが成功した時
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
    },
    //ログインに失敗した時
    loginFail(state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
      //ログインを試みる
      login({state, commit}, Obj) {
      
        let selectedUser = null
        state.allUsers.forEach(user => {
            if(user.email === Obj.email) selectedUser = user
        })
        selectedUser === null 
         ? commit("loginFail")
         : selectedUser.password !== Obj.password
            ? commit("loginFail")
            : commit("loginSuccess")
        }
      }
})
