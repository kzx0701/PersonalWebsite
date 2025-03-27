import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/login", component: () => import("../pages/login.vue") },
  { path: "/", component: () => import("../pages/home.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
