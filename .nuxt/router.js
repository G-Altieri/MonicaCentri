import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2a57c35e = () => interopDefault(import('..\\pages\\biolifting.vue' /* webpackChunkName: "pages/biolifting" */))
const _fde94cbc = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _e0301840 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _606eb5c0 = () => interopDefault(import('..\\pages\\forgotPassword.vue' /* webpackChunkName: "pages/forgotPassword" */))
const _1f6ee559 = () => interopDefault(import('..\\pages\\laser.vue' /* webpackChunkName: "pages/laser" */))
const _4a069430 = () => interopDefault(import('..\\pages\\lingue.vue' /* webpackChunkName: "pages/lingue" */))
const _598f96f7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2574506c = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
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
    path: "/biolifting",
    component: _2a57c35e,
    name: "biolifting___it"
  }, {
    path: "/dashboard",
    component: _fde94cbc,
    name: "dashboard___it"
  }, {
    path: "/en",
    component: _e0301840,
    name: "index___en"
  }, {
    path: "/es",
    component: _e0301840,
    name: "index___es"
  }, {
    path: "/forgotPassword",
    component: _606eb5c0,
    name: "forgotPassword___it"
  }, {
    path: "/laser",
    component: _1f6ee559,
    name: "laser___it"
  }, {
    path: "/lingue",
    component: _4a069430,
    name: "lingue___it"
  }, {
    path: "/login",
    component: _598f96f7,
    name: "login___it"
  }, {
    path: "/logout",
    component: _2574506c,
    name: "logout___it"
  }, {
    path: "/register",
    component: _0b020a85,
    name: "register___it"
  }, {
    path: "/test",
    component: _be82f418,
    name: "test___it"
  }, {
    path: "/en/biolifting",
    component: _2a57c35e,
    name: "biolifting___en"
  }, {
    path: "/en/dashboard",
    component: _fde94cbc,
    name: "dashboard___en"
  }, {
    path: "/en/forgotPassword",
    component: _606eb5c0,
    name: "forgotPassword___en"
  }, {
    path: "/en/laser",
    component: _1f6ee559,
    name: "laser___en"
  }, {
    path: "/en/lingue",
    component: _4a069430,
    name: "lingue___en"
  }, {
    path: "/en/login",
    component: _598f96f7,
    name: "login___en"
  }, {
    path: "/en/logout",
    component: _2574506c,
    name: "logout___en"
  }, {
    path: "/en/register",
    component: _0b020a85,
    name: "register___en"
  }, {
    path: "/en/test",
    component: _be82f418,
    name: "test___en"
  }, {
    path: "/es/biolifting",
    component: _2a57c35e,
    name: "biolifting___es"
  }, {
    path: "/es/dashboard",
    component: _fde94cbc,
    name: "dashboard___es"
  }, {
    path: "/es/forgotPassword",
    component: _606eb5c0,
    name: "forgotPassword___es"
  }, {
    path: "/es/laser",
    component: _1f6ee559,
    name: "laser___es"
  }, {
    path: "/es/lingue",
    component: _4a069430,
    name: "lingue___es"
  }, {
    path: "/es/login",
    component: _598f96f7,
    name: "login___es"
  }, {
    path: "/es/logout",
    component: _2574506c,
    name: "logout___es"
  }, {
    path: "/es/register",
    component: _0b020a85,
    name: "register___es"
  }, {
    path: "/es/test",
    component: _be82f418,
    name: "test___es"
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
