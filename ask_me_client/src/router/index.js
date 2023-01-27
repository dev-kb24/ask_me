import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/plateforme/HomeView.vue'
import AuthView from '../views/plateforme/AuthView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: AuthView
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token');
//   if ((!token || token === null)) {
//     console.log(token);
//     next('/login');
//   }
// });

export default router
