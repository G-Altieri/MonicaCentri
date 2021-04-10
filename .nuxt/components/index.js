export { default as BoxHome } from '../..\\components\\boxHome.vue'
export { default as ClientReview } from '../..\\components\\clientReview.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as InputLabel } from '../..\\components\\inputLabel.vue'
export { default as MenuOverlay } from '../..\\components\\menuOverlay.vue'
export { default as Modal } from '../..\\components\\modal.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'

export const LazyBoxHome = import('../..\\components\\boxHome.vue' /* webpackChunkName: "components/box-home" */).then(c => c.default || c)
export const LazyClientReview = import('../..\\components\\clientReview.vue' /* webpackChunkName: "components/client-review" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyInputLabel = import('../..\\components\\inputLabel.vue' /* webpackChunkName: "components/input-label" */).then(c => c.default || c)
export const LazyMenuOverlay = import('../..\\components\\menuOverlay.vue' /* webpackChunkName: "components/menu-overlay" */).then(c => c.default || c)
export const LazyModal = import('../..\\components\\modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c)
export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
