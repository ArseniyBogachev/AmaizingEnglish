import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from "@/pages/HomeApp";
import CoursesApp from "@/pages/CoursesApp";
import RegisterApp from "@/pages/RegisterApp";
import LoginApp from "@/pages/LoginApp";
import ChoiceCoursesApp from "@/pages/ChoiceCoursesApp";
import PricesApp from "@/pages/PricesApp";

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
  {
    path: '/login',
    name: 'login',
    component: LoginApp
  },
  {
    path: '/courses/:slug',
    name: 'CoursesChildren',
    component: ChoiceCoursesApp,
    props: true,
  },
  {
    path: '/prices',
    name: 'prices',
    component: PricesApp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
