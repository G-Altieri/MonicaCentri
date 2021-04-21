<template>
  <div>
    <navbar></navbar>
    <menuOverlay></menuOverlay>
    <modal></modal>

    <div id="webSite" class="duration-700" :class="{ filter: getStatusMenu, 'Tscale-110' : getStatusMenu }">
      <Nuxt />
    </div>

    <!-- <myfooter></myfooter> -->
  </div>
</template>

<script>
import menuOverlay from "@/components/menuOverlay.vue";
import navbar from "@/components/navbar.vue";
//import modal from "@/components/modal.vue";
import myfooter from "@/components/footer.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  head() {
    return {
      bodyAttrs: {
        class: this.getStatusMenu
          ? "scrollbar overflow-hidden" //overflow-y-scroll fixed w-full lasciano la barra
          : "scrollbar",                               //overflow-hidden rimuovolo la barra
      },
    };
  },
  computed: {
    ...mapGetters(["getStatusMenu"]),
  },
  methods: {},
  components: {
    navbar,
    menuOverlay,
    //  modal,
    myfooter,
  },
};
</script>



<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
