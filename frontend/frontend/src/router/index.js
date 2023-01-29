import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from "@/pages/HomeApp";
import CoursesApp from "@/pages/CoursesApp";
import RegisterApp from "@/pages/RegisterApp";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesApp
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterApp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
