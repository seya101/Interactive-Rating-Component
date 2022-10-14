import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Submit from '../views/SubmitForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SubmitForm',
    name: 'SubmitForm',
    component: Submit
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router