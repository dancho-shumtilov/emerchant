import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutUsPage from '../views/AboutUsPage.vue'
import UsersPage from '../views/UsersPage.vue'
import DataForm from '../views/DataForm.vue'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import PageNotFoundPage from '../views/PageNotFoundPage.vue'
import Info from '../views/dropdown/Info.vue'
import Videos from '../views/dropdown/Videos.vue'

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
    path: '/data-form',
    name: 'DataForm',
    component: DataForm
  },
  {
    path: '/products',
    name: 'ProductsPage',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage
  },
  {
    path: '/info',
    name: 'Info',
    component: Info
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
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
