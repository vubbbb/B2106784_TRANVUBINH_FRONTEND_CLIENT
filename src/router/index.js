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
      meta: { requiresAuth: true },
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
        },
        {
          path: 'order/:id',
          name: 'order',
          component: () => import('../components/BookOrderPage.vue'),
        }
      ]
    }

  ]
});

router.beforeEach((to, from, next) => {
  // Kiểm tra xem route hiện tại có yêu cầu đăng nhập hay không
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Kiểm tra xem người dùng đã đăng nhập hay chưa
    if (!localStorage.getItem('token')) {
      // Nếu người dùng chưa đăng nhập, chuyển hướng họ đến trang đăng nhập
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    } else {
      next(); // cho phép người dùng tiếp tục truy cập route
    }
  } else {
    next(); // cho phép người dùng tiếp tục truy cập route
  }
});

export default router