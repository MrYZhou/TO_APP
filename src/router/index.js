import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/',
      component: MSite
    }
  ]
})
