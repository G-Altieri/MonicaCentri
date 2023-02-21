<template>
  <div>
    <!-- NavBar -->
    <div
      class="
        relative
        top-0
        h-16
        w-screen
        bg-white
        flex flex-row
        items-center
        justify-center
        font-bold
        text-red
      "
    >
      <span>MONICA</span>
      <!-- Logo -->
      <img
        class="h-10 w-10 text-center justify-self-center"
        src="~/assets/img/navbar/logo.svg"
        alt="Logo Monica Centri"
        width="100%"
        height="100%"
      />
      <span>CENTRI</span>
    </div>

    <!-- Container -->
    <div
      class="w-full mx-auto flex flex-col items-center"
      style="max-width: 1024px"
    >
      <!-- Image Header Page -->
      <img
        class=""
        src="~/assets/img/landing/photo1.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

      <!-- Title Illustration Body Reset -->
      <img
        class="max-w-xs w-1/2 mt-11"
        src="~/assets/img/landing/illustration1.svg"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <!-- Title Illustration rivoluziona il tuo corpo -->
      <img
        class="mt-14"
        src="~/assets/img/landing/illustration2.svg"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
    <!-- Content rivoluziona il tuo corpo -->
    <div class="text-center font-bold text-md sm:text-lg ">
      il protocollo <span class="text-redSecondary">Body Reset</span> é un percorso ideato,<br> studiato e strutturato da <br> Monica Centri
    <br><br>
    Attraverso questo <span class="text-redSecondary">viaggio</span>, totalmente <br> <span class="text-redSecondary">personalizzato</span> su di te, ti portiamo al <br>
     <span class="text-redSecondary">benessere</span> psicopatico a 360 gradi. <br> <br> 
     Sarai sostenuta da   <span class="text-redSecondary">professionisti</span> dei vari <br> campi che ti portanno alla migliore versione <br> di te stessa  <br> 
    </div>

     <!-- Title Illustration Body Reset -->
      <img
        class="max-w-xs w-1/2 mt-11"
        src="~/assets/img/landing/photo2.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />

     <!-- Cambia te stesso -->
     <div class="w-full relative mt-16">
      <img
        class=""
        src="~/assets/img/landing/photo3.png"
        alt="Monica Centri"
        width="100%"
        height="100%"
      />
      <div class="text-white text-2xl sm:text-5xl font-bold text-center absolute top-4 left-1/2 transform -translate-x-1/2">Cambia te <br> stesso</div>
      <div class="text-white text-xl sm:text-4xl font-medium text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">PROVA LA SEDUTA <br> BODY REFRESH</div>
      <button class="text-redSecondary text-xl sm:text-4xl font-medium text-center absolute left-1/2 bottom-6 transform -translate-x-1/2 py-4  bg-white w-40 sm:w-80 rounded-full">Prenota ora</button>
     </div>


    </div>
  </div>
</template>

<script>
//import ginput from "@/components/ginput.vue";

export default {
  layout: "empty",
  data() {
    return {};
  }, //data
  mounted() {}, //mounted
  created() {}, //created
  computed: {
    responsive() {
      switch (this.$mq) {
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
      }
    },
    webShareApiSupported() {
      return navigator.share;
    },
  },

  methods: {
    async shareButton() {
      try {
        await navigator.share({
          title: "Monica Centri",
          text: "Non il solito Centro Estetico",
          url: "https://monicacentri.com/qr",
        });
        console.log("shared successfully");
      } catch (err) {
        console.log("Error: " + err);
      }
    },
  }, //methods
  components: {},
};
</script>

<style lang="scss" scoped>
</style>

