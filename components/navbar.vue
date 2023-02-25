<template>
  <div>
    <!-- NAVBAR -->
    <nav class="bg-white fixed py-2 w-full z-50">
      <div class="mx-auto" :class="navPadding">
        <div class="text-white space-x-4 flex">
          <!-- Hamburger Menu -->
          <div class="flex-1 text-left grid">
            <span class="spanClick" @click="activatMenu()">
              <div class="containerHam">
                <svg
                  class="ham hamRotate ham4 justify-self-start"
                  :class="{ active: getStatusMenu }"
                  viewBox="0 0 100 100"
                  id="myHam"
                >
                  <path
                    class="line top"
                    d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
                  />

                  <path class="line middle" d="m 70,50 h -40" />

                  <path
                    class="line bottom"
                    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
                  />
                </svg>
              </div>
            </span>
          </div>
          <!--** Hamburger Menu **-->
          <!-- Logo Center -->
          <nuxt-link :to="localePath('/')">
            <div class="flex-1 text-center grid">
              <img
                class="h-10 w-10 text-center justify-self-center logo-centraln"
                src="~/assets/img/navbar/logo.svg"
                alt="Logo Monica Centri"
                width="100%"
                height="100%"
              />
            </div>
          </nuxt-link>
          <!--** Logo Center **-->
          <!-- Icon Account -->

          <div class="flex-1 grid text-right float-right">
            <nuxt-link
              class="spanClick justify-self-end grid"
            :to="localePath('/landing#formPrenotazione')"
            >
            <!--   @click="activatNewLogin()" -->
              <img
                class="h-10 w-6 justify-self-end cursor-pointer"
                id="navIconAccount"
                :class="{
                  /*'scale-125':Status_dropMenu,'transform':Status_dropMenu*/
                }"
                src="~/assets/img/navbar/enter.svg"
                alt="Logo Monica Centri"
              />
            </nuxt-link>
          </div>
          <!--** Icon Account **-->
        </div>
      </div>
    </nav>
    <!-- **NAVBAR** -->

    <!-- DropMenu -->
    <div
      v-show="Status_dropMenu"
      id="dropmenu"
      class="opacity-1 dropdown-menu fixed transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
    >
      <div
        class="fixed right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
        aria-labelledby="headlessui-menu-button-1"
        id="headlessui-menu-items-117"
        role="menu"
      >
        <div v-if="!$auth.loggedIn">
          <Nuxt-Link :to="localePath('/lp')">
            <div class="px-4 py-3">
              <p class="text-sm leading-5">Accedi</p>
            </div>
          </Nuxt-Link>
        </div>
        <div v-else>
          <div class="px-4 py-3">
            <p class="text-sm leading-5">Ciao {{ $auth.user.name }}</p>
          </div>
        </div>

        <div class="py-1">
          <Nuxt-Link
            :to="localePath('/register')"
            v-if="!$auth.loggedIn"
            href="javascript:void(0)"
            tabindex="0"
            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
            role="menuitem"
            >Registrati</Nuxt-Link
          >

          <Nuxt-Link
            :to="localePath('/dashboard')"
            v-if="$auth.loggedIn"
            href="javascript:void(0)"
            tabindex="0"
            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
            role="menuitem"
            >Dashboard</Nuxt-Link
          >

          <Nuxt-Link
            :to="localePath('/')"
            href="javascript:void(0)"
            tabindex="1"
            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
            role="menuitem"
            >Contattaci</Nuxt-Link
          >

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
          <Nuxt-Link
            :to="localePath('/logout')"
            v-if="$auth.loggedIn"
            href="javascript:void(0)"
            tabindex="3"
            class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
            role="menuitem"
            >Logout
          </Nuxt-Link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";
var t1;
export default {
  data() {
    return {
      statusMenu: false,
      statusModal: false,
      statusDropMenu: false,
    };
  },

  created() {
    //Ricezione evento apertura chiusura menu
    this.$nuxt.$on("StatusMenu", (e) => {
      // console.log("evento "+ e)
      this.statusMenu = e;
    });
    //Ricezione evento apertura chiusura Modal
    this.$nuxt.$on("StatusModal", (e) => {
      // console.log("evento "+e)
      this.statusModal = e;
    });
  },
  computed: {
    ...mapGetters(["getStatusMenu"]),
    navPadding() {
      switch (this.$mq) {
        case "sm":
          return "px-2";
        case "md":
          return "px-4";
        case "lg":
          return "px-10";
      }
    },

    // a computed getter
    Status_menu: function () {
      return this.statusMenu;
    },
    Status_modal: function () {
      return this.statusModal;
    },
    Status_dropMenu: function () {
      return this.statusDropMenu;
    },
  },

  mounted() {
    t1 = this.$anime.timeline({
      easing: "easeInOutCubic", //https://easings.net/it
      duration: 500,
      autoplay: false,
      complete: () => {

      },
    });
    //aniamzione del dropmenu
    t1.add(
      {
        targets: "#dropmenu",
        scale: ["0","1"],
         opacity: ["0","1"],
      },
      0
    );
    //aniamzione del icona
    /*t1.add({
      targets:'#navIconAccount',
      scale:1.3,
    },0)*/
  },

  methods: {
    //Evento Attavazione Menu
    activatMenu() {
      $nuxt.$emit("showMenu");
      //this.statusMenu = !this.statusMenu;
    },
    //Evento Attavazione Modal
    activatModal() {
      if (!this.statusMenu) {
        //console.log("Apro Modal")
        $nuxt.$emit("showModal");
        //this.statusModal = !this.statusModal;
      }
    },
    activatNewLogin() {
      // this.$router.push({ path: "/newLogin" });
      if(!this.Status_dropMenu){
        this.statusDropMenu = true;
        t1.play();
      }else{
        this.statusDropMenu = false;
        t1.restart();
      }
    },
  },
  components: {},
};
</script>

<style >
.spanClick {
  width: 50%;
}

.containerHam {
  width: 40px;
  transform: translateX(-11px);
}

.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-transition: -webkit-transform 400ms;
  transition: -webkit-transform 400ms;
  transition: transform 400ms;
  transition: transform 400ms, -webkit-transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamRotate.active {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.hamRotate180.active {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}

.line {
  fill: none;
  -webkit-transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #af384f;
  stroke-width: 5;
  stroke-linecap: round;
}

.ham4 .top {
  stroke-dasharray: 40 121;
}

.ham4 .bottom {
  stroke-dasharray: 40 121;
}

.ham4.active .top {
  stroke-dashoffset: -68px;
}

.ham4.active .bottom {
  stroke-dashoffset: -68px;
}
.logo-central {
  transform: translateX(10px);
}

/*DropMenu*/
.dropdown-menu {
  top: 47px;
  right: 10px;
  z-index: 200;
}

@media screen and (max-width: 992px) {
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
}
</style>
