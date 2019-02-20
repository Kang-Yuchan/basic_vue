import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if(store.state.isLogin === true) {
    alert("すでにログインしています。")
    next("/")
  } else {
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if(store.state.isLogin === false) {
    alert("ログインしてください。")
    next("/")
  } else {
    next()
  }
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: "/login",
      name: "login",
      beforeEnter: rejectAuthUser,
      component: () => 
        import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: "/mypage",
      name: "mypage",
      beforeEnter: onlyAuthUser,
      component: () => 
        import(/* webpackChunkName: "mypage" */ './views/Mypage.vue')
    }
  ]
})
