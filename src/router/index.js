import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const routes = [
  {
    path: "/login",
    name: "登录",
    component: () => import("../views/login"),
  },
  {
    path: "/",
    component: () => import("../views/layout"),
    children: [
      {
        path: "/",
        component: () => import("../views/index"),
      },
      {
        path: "/about",
        component: () => import("../views/about"),
        children: [
          {
            path: "/about",
            component: () => import("../views/about/about"),
          },
          {
            path: "/about/concat",
            component: () => import("../views/about/concat"),
          },
          {
            path: "/about/promise",
            component: () => import("../views/about/promise"),
          },
          {
            path: "/about/privacy",
            component: () => import("../views/about/privacy"),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    name: "error",
    component: () => import("../views/404"),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
