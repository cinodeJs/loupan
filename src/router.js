import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import qxlp from './views/qxlp.vue'
import eslp from './views/eslp.vue'
import qxsp from './views/qxsp.vue'
import lsdt from './views/lsdt.vue'
import lxwm from './views/lxwm.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/qxlp',
      name: 'about',
      component: qxlp
    },
    {
      path: '/eslp',
      name: 'about',
      component: eslp
    },
    {
      path: '/qxsp',
      name: 'about',
      component: qxsp
    },
    {
      path: '/lsdt',
      name: 'about',
      component: lsdt
    },
    {
      path: '/lxwm',
      name: 'about',
      component: lxwm
    }
  ]
})