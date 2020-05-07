import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import Projekter from '../views/Projekter.vue'
import Cv from '../views/Cv.vue'
import Kontakt from '../views/Kontakt.vue' 
import Projekt1 from '../views/Projekt1.vue'
import Projekt2 from '../views/Projekt2.vue'
import Projekt3 from '../views/Projekt3.vue'
import Projekt4 from '../views/Projekt4.vue'
import Projekt5 from '../views/Projekt5.vue'
import Projekt6 from '../views/Projekt6.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  {
    path: '/projekter',
    name: 'Projekter',
    component: Projekter
  },
  {
    path: '/Cv',
    name: 'Cv',
    component: Cv
  },
  {
    path: '/projekt1',
    name: 'Projekt1',
    component: Projekt1
  },
  {
    path: '/projekt2',
    name: 'Projekt2',
    component: Projekt2
  },
  {
    path: '/projekt3',
    name: 'Projekt3',
    component: Projekt3
  },
  {
    path: '/projekt4',
    name: 'Projekt4',
    component: Projekt4
  },
  {
    path: '/projekt5',
    name: 'Projekt5',
    component: Projekt5
  },
  {
    path: '/projekt6',
    name: 'Projekt6',
    component: Projekt6
  },
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  base: process.env.BASE_URL,
  routes
})

export default router
