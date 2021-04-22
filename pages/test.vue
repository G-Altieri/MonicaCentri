<template>
  <div class="container">
    <div>
      <h1 class="title">MonicaCentri</h1>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Nuxt-Link :to="localePath('/')"><h1>Home</h1></Nuxt-Link>
      <client-only>
        {{ result }}
      </client-only>
<br><br>
      <div>
        <button @click="animeEl">Click me for animation</button>
        <p class="p1">Nuxt Animejs Module</p>
      </div>
      <!-- <div class="testbg" width="100px">{{ ip2 }}</div> -->

      <br /><br /><br /><br /><br /><br />
      {{ getStatusMenu }}

      <br /><br /><br />
      <button @click="storeTest()">Click me Change Store and Blur</button>

      <br /><br /><br /><br />



   
   



    </div>
  </div>
</template>




<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      result: "",
    };
  },
  computed: {
    ...mapGetters(["getStatusMenu"]),
    lang() {
      return this.$store.state.lang;
    },
  },

  created() {},
  methods: {
    storeTest() {
      this.$store.commit("setStatus_menu", !this.getStatusMenu);
    },

    animeEl() {
      this.$anime({
        targets: ".p1",
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
      });
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/*
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1   );
  visibility: visible;
}*/

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}

.testbg {
  background-image: url("~assets/img/home/bg-cosadiconodinoi.svg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-color: #999; */
  width: 100vw;
  height: 50vh;
  position: absolute;
  left: 0;
  top: 1000px;
}
</style>
