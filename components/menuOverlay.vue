<template>
  <!-- :class="{ hidden: !view }" -->
  <div
    id="idMenu"
    class="containerMenu z-40 box flex items-center grid"
    :class="{ hidden: !hiddenMenu }"
  >
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
//IMPORTANTE PER EVITARE LO SCROLL SENZA TOGLIERE LA BARRA class: overflow-y-scroll fixed w-full
var t1;

export default {
  data() {
    return {
      open: false,
      modal_open: false,
      animeInCorso: false,
      hiddenMenu: false,
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
    t1 = this.$anime.timeline({
      easing: "easeInOutCubic", //https://easings.net/it
      duration: 500,
      autoplay: false,
      complete: () => {
        //imposto l animazione finita
        this.animeInCorso = false;
        //reverso l animazione per il prossimo click
        t1.reverse();
        //se il menu e chiuso lo nascondo dal DOM
        if (!this.open) {
          this.hiddenMenu = false;
        }
      },
    });
    //aniamzione del container del menu
    t1.add({
      targets: ".box",
      width: "100%",
      opacity: "1",
    });

    //animazione del testo del menu
    t1.add(
      {
        targets: ".test ul li",
        translateX: ["-270", "0"],
        opacity: ["0", "1"],
        delay: this.$anime.stagger(100),
      },
      0
    );
  },
  methods: {
    //Metodo Che apre e chiude il menu
    Menu() {
      //controllo se l animazione e in corso
      if (!this.animeInCorso) {
        //controllo se aprire o chiuder e il menu
        if (!this.open) {
          //faccio visulizzare subito il menu prima del animazione
          this.hiddenMenu = true;

          //parte animazione apertura
          t1.play();

          //cambio il valore nello store su aperto, aggiungera il filtro e togliera lo scrool
            this.$store.commit('setStatus_menu', true)
          
          this.animeInCorso = true;
          this.open = true;

          //  console.log("openMenu:" +this.open + " animeincorso: " +this.animeInCorso);
        } else {
          //lo imposto a false per evitare il lampeggio, (soluzione trovata su git)
          t1.completed = false;
          //chiudo il menu anime
          t1.play();
          //cambio il valore nello store su chiuso, rimettera lo scroll e togliera il filtro
              this.$store.commit('setStatus_menu', false)

          this.animeInCorso = true;
          this.open = false;
          //  console.log("openMenu:" +this.open + " animeincorso: " +this.animeInCorso);
        }
      } //menu
    },

    openMenu() {
      $nuxt.$emit("StatusMenu", true);
    },
    closeMenu() {
      $nuxt.$emit("StatusMenu", false);
    
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
