import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2da87d57 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _85a12260 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _1565495e = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
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
    path: "/en",
    component: _2da87d57,
    name: "index___en"
  }, {
    path: "/es",
    component: _2da87d57,
    name: "index___es"
  }, {
    path: "/laser",
    component: _85a12260,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _1565495e,
    name: "lingue___it"
  }, {
    path: "/test",
    component: _82c91cc6,
    name: "test___it"
  }, {
    path: "/en/laser",
    component: _85a12260,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _1565495e,
    name: "lingue___en"
  }, {
    path: "/en/test",
    component: _82c91cc6,
    name: "test___en"
  }, {
    path: "/es/laser",
    component: _85a12260,
    name: "laser___es"
  }, {
    path: "/es/lingue",
    component: _1565495e,
    name: "lingue___es"
  }, {
    path: "/es/test",
    component: _82c91cc6,
    name: "test___es"
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
