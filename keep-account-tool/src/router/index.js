import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // 访问 /
    redirect: '/login', // 重定向到 /login ？ /login在哪呢？没有
    // component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/record',
        component: () => import("@/views/Record/index.vue")
      },
      {
        path: '/mine',
        component: () => import("@/views/Mine/index.vue")
      }
    ]
  },
  {
    path: '/form/income',
    component: () => import('@/views/form/Income/index.vue')
  },
  {
    path: '/form/outlay',
    component: () => import('@/views/form/Outlay/index.vue')
  },
  {
    path: '/form/Consumer',
    component: () => import('@/views/form/Consumer/index.vue')
  },
]

const router = new VueRouter({
  routes
});


router.beforeEach((to, from, next) => {
  console.log(from.path, to.path)
  next();
})

export default router
