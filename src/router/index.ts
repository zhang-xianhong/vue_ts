import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Index.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/about/Index.vue')
  },
  {
    path: '/todo',
    component: () => import('@/views/todoExample/Index.vue')
  },
  {
    path: '/users',
    component: () => import('@/views/users/Index.vue')
  },
  {
    path: '/article',
    component: () => import('@/views/article/Index.vue')
  }
];
const router: Router = createRouter({
  routes,
  // history: createWebHistory(process.env.BASE_URL)
  history: createWebHistory()
});

export default router;
