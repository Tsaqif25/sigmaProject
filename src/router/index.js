import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '../components/LoginVue.vue'
import HomeUser from '../components/homeUser.vue'
import RentalBarang from '../components/RentalBarang.vue'
import NotFoundView from './NotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginVue
    },
    {
      path: '/home',
      name: 'Home',
      component: HomeUser
    },
    {
      path: '/rental',
      name: 'Rental',
      component: RentalBarang,
      children:[
        {
          path: '/Dashboard',
          name: 'Dashboard',
          component: RentalBarang
        },
        {
          path: '/inventory',
          name: 'Inventory',
          component: RentalBarang
        },

        {
          path: '/facility',
          name: 'facility',
          component: RentalBarang
        },
      ]
      
  
     
    },

   

    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFoundView
    },
  ]
})

export default router
