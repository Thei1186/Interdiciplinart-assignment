import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ActionFiguresList from "./views/ActionFigures/ActionFigureList";
import ProductPage from "./views/ProductPage";
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
      path: '/ActionFigures',
      name: 'ActionFigures',
      component: ActionFiguresList
    },

    {
      path: '/ProductPage',
      name: 'productPage',
      component: ProductPage
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
