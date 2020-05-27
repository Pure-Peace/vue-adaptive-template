import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './pages'
import NProgress from '../plugins/nprogress'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log(to.name)
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
