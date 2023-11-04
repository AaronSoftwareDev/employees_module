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
        path: "/adminattendance",
        name: "AttendanceAdmin",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AttendanceAdmin.vue"),
      },
      
      {
        path: "/attendanceEmployee",
        name: "AttendanceEmployee",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/AttendanceEmployee.vue"),
      },
      {
        path: "/departments",
        name: "Departments",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Departments.vue"),
      },
      {
        path: "/adminleave",
        name: "LeaveDaysAdmin",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/LeaveDaysAdmin.vue"),
      },
      {
        path: "/employeeleave",
        name: "LeaveDaysEmployees",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/LeaveDaysEmployees.vue"),
      },
      {
        path: "/schedule",
        name: "Schedule",

        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Schedule.vue"),
      },
    
     
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
