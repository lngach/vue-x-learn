import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/ProductContainer.vue'),
      children: [
        {
          path: '/products/:id/show',
          name: 'showProduct',
          component: () => import('@/components/Products/ProductItem.vue'),
        },
        {
          path: '/products/new',
          name: 'addProduct',
          component: () => import('@/components/Products/FormProduct.vue'),
        },
        {
          path: '/products/:id/edit',
          name: 'editProduct',
          component: () => import('@/components/Products/FormProduct.vue'),
        },
      ],
    },
  ],
})
