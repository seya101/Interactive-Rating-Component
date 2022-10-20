import { createRouter, createWebHistory } from 'vue-router'
import RatingForm from '../components/RatingForm.vue'

const routes = [
  {
    path: '/',
    name: 'RatingForm',
    component: RatingForm
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router