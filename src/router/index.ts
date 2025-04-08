import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const routes = [
  { path: "/login", component: () => import("../pages/login.vue") },
  { path: "/", component: () => import("../pages/home.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.loadSession();
  // 未登录跳转到登录页面
  if (to.path !== "/login" && !authStore.session.access_token) {
    return next("/login");
  }
  // 已登录跳转到首页
  if (to.path === "/login" && authStore.session.access_token) {
    console.log("登录页面", to.path);
    return next("/");
  }
  // 其他情况正常跳转
  next();
});

export default router;
