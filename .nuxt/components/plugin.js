import Vue from 'vue'

const components = {
  BoxHome: () => import('../..\\components\\boxHome.vue' /* webpackChunkName: "components/box-home" */).then(c => c.default || c),
  MenuOverlay: () => import('../..\\components\\menuOverlay.vue' /* webpackChunkName: "components/menu-overlay" */).then(c => c.default || c),
  Navbar: () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
