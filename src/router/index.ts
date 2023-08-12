import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from "vue-router";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
    meta: {
      title: "Little-Helper首页",
    },
    children: [
      {
        path: "/draft",
        name: "Draft",
        component: () => import("@/views/draft/index.vue"),
        meta: {
          title: "草稿箱",
        },
      },
    ],
  },
];

const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE),
  routes,
});
export default router;
