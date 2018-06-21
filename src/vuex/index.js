import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  //全局变量
  state:{
    user:{}
  },
  //修改全局变量必须通过mutations的方法来修改
  mutations:{
    login(state,payload){
      console.log(payload)
      state.user = payload
    },
    logout(state){
      state.user = undefined
    }
  },
  actions:{
    login(context,payload){
      context.commit('login',payload)
    },
    logout(context){
      context.commit('logout')
    }
  }
})
export default store
