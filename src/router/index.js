import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/jobs',
      children: [
        {
          path: '',
          name: 'jobs',
          component: () => import('@/views/JobsView.vue'),
        },
        {
          path: 'add',
          name: 'add-job',
          component: () => import('@/views/AddJobView.vue'),
        },
        {
          path: 'edit/:id',
          name: 'edit-job',
          component: () => import('@/views/EditJobView.vue'),
        },
        {
          path: ':id',
          name: 'job-page',
          component: () => import('@/views/JobView.vue'),
        },
      ]
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
    },
  ]
});

export default router;