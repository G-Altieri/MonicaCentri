import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7811e73a = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _602760ce = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2da87d57 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _165be229 = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _85a12260 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _1565495e = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _115fbf24 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3fc4f5d5 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _40ce8196 = () => interopDefault(import('..\\pages\\mai+xl.vue' /* webpackChunkName: "pages/mai+xl" */))
const _b5eb79ce = () => interopDefault(import('..\\pages\\puliziaevo.vue' /* webpackChunkName: "pages/puliziaevo" */))
const _58820ca4 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _82c91cc6 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/biolifting",
    component: _7811e73a,
    name: "biolifting___it"
  }, {
    path: "/dashboard",
    component: _602760ce,
    name: "dashboard___it"
  }, {
    path: "/en",
    component: _2da87d57,
    name: "index___en"
  }, {
    path: "/forgotPassword",
    component: _165be229,
    name: "forgotPassword___it"
  }, {
    path: "/laser",
    component: _85a12260,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _1565495e,
    name: "lingue___it"
  }, {
    path: "/login",
    component: _115fbf24,
    name: "login___it"
  }, {
    path: "/logout",
    component: _3fc4f5d5,
    name: "logout___it"
  }, {
    path: "/mai+xl",
    component: _40ce8196,
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _b5eb79ce,
    name: "puliziaevo___it"
  }, {
    path: "/register",
    component: _58820ca4,
    name: "register___it"
  }, {
    path: "/test",
    component: _82c91cc6,
    name: "test___it"
  }, {
    path: "/en/biolifting",
    component: _7811e73a,
    name: "biolifting___en"
  }, {
    path: "/en/dashboard",
    component: _602760ce,
    name: "dashboard___en"
  }, {
    path: "/en/forgotPassword",
    component: _165be229,
    name: "forgotPassword___en"
  }, {
    path: "/en/laser",
    component: _85a12260,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _1565495e,
    name: "lingue___en"
  }, {
    path: "/en/login",
    component: _115fbf24,
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _3fc4f5d5,
    name: "logout___en"
  }, {
    path: "/en/mai+xl",
    component: _40ce8196,
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _b5eb79ce,
    name: "puliziaevo___en"
  }, {
    path: "/en/register",
    component: _58820ca4,
    name: "register___en"
  }, {
    path: "/en/test",
    component: _82c91cc6,
    name: "test___en"
  }, {
    path: "/",
    component: _2da87d57,
    name: "index___it"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
