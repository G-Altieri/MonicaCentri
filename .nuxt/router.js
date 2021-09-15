import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _63473f66 = () => interopDefault(import('..\\pages\\admin-lp.vue' /* webpackChunkName: "pages/admin-lp" */))
const _7811e73a = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _0278391b = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages/card" */))
const _602760ce = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2da87d57 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _165be229 = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _85a12260 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _1565495e = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _115fbf24 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3fc4f5d5 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _91d09b62 = () => interopDefault(import('..\\pages\\lp.vue' /* webpackChunkName: "pages/lp" */))
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
    path: "/admin-lp",
    component: _63473f66,
    meta: {},
    alias: ["/amp/admin-lp"],
    name: "admin-lp___it"
  }, {
    path: "/biolifting",
    component: _7811e73a,
    meta: {},
    alias: ["/amp/biolifting"],
    name: "biolifting___it"
  }, {
    path: "/card",
    component: _0278391b,
    meta: {},
    alias: ["/amp/card"],
    name: "card___it"
  }, {
    path: "/dashboard",
    component: _602760ce,
    meta: {},
    alias: ["/amp/dashboard"],
    name: "dashboard___it"
  }, {
    path: "/en",
    component: _2da87d57,
    meta: {},
    alias: ["/amp/en"],
    name: "index___en"
  }, {
    path: "/forgotPassword",
    component: _165be229,
    meta: {},
    alias: ["/amp/forgotPassword"],
    name: "forgotPassword___it"
  }, {
    path: "/laser",
    component: _85a12260,
    meta: {},
    alias: ["/amp/laser"],
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _1565495e,
    meta: {},
    alias: ["/amp/lingue"],
    name: "lingue___it"
  }, {
    path: "/login",
    component: _115fbf24,
    meta: {},
    alias: ["/amp/login"],
    name: "login___it"
  }, {
    path: "/logout",
    component: _3fc4f5d5,
    meta: {},
    alias: ["/amp/logout"],
    name: "logout___it"
  }, {
    path: "/lp",
    component: _91d09b62,
    meta: {},
    alias: ["/amp/lp"],
    name: "lp___it"
  }, {
    path: "/mai+xl",
    component: _40ce8196,
    meta: {},
    alias: ["/amp/mai+xl"],
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _b5eb79ce,
    meta: {},
    alias: ["/amp/puliziaevo"],
    name: "puliziaevo___it"
  }, {
    path: "/register",
    component: _58820ca4,
    meta: {},
    alias: ["/amp/register"],
    name: "register___it"
  }, {
    path: "/test",
    component: _82c91cc6,
    meta: {},
    alias: ["/amp/test"],
    name: "test___it"
  }, {
    path: "/en/admin-lp",
    component: _63473f66,
    meta: {},
    alias: ["/amp/en/admin-lp"],
    name: "admin-lp___en"
  }, {
    path: "/en/biolifting",
    component: _7811e73a,
    meta: {},
    alias: ["/amp/en/biolifting"],
    name: "biolifting___en"
  }, {
    path: "/en/card",
    component: _0278391b,
    meta: {},
    alias: ["/amp/en/card"],
    name: "card___en"
  }, {
    path: "/en/dashboard",
    component: _602760ce,
    meta: {},
    alias: ["/amp/en/dashboard"],
    name: "dashboard___en"
  }, {
    path: "/en/forgotPassword",
    component: _165be229,
    meta: {},
    alias: ["/amp/en/forgotPassword"],
    name: "forgotPassword___en"
  }, {
    path: "/en/laser",
    component: _85a12260,
    meta: {},
    alias: ["/amp/en/laser"],
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _1565495e,
    meta: {},
    alias: ["/amp/en/lingue"],
    name: "lingue___en"
  }, {
    path: "/en/login",
    component: _115fbf24,
    meta: {},
    alias: ["/amp/en/login"],
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _3fc4f5d5,
    meta: {},
    alias: ["/amp/en/logout"],
    name: "logout___en"
  }, {
    path: "/en/lp",
    component: _91d09b62,
    meta: {},
    alias: ["/amp/en/lp"],
    name: "lp___en"
  }, {
    path: "/en/mai+xl",
    component: _40ce8196,
    meta: {},
    alias: ["/amp/en/mai+xl"],
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _b5eb79ce,
    meta: {},
    alias: ["/amp/en/puliziaevo"],
    name: "puliziaevo___en"
  }, {
    path: "/en/register",
    component: _58820ca4,
    meta: {},
    alias: ["/amp/en/register"],
    name: "register___en"
  }, {
    path: "/en/test",
    component: _82c91cc6,
    meta: {},
    alias: ["/amp/en/test"],
    name: "test___en"
  }, {
    path: "/",
    component: _2da87d57,
    meta: {},
    alias: ["/amp/"],
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
