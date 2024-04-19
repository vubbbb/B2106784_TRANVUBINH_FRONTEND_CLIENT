import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/MainLayout.vue'),
      children: [
        {
            path: 'books',
            name: 'books',
            component: () => import('../components/BooksList.vue'),
        },
        {
            path: 'dashboard',
            name: 'dashboard',
            component: () => import('../components/HomeSlider.vue'),
        },
        {
            path: 'user',
            name: 'user',
            component: () => import('../components/UserInfo.vue'),
        },
        {
          path: 'order',
          name: 'order',
          component: () => import('../components/Order.vue'),
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('../components/SearchPage.vue'),
        }
      ]
    }

  ]
})

export default router