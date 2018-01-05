import Vue from 'vue'
import Router from 'vue-router'
import Recomomend from '@/components/recommend/recommend'
import Rank from '@/components/rank/rank'
import Seacrh from '@/components/search/search'
import Singer from '@/components/singer/singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recommend',
      name: 'Recomomend',
      component: Recomomend
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/singer',
      name: 'Singer',
      component: Singer
    },
    {
      path: '/search',
      name: 'Seacrh',
      component: Seacrh
    }
  ]
})
