import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () =>
        import(/* webpackChunkName: 'dashboard' */ '../views/Dashboard.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (routes.some(route => route.path === to.path)) {
    next();
  } else {
    next({ path: '/dashboard' })
  }
})

export default router;
