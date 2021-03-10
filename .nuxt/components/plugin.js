import Vue from 'vue'

const components = {
  MenuOverlay: () => import('../..\\components\\menuOverlay.vue' /* webpackChunkName: "components/menu-overlay" */).then(c => c.default || c),
  Navbar: () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
