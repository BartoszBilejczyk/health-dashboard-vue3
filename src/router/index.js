import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
        import(/* webpackChunkName: 'dashboard' */ '../views/Dashboard.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => '/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
