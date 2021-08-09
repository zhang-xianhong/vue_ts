import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router';
import Layout from '@/components/layout/Index.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    // component: () => import('@/views/home/Index.vue')
    component: Layout
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
    path: '/user-management',
    component: Layout,
    name: 'UserManagement',
    meta: {
      title: '用户--管理',
      showBackButton: true,
      activeMenu: '/user-management'
    },
    children: [
      {
        path: '/users-apply',
        component: () => import('@/views/users/Index.vue'),
        // component: function() { return Promise.resolve().then(function() { return require('@/views/users/Index.vue'); }); },
        name: 'UserApply',
        meta: {
          title: '用户申请',
          showBackButton: true,
          activeMenu: 'users'
        }
      },
      {
        path: '/users-review',
        component: () => import('@/views/users/UserReview.vue'),
        name: 'UserReview',
        meta: {
          title: '用户审核',
          showBackButton: true,
          activeMenu: 'users'
        }
      }
    ]
  },
  {
    path: '/article-management',
    component: Layout,
    name: 'ArticleManagement',
    meta: {
      title: '文章--管理',
      showBackButton: true,
      activeMenu: '/users'
    },
    children: [
      {
        path: '/article',
        component: () => import('@/views/article/Index.vue'),
        name: 'Article',
        meta: {
          title: '文章管理',
          showBackButton: true,
          activeMenu: '/users'
        }
      }
    ]
  },
  {
    path: '/status-management',
    component: Layout,
    children: [
      {
        path: '/status-manage',
        component: () => import('@/views/status-management/Index.vue'),
        name: 'StatusManage',
        meta: {
          title: '状态管理',
          showBackButton: true,
          activeMenu: '/'
        }
      }
    ]
  },
  {
    path: '/veriry-email',
    component: () => import('@/components/verify-email/Index.vue')
  }
];
const router: Router = createRouter({
  routes,
  // history: createWebHistory(process.env.BASE_URL)
  history: createWebHistory()
});

export default router;
