import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../view/loginView.vue'
import ProductosView from '../view/productoView.vue'
import DashboardView from '../view/DashboardView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/dashboard', component: DashboardView },
  { path: '/productos', component: ProductosView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
