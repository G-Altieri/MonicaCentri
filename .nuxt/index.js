import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_0d2f12d1 from 'nuxt_plugin_plugin_0d2f12d1' // Source: .\\components\\plugin.js (mode: 'all')
import nuxt_plugin_googlegtag_19040023 from 'nuxt_plugin_googlegtag_19040023' // Source: .\\google-gtag.js (mode: 'client')
import nuxt_plugin_pluginrouting_5623c345 from 'nuxt_plugin_pluginrouting_5623c345' // Source: .\\nuxt-i18n\\plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_3f24764a from 'nuxt_plugin_pluginmain_3f24764a' // Source: .\\nuxt-i18n\\plugin.main.js (mode: 'all')
import nuxt_plugin_axios_05d77874 from 'nuxt_plugin_axios_05d77874' // Source: .\\axios.js (mode: 'all')
import nuxt_plugin_animejsModule_9a1bd8fe from 'nuxt_plugin_animejsModule_9a1bd8fe' // Source: .\\animejsModule.js (mode: 'all')
import nuxt_plugin_vueMq_3319afd8 from 'nuxt_plugin_vueMq_3319afd8' // Source: ..\\plugins\\vueMq (mode: 'all')
import nuxt_plugin_vueslickcarousel_1c6345a5 from 'nuxt_plugin_vueslickcarousel_1c6345a5' // Source: ..\\plugins\\vue-slick-carousel.js (mode: 'all')
import nuxt_plugin_auth_5ec1523c from 'nuxt_plugin_auth_5ec1523c' // Source: .\\auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","css":false,"beforeEnter":function(el) {
      this.$anime.set(el, {
        opacity: 0 });
    },"enter":function(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done });
    },"leave":function(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done });
    },"appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Monica Centri","htmlAttrs":{"lang":"it"},"script":[{"src":"~\u002Fplugins\u002FgoogleTagManager.js"},{"src":"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=G-V34VSD554J","async":true}],"meta":[{"charset":"utf-8"},{"name":"facebook-domain-verification","content":"hvp0juxvk628ysiqdpbdu4zku0rd8m"},{"name":"viewport","content":"width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no"},{"name":"keywords","content":"centro, estetico, monica, lentella, vasto, bellezza, beauty, monica centri, centro estetico, crema, laser, epilazione, biolifting, depilazione, mai+xl, pulizia evoluition, monica sciscia,"},{"property":"og:description","content":"Non il solito centro estetico."},{"property":"og:title","content":"Monica Centri"},{"name":"description","content":"Non il solito centro estetico."},{"name":"title","content":"Monica Centri"},{"name":"google-site-verification","content":"q9GpriJR7UqD9iv7GtaJmFxC5wK1k0-kvwDTYWT0Y5c"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.svg"},{"rel":"apple-touch-icon","href":"\u002Flogo.png"},{"rel":"apple-touch-icon","sizes":"76x76","href":"\u002Flogo.png"},{"rel":"apple-touch-icon","sizes":"120x120","href":"\u002Flogo.png"},{"rel":"apple-touch-icon","sizes":"152x152","href":"\u002Flogo.png"},{"rel":"stylesheet"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_0d2f12d1 === 'function') {
    await nuxt_plugin_plugin_0d2f12d1(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_googlegtag_19040023 === 'function') {
    await nuxt_plugin_googlegtag_19040023(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_5623c345 === 'function') {
    await nuxt_plugin_pluginrouting_5623c345(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_3f24764a === 'function') {
    await nuxt_plugin_pluginmain_3f24764a(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_05d77874 === 'function') {
    await nuxt_plugin_axios_05d77874(app.context, inject)
  }

  if (typeof nuxt_plugin_animejsModule_9a1bd8fe === 'function') {
    await nuxt_plugin_animejsModule_9a1bd8fe(app.context, inject)
  }

  if (typeof nuxt_plugin_vueMq_3319afd8 === 'function') {
    await nuxt_plugin_vueMq_3319afd8(app.context, inject)
  }

  if (typeof nuxt_plugin_vueslickcarousel_1c6345a5 === 'function') {
    await nuxt_plugin_vueslickcarousel_1c6345a5(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_5ec1523c === 'function') {
    await nuxt_plugin_auth_5ec1523c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
