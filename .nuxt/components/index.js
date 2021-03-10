export { default as Navbar } from '../..\\components\\navbar.vue'

export const LazyNavbar = import('../..\\components\\navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
