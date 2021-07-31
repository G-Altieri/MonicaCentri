import Vue from 'vue'

const components = {
  BoxHome: () => import('../..\\components\\boxHome.vue' /* webpackChunkName: "components/box-home" */).then(c => c.default || c),
  ClientReview: () => import('../..\\components\\clientReview.vue' /* webpackChunkName: "components/client-review" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  Gbutton: () => import('../..\\components\\gbutton.vue' /* webpackChunkName: "components/gbutton" */).then(c => c.default || c),
  Ginput: () => import('../..\\components\\ginput.vue' /* webpackChunkName: "components/ginput" */).then(c => c.default || c),
  InputLabel: () => import('../..\\components\\inputLabel.vue' /* webpackChunkName: "components/input-label" */).then(c => c.default || c),
  MenuOverlay: () => import('../..\\components\\menuOverlay.vue' /* webpackChunkName: "components/menu-overlay" */).then(c => c.default || c),
  Modal: () => import('../..\\components\\modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c),
  Navbar: () => import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c),
  NavbarBuy: () => import('../..\\components\\navbarBuy.vue' /* webpackChunkName: "components/navbar-buy" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
