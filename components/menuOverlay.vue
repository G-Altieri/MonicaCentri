<template>
  <div class="containerMenu z-40 box" :class="{ hidden: !view }">
    <div class="container txtRed test">
      <ul class="textMenu">
        <li>
          <a href=""><b>TEST1</b></a>
        </li>
        <li>
          <a href=""><b>TEST2</b></a>
        </li>
        <li>
          <a href=""><b>TEST3</b></a>
        </li>
        <li>
          <a href=""><b>TEST4</b></a>
        </li>
        <li>
          <a href=""><b>TEST5</b></a>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      open: false,
      view:false,
    };
  },
  created() {
    this.$nuxt.$on("eventoX", () => {
      this.openMenu();
    });
  },
  mounted() {},
  methods: {
    //Metodo Che apre e chiude il menu
    openMenu() {
      this.open = !this.open; //hidden menu
      if (this.open) {
        //hidden scrollbar
        this.animateMenuOpen();
        $("body").addClass("overflow-hidden");
        this.view=true;
      } else {
        this.animateMenuClose();
        $("body").removeClass("overflow-hidden");
        this.view=false;
         //hidden menu
      }
    },

    animateMenuOpen() {
      const gsap = this.$gsap;
      var t1 = this.$gsap.timeline();

      t1.from(".box", {
        width: "0%",
        duration: 0.3,
      });

      t1.from(".test ul li",{
        x: -400,
        stagger: 0.1,
        duration: 0.5,
        opacity: 0,
      });
    },
    animateMenuClose() {
      const gsap = this.$gsap;
      var t1 = this.$gsap.timeline();

        console.log(t1.isActive());
      t1.to(".box", {
        width: "0%",
        duration: 0.3,
      });

      t1.to(".test ul li", -0.3, {
        x: -400,
        stagger: 0.1,
        duration: 0.5,
        opacity: 0,
      });

  console.log(t1.isActive());

    },

  }, //methods
  props: {},
};
</script>

<style >
.containerMenu {
  background: red;
  width: 100%;
  height: 100vh;
}

.textMenu {
  font-size: 2rem;
}
</style>
