import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null,
    allUsers: [
      {id: 1, name: "yuchan", email: "yuchan@gmail.com", password: "123"},
      {id: 2, name: "seeds", email: "seeds@gmail.com", password: "123"}
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    //ログインが成功した時
    loginSuccess(state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },
    //ログインに失敗した時
    loginFail(state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
    }
  },
  actions: {
      //ログインを試みる
      login({state, commit}, Obj) {
      
        let selectedUser = null
        state.allUsers.forEach(user => {
            if(user.email === Obj.email) selectedUser = user
        })
        if(selectedUser === null || selectedUser.password !== Obj.password){
           commit("loginFail")
        } else {
            commit("loginSuccess", selectedUser)
            router.push({name: "mypage"})
          }
        },
        logout({commit}) {
          commit('logout')
          router.push({name: "home"})
        }
      }
})
