<template>
  <div class="container">
    <div>
      <h1 class="title">MonicaCentri</h1>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Nuxt-Link :to="localePath('/')"><h1>Home</h1></Nuxt-Link>
      <client-only>
        {{ result }}
      </client-only>

      <div>
        <button @click="animeEl">Click me</button>
        <p class="p1">Nuxt Animejs Module</p>
      </div>
      <!-- <div class="testbg" width="100px">{{ ip2 }}</div> -->

      <br /><br /><br /><br /><br /><br />
      {{ getStatusMenu }}

      <br /><br /><br />
      <button @click="storeTest()">Click me Store</button>

      <br /><br /><br /><br />



        <div
          class="opacity-1 dropdown-menu  absolute transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
        >
          <div
            class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1"
            id="headlessui-menu-items-117"
            role="menu"
          >

          <div v-if="!$auth.loggedIn">
           <Nuxt-Link :to="localePath('/newLogin')">
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Accedi</p>
            </div>
              </Nuxt-Link>
          </div>
          <div v-else>
             <div class="px-4 py-3">
              <p class="text-sm leading-5">Ciao {{$auth.user.name}}</p>
            </div>
          </div>


            <div class="py-1">

               <Nuxt-Link :to="localePath('/register')"
                v-if="!$auth.loggedIn"
                href="javascript:void(0)"
                tabindex="0"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
                >Registrati</Nuxt-Link>

               <Nuxt-Link :to="localePath('/dashboard')"
                v-if="$auth.loggedIn"
                href="javascript:void(0)"
                tabindex="0"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
                >Dashboard</Nuxt-Link>


                <Nuxt-Link :to="localePath('/')"
                href="javascript:void(0)"
                tabindex="1"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
                >Contattaci</Nuxt-Link>


              <!-- <span
                role="menuitem"
                tabindex="-1"
                class="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
                aria-disabled="true"
                >New feature (soon)</span> -->
              
              <!-- <a
                href="javascript:void(0)"
                tabindex="2"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
                >Contatti</a> -->
              
            </div>
            <div class="py-1">
              <Nuxt-Link :to="localePath('/logout')"
                v-if="$auth.loggedIn"
                href="javascript:void(0)"
                tabindex="3"
                class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
                role="menuitem"
                >Logout </Nuxt-Link>
              
            </div>
          </div>
        </div>
   



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
