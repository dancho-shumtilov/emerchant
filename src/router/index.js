import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import UsersPage from '../views/UsersPage.vue'
import CartPage from '../views/CartPage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import PageNotFoundPage from '../views/PageNotFoundPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about-us',
    name: 'About us',
    component: AboutUsPage
  },
  {
    path: '/users',
    name: 'Users',
    component: UsersPage
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartPage
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage
  },
  { 
    path: "/:catchAll(.*)",
    name: 'page-not-found',
    component: PageNotFoundPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
