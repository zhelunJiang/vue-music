import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout.vue'
import Find from '@/components/FindMusic.vue'
import Home from '@/components/Home.vue'
import My from '@/components/My.vue'
import MyResult from '@/components/MyResult.vue'
import Rank from '@/components/Rank.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Layout,
      children:[{
        path:'find',
        component:Find
      },
        {
          path:'home',
          component:Home
        },{
          path:'rank',
          component:Rank
        },
        {
          path:'my',
          component:My
        },{
          path:'MyResult',
          component:MyResult
        }]
    }
  ]
})
