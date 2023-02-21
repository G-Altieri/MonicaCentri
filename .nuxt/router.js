import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2b80598a = () => interopDefault(import('..\\pages\\admin-lp.vue' /* webpackChunkName: "pages/admin-lp" */))
const _28e456a8 = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _c01359ee = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages/card" */))
const _8c9e1ee2 = () => interopDefault(import('..\\pages\\documents.vue' /* webpackChunkName: "pages/documents" */))
const _3feda129 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1477ded8 = () => interopDefault(import('..\\pages\\landing\\index.vue' /* webpackChunkName: "pages/landing/index" */))
const _6116dabc = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _2bacb1bf = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _d8e12086 = () => interopDefault(import('..\\pages\\lp.vue' /* webpackChunkName: "pages/lp" */))
const _15f815a3 = () => interopDefault(import('..\\pages\\mai+xl.vue' /* webpackChunkName: "pages/mai+xl" */))
const _55dcb287 = () => interopDefault(import('..\\pages\\puliziaevo.vue' /* webpackChunkName: "pages/puliziaevo" */))
const _c7984c4c = () => interopDefault(import('..\\pages\\qr.vue' /* webpackChunkName: "pages/qr" */))
const _5c198b8b = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))

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
    component: _2b80598a,
    name: "admin-lp___it"
  }, {
    path: "/biolifting",
    component: _28e456a8,
    name: "biolifting___it"
  }, {
    path: "/card",
    component: _c01359ee,
    name: "card___it"
  }, {
    path: "/documents",
    component: _8c9e1ee2,
    name: "documents___it"
  }, {
    path: "/en",
    component: _3feda129,
    name: "index___en"
  }, {
    path: "/landing",
    component: _1477ded8,
    name: "landing___it"
  }, {
    path: "/laser",
    component: _6116dabc,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _2bacb1bf,
    name: "lingue___it"
  }, {
    path: "/lp",
    component: _d8e12086,
    name: "lp___it"
  }, {
    path: "/mai%2Bxl",
    component: _15f815a3,
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _55dcb287,
    name: "puliziaevo___it"
  }, {
    path: "/qr",
    component: _c7984c4c,
    name: "qr___it"
  }, {
    path: "/test",
    component: _5c198b8b,
    name: "test___it"
  }, {
    path: "/en/admin-lp",
    component: _2b80598a,
    name: "admin-lp___en"
  }, {
    path: "/en/biolifting",
    component: _28e456a8,
    name: "biolifting___en"
  }, {
    path: "/en/card",
    component: _c01359ee,
    name: "card___en"
  }, {
    path: "/en/documents",
    component: _8c9e1ee2,
    name: "documents___en"
  }, {
    path: "/en/landing",
    component: _1477ded8,
    name: "landing___en"
  }, {
    path: "/en/laser",
    component: _6116dabc,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _2bacb1bf,
    name: "lingue___en"
  }, {
    path: "/en/lp",
    component: _d8e12086,
    name: "lp___en"
  }, {
    path: "/en/mai%2Bxl",
    component: _15f815a3,
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _55dcb287,
    name: "puliziaevo___en"
  }, {
    path: "/en/qr",
    component: _c7984c4c,
    name: "qr___en"
  }, {
    path: "/en/test",
    component: _5c198b8b,
    name: "test___en"
  }, {
    path: "/",
    component: _3feda129,
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
