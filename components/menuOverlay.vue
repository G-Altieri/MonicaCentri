<template>
  <!-- :class="{ hidden: !view }" -->
  <div id="idMenu" class="containerMenu z-40 box flex items-center grid hidden">
    <div class="text-center text-red test">
      <ul class="textMenu" @click="Menu()">
        <li>
          <nuxt-link :to="localePath('/laser')">
            <div class="font-bold">
              {{ $t("menu.item1") }}
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link :to="localePath('/')">
            <div class="font-bold">{{ $t("menu.item2") }}</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="localePath('/laser')">
            <div class="font-bold">{{ $t("menu.item3") }}</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="localePath('/')">
            <div class="font-bold">{{ $t("menu.item4") }}</div></nuxt-link
          >
        </li>
        <li>
          <nuxt-link :to="localePath('/laser')">
            <div class="font-bold">{{ $t("menu.item5") }}</div></nuxt-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
//import { gsap, TweenMax } from 'gsap/all'

var t1;

export default {
  data() {
    return {
      open: false,
      modal_open: false,
    };
  },
  created() {
    //Ricezione evento apertura chiusura menu
    this.$nuxt.$on("showMenu", () => {
      this.Menu();
    });
    this.$nuxt.$on("StatusModal", (e) => {
      // console.log("evento "+e)
      this.modal_open = e;
    });
  },
  mounted() {
    t1 = this.$gsap.timeline();
  },
  methods: {
    //Metodo Che apre e chiude il menu
    Menu() {
      if (!t1.isActive()) {
        this.open = !this.open; //hidden menu
        if (this.open) {
          this.openMenu();
          this.bodyOpen();
        } else {
          this.closeMenu();
          if (!this.modal_open) {
            this.bodyClose();
          }
        } //if open
      } //menu
    },
    openMenu() {
      $nuxt.$emit("StatusMenu", true);
      this.animateMenuOpen();
      $("#idMenu").removeClass("hidden");
      $("#myHam").addClass("active");
    },
    closeMenu() {
      $nuxt.$emit("StatusMenu", false);
      this.animateMenuClose();
      $("#myHam").removeClass("active");
    },
    bodyOpen() {
      $("body").addClass("overflow-hidden");
      $("#webSite").addClass("filter");
    },
    bodyClose() {
      $("body").removeClass("overflow-hidden");
      $("#webSite").removeClass("filter");
    },

    after() {
      $("#idMenu").addClass("hidden");
    },

    /*Animazione Apertura Menu*/
    animateMenuOpen() {
      const gsap = this.$gsap;

      /*Animazione Container */
      t1.to(".box", {
        width: "100%",
        opacity: 1,
        duration: 0.5,
      });

      /*Animazione Testo menu */
      t1.from(".test ul li", {
        x: -100,
        stagger: 0.1,
        duration: 0.3,
        opacity: 0,
        delay: -0.3,
        onComplete: this.after(),
      });
    },

    /*Animazione Chiusura Menu*/
    animateMenuClose() {
      /*Animazione Container */
      t1.to(".test ul li", {
        x: -100,
        stagger: 0.05,
        duration: 0.3,
        opacity: 0,
      });

      /*Animazione Testo menu */
      t1.to(".box", {
        width: "0%",
        opacity: 0,
        duration: 0.5,
        delay: -0.5,
      });
      /*Risetto il menu al centro**/
      t1.set(".test ul li", {
        x: 0,
        opacity: 1,
      });
    },
  }, //methods
  props: {},
};
</script>

<style >
.containerMenu {
  /* backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  background-color:rgba(255, 255, 255, 0.5); */

  width: 0%;
  height: 100vh;
  opacity: 0;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
}

.filter {
  filter: blur(10px);
}

.textMenu {
  font-size: 2rem;
}
</style>
