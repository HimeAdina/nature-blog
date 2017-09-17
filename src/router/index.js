import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import E404 from '@/components/errors/404'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      component: E404
    }
  ]
})
