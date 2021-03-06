import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _059f7124 = () => interopDefault(import('..\\pages\\admin-lp.vue' /* webpackChunkName: "pages/admin-lp" */))
const _2a57c35e = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _36c9651c = () => interopDefault(import('..\\pages\\card.vue' /* webpackChunkName: "pages/card" */))
const _e0301840 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1f6ee559 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _4a069430 = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _c25c1f34 = () => interopDefault(import('..\\pages\\lp.vue' /* webpackChunkName: "pages/lp" */))
const _756fcc68 = () => interopDefault(import('..\\pages\\mai+xl.vue' /* webpackChunkName: "pages/mai+xl" */))
const _17cc7a30 = () => interopDefault(import('..\\pages\\puliziaevo.vue' /* webpackChunkName: "pages/puliziaevo" */))
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
    name: "admin-lp___it"
  }, {
    path: "/biolifting",
    component: _2a57c35e,
    name: "biolifting___it"
  }, {
    path: "/card",
    component: _36c9651c,
    name: "card___it"
  }, {
    path: "/en",
    component: _e0301840,
    name: "index___en"
  }, {
    path: "/laser",
    component: _1f6ee559,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _4a069430,
    name: "lingue___it"
  }, {
    path: "/lp",
    component: _c25c1f34,
    name: "lp___it"
  }, {
    path: "/mai+xl",
    component: _756fcc68,
    name: "mai+xl___it"
  }, {
    path: "/puliziaevo",
    component: _17cc7a30,
    name: "puliziaevo___it"
  }, {
    path: "/test",
    component: _be82f418,
    name: "test___it"
  }, {
    path: "/en/admin-lp",
    component: _059f7124,
    name: "admin-lp___en"
  }, {
    path: "/en/biolifting",
    component: _2a57c35e,
    name: "biolifting___en"
  }, {
    path: "/en/card",
    component: _36c9651c,
    name: "card___en"
  }, {
    path: "/en/laser",
    component: _1f6ee559,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _4a069430,
    name: "lingue___en"
  }, {
    path: "/en/lp",
    component: _c25c1f34,
    name: "lp___en"
  }, {
    path: "/en/mai+xl",
    component: _756fcc68,
    name: "mai+xl___en"
  }, {
    path: "/en/puliziaevo",
    component: _17cc7a30,
    name: "puliziaevo___en"
  }, {
    path: "/en/test",
    component: _be82f418,
    name: "test___en"
  }, {
    path: "/",
    component: _e0301840,
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
