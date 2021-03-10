export { default as MenuOverlay } from '../..\\components\\menuOverlay.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'

export const LazyMenuOverlay = import('../..\\components\\menuOverlay.vue' /* webpackChunkName: "components/menu-overlay" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
