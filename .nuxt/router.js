import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _49c11e46 = () => interopDefault(import('..\\pages\\admin-lp.vue' /* webpackChunkName: "pages/admin-lp" */))
const _605313ca = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _680bdcaa = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages/card" */))
const _3675f1a6 = () => interopDefault(import('..\\pages\\documents.vue' /* webpackChunkName: "pages/documents" */))
const _d73c9272 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2f6b6cb6 = () => interopDefault(import('..\\pages\\landing\\index.vue' /* webpackChunkName: "pages/landing/index" */))
const _23e8a840 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _65bb4fe1 = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _15566edf = () => interopDefault(import('..\\pages\\lp.vue' /* webpackChunkName: "pages/lp" */))
const _5006b3c5 = () => interopDefault(import('..\\pages\\mai+xl.vue' /* webpackChunkName: "pages/mai+xl" */))
const _e56920ae = () => interopDefault(import('..\\pages\\puliziaevo.vue' /* webpackChunkName: "pages/puliziaevo" */))
const _1dfad8fc = () => interopDefault(import('..\\pages\\qr.vue' /* webpackChunkName: "pages/qr" */))
const _efc56ba6 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))

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
    component: _49c11e46,
    name: "admin-lp___it"
  }, {
    path: "/biolifting",
    component: _605313ca,
    name: "biolifting___it"
  }, {
    path: "/card",
    component: _680bdcaa,
    name: "card___it"
  }, {
    path: "/documents",
    component: _3675f1a6,
    name: "documents___it"
  }, {
    path: "/en",
    component: _d73c9272,
    name: "index___en"
  }, {
    path: "/landing",
    component: _2f6b6cb6,
    name: "landing___it"
  }, {
    path: "/laser",
    component: _23e8a840,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _65bb4fe1,
    name: "lingue___it"
  }, {
    path: "/lp",
    component: _15566edf,
    name: "lp___it"
  }, {
    path: "/mai%2Bxl",
    component: _5006b3c5,
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _e56920ae,
    name: "puliziaevo___it"
  }, {
    path: "/qr",
    component: _1dfad8fc,
    name: "qr___it"
  }, {
    path: "/test",
    component: _efc56ba6,
    name: "test___it"
  }, {
    path: "/en/admin-lp",
    component: _49c11e46,
    name: "admin-lp___en"
  }, {
    path: "/en/biolifting",
    component: _605313ca,
    name: "biolifting___en"
  }, {
    path: "/en/card",
    component: _680bdcaa,
    name: "card___en"
  }, {
    path: "/en/documents",
    component: _3675f1a6,
    name: "documents___en"
  }, {
    path: "/en/landing",
    component: _2f6b6cb6,
    name: "landing___en"
  }, {
    path: "/en/laser",
    component: _23e8a840,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _65bb4fe1,
    name: "lingue___en"
  }, {
    path: "/en/lp",
    component: _15566edf,
    name: "lp___en"
  }, {
    path: "/en/mai%2Bxl",
    component: _5006b3c5,
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _e56920ae,
    name: "puliziaevo___en"
  }, {
    path: "/en/qr",
    component: _1dfad8fc,
    name: "qr___en"
  }, {
    path: "/en/test",
    component: _efc56ba6,
    name: "test___en"
  }, {
    path: "/",
    component: _d73c9272,
    name: "index___it"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
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
