import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import CatalogView from '../views/CatalogView.vue'
import ContactView from '../views/ContactView.vue'
import VolunteersView from '../views/VolunteersView.vue'
import ErrorView from '../views/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: AboutUsView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView 
    },
    {
      path: '/volunteers',
      name: 'volunteers',
      component: VolunteersView
    },
    {
      path: "/:catcall(.*)*",
      name: 'err404',
      component: ErrorView
    }
  ]
})

export default router
