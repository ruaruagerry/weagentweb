import Vue from 'vue'
import Router from 'vue-router'
import GameWeb from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GameWeb',
      component: GameWeb
    }
  ]
})
