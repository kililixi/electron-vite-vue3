import { createRouter, createWebHistory } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/Home.vue'),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'dashboard', affix: true },
      },
      {
        path: 'print',
        component: () => import('@/views/print.vue'),
        name: 'Print',
        meta: { title: '打印', icon: 'dashboard', affix: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
})

export default router
