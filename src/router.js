import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ActionFiguresDetails from "./views/ActionFigures/ActionFigureDetails";
import Cart from "./views/Cart";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/ActionFigures/:id',
      name: 'ActionFiguresDetails',
      component: ActionFiguresDetails
    },
    {
      path: '/Products',
      name: 'Products',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Products.vue')
    }
  ]
})
