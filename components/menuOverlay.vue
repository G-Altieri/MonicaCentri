<template>
  <!-- :class="{ hidden: !view }" -->
  <div id="idMenu" class="containerMenu z-40 box  flex items-center grid hidden">
    <div class="text-center txtRed test">
      <ul class="textMenu">
        <li>
          <a href=""><b>Laser</b></a>
        </li>
        <li>
          <a href=""><b>Bailando</b></a>
        </li>
        <li>
          <a href=""><b>Amigos</b></a>
        </li>
        <li>
          <a href=""><b>Adios</b></a>
        </li>
        <li>
          <a href=""><b>Vamos</b></a>
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
    };
  },
  created() {
    this.$nuxt.$on("eventoMenu", () => {
    this.openMenu();
    });
  },
  mounted() {
    t1 = this.$gsap.timeline();
  },
  methods: {
    //Metodo Che apre e chiude il menu
    openMenu() {
      if (!t1.isActive()) {
        this.open = !this.open; //hidden menu
        if (this.open) {
          //hidden scrollbar
          this.animateMenuOpen();
          $("#idMenu").removeClass("hidden");
          $("body").addClass("overflow-hidden");
          $("#myHam").addClass("active");
          $("#webSite").addClass("filter");
        } else {
          this.animateMenuClose();
          $("body").removeClass("overflow-hidden");
          $("#myHam").removeClass("active");
          $("#webSite").removeClass("filter");
          //hidden menu
        } //if open
      } //is Active
    },

  after(){
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
  background-color:rgba(255, 255, 255, 0.5);
}

.filter {
  filter: blur(10px);
}

.textMenu {
  font-size: 2rem;
}
</style>
