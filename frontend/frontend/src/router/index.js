import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from "@/pages/HomeApp";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
