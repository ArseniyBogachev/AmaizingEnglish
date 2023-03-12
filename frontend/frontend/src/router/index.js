import { createRouter, createWebHistory } from 'vue-router'
import HomeApp from "@/pages/HomeApp";
import RegisterApp from "@/pages/RegisterApp";
import LoginApp from "@/pages/LoginApp";
import ChoiceCoursesApp from "@/pages/ChoiceCoursesApp";
import PricesApp from "@/pages/PricesApp";
import AboutApp from "@/pages/AboutApp";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeApp
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
  {
    path: '/about',
    name: 'about',
    component: AboutApp
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
