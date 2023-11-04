// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/Login.vue"),
  },
  {
    path: "/home",
    component: () => import("@/components/Navbar.vue"),
    children: [
      {
        path: "/employees",
        name: "employees",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/employees.vue"),
      },
      {
        path: "/holiday",
        name: "Holidays",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Holidays.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
