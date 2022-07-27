import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/views/home/index.js'

// 解决，连续跳转到相同的路由，报错的问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

// 这里面的路由，无需登录，也可以查看
const whiteList = [];

const routes = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
  },
  {
    path: "/",
    redirect: '/home',
    component: () => import("@/pages/adminLayout/index.vue"),
    children: [
      {
        path: "home",
        component: Home,
      },
      {
        path: "user",
        component: () => import("@/views/user/index.vue"),
      },
      {
        path: "role",
        component: () => import("@/views/role/index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

// 路由导航守卫（前置）
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (token) {
    if (to.path === "/login") {
      // 已经登陆了，还要去登录页（不给，重定向到首页）
      next({ path: "/home" });
    } else {
      // 登陆了，不去登录页（直接放行）
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) {
      if (to.path !== "/login") {
        // 没有登陆的，不在白名单，也不去登录页（强制跳转登录页）
        next({ path: "/login" });
      } else {
        // 没有登陆的，不在白名单，去登录页（直接放行）
        next();
      }
    } else {
      // 没有登陆的，在白名单中（直接放行）
      next();
    }
  }
});

export default router;
