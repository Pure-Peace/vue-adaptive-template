export default [
  {
    path: '/',
    name: 'Home',
    title: '主页',
    icon: 'home',
    show: true,
    component: () => import(/* webpackChunkName: "home-group" */ '../views/Home.vue')
  },
  {
    path: '/ranking',
    name: 'Ranking',
    title: '排行',
    icon: 'trophy',
    show: true,
    component: () => import(/* webpackChunkName: "home-group" */ '../views/Ranking.vue')
  },
  {
    path: '/introduce',
    name: 'Introduce',
    title: '介绍',
    show: false,
    component: () => import(/* webpackChunkName: "introduce-group" */ '../views/Introduce.vue')
  },
  {
    path: '/switcher',
    name: 'Switcher',
    title: '切换器',
    show: false,
    component: () => import(/* webpackChunkName: "introduce-group" */ '../views/Switcher.vue')
  },
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    show: false,
    component: () => import(/* webpackChunkName: "login-group" */ '../views/Login.vue')
  },
  {
    path: '/404',
    name: 'page not found',
    title: '页面未找到',
    show: false,
    component: () => import('../views/404.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
