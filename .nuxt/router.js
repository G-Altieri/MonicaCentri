import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _059f7124 = () => interopDefault(import('..\\pages\\admin-lp.vue' /* webpackChunkName: "pages/admin-lp" */))
const _2a57c35e = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _36c9651c = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages/card" */))
const _fde94cbc = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _e0301840 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _606eb5c0 = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _1f6ee559 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _4a069430 = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _598f96f7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2574506c = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _c25c1f34 = () => interopDefault(import('..\\pages\\lp.vue' /* webpackChunkName: "pages/lp" */))
const _756fcc68 = () => interopDefault(import('..\\pages\\mai+xl.vue' /* webpackChunkName: "pages/mai+xl" */))
const _17cc7a30 = () => interopDefault(import('..\\pages\\puliziaevo.vue' /* webpackChunkName: "pages/puliziaevo" */))
const _0b020a85 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _be82f418 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))

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
    component: _059f7124,
    meta: {},
    alias: ["/amp/admin-lp"],
    name: "admin-lp___it"
  }, {
    path: "/biolifting",
    component: _2a57c35e,
    meta: {},
    alias: ["/amp/biolifting"],
    name: "biolifting___it"
  }, {
    path: "/card",
    component: _36c9651c,
    meta: {},
    alias: ["/amp/card"],
    name: "card___it"
  }, {
    path: "/dashboard",
    component: _fde94cbc,
    meta: {},
    alias: ["/amp/dashboard"],
    name: "dashboard___it"
  }, {
    path: "/en",
    component: _e0301840,
    meta: {},
    alias: ["/amp/en"],
    name: "index___en"
  }, {
    path: "/forgotPassword",
    component: _606eb5c0,
    meta: {},
    alias: ["/amp/forgotPassword"],
    name: "forgotPassword___it"
  }, {
    path: "/laser",
    component: _1f6ee559,
    meta: {},
    alias: ["/amp/laser"],
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _4a069430,
    meta: {},
    alias: ["/amp/lingue"],
    name: "lingue___it"
  }, {
    path: "/login",
    component: _598f96f7,
    meta: {},
    alias: ["/amp/login"],
    name: "login___it"
  }, {
    path: "/logout",
    component: _2574506c,
    meta: {},
    alias: ["/amp/logout"],
    name: "logout___it"
  }, {
    path: "/lp",
    component: _c25c1f34,
    meta: {},
    alias: ["/amp/lp"],
    name: "lp___it"
  }, {
    path: "/mai+xl",
    component: _756fcc68,
    meta: {},
    alias: ["/amp/mai+xl"],
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _17cc7a30,
    meta: {},
    alias: ["/amp/puliziaevo"],
    name: "puliziaevo___it"
  }, {
    path: "/register",
    component: _0b020a85,
    meta: {},
    alias: ["/amp/register"],
    name: "register___it"
  }, {
    path: "/test",
    component: _be82f418,
    meta: {},
    alias: ["/amp/test"],
    name: "test___it"
  }, {
    path: "/en/admin-lp",
    component: _059f7124,
    meta: {},
    alias: ["/amp/en/admin-lp"],
    name: "admin-lp___en"
  }, {
    path: "/en/biolifting",
    component: _2a57c35e,
    meta: {},
    alias: ["/amp/en/biolifting"],
    name: "biolifting___en"
  }, {
    path: "/en/card",
    component: _36c9651c,
    meta: {},
    alias: ["/amp/en/card"],
    name: "card___en"
  }, {
    path: "/en/dashboard",
    component: _fde94cbc,
    meta: {},
    alias: ["/amp/en/dashboard"],
    name: "dashboard___en"
  }, {
    path: "/en/forgotPassword",
    component: _606eb5c0,
    meta: {},
    alias: ["/amp/en/forgotPassword"],
    name: "forgotPassword___en"
  }, {
    path: "/en/laser",
    component: _1f6ee559,
    meta: {},
    alias: ["/amp/en/laser"],
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _4a069430,
    meta: {},
    alias: ["/amp/en/lingue"],
    name: "lingue___en"
  }, {
    path: "/en/login",
    component: _598f96f7,
    meta: {},
    alias: ["/amp/en/login"],
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _2574506c,
    meta: {},
    alias: ["/amp/en/logout"],
    name: "logout___en"
  }, {
    path: "/en/lp",
    component: _c25c1f34,
    meta: {},
    alias: ["/amp/en/lp"],
    name: "lp___en"
  }, {
    path: "/en/mai+xl",
    component: _756fcc68,
    meta: {},
    alias: ["/amp/en/mai+xl"],
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _17cc7a30,
    meta: {},
    alias: ["/amp/en/puliziaevo"],
    name: "puliziaevo___en"
  }, {
    path: "/en/register",
    component: _0b020a85,
    meta: {},
    alias: ["/amp/en/register"],
    name: "register___en"
  }, {
    path: "/en/test",
    component: _be82f418,
    meta: {},
    alias: ["/amp/en/test"],
    name: "test___en"
  }, {
    path: "/",
    component: _e0301840,
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
