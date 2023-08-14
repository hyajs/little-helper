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
        component: () => import("@/views/DraftPhase/index.vue"),
        meta: {
          title: "草稿箱",
        },
      },
      {
        path: "/plan",
        name: "Plan",
        component: () => import("@/views/PlanPhase/index.vue"),
        meta: {
          title: "计划项目",
        },
      },
      {
        path: "/do",
        name: "do",
        component: () => import("@/views/DoPhase/index.vue"),
        meta: {
          title: "行动项目",
        },
      },
      {
        path: "/check",
        name: "Check",
        component: () => import("@/views/CheckPhase/index.vue"),
        meta: {
          title: "检查项目",
        },
      },
      {
        path: "/act",
        name: "Act",
        component: () => import("@/views/ActPhase/index.vue"),
        meta: {
          title: "行动项目",
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
