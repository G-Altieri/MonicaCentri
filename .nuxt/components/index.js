export { default as BoxHome } from '../..\\components\\boxHome.vue'
export { default as ClientReview } from '../..\\components\\clientReview.vue'
export { default as Footer } from '../..\\components\\footer.vue'
export { default as Gbutton } from '../..\\components\\gbutton.vue'
export { default as Ginput } from '../..\\components\\ginput.vue'
export { default as InputLabel } from '../..\\components\\inputLabel.vue'
export { default as MenuOverlay } from '../..\\components\\menuOverlay.vue'
export { default as Navbar } from '../..\\components\\navbar.vue'
export { default as NavbarBuy } from '../..\\components\\navbarBuy.vue'
export { default as QrLink } from '../..\\components\\qr-link.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
