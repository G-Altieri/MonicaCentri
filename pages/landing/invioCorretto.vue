<template>
    <div class="bg-redPrimary w-full">
        <!-- Container -->
        <div class="w-full mx-auto flex flex-col items-center border-0 lg:border-x-12 text-white bg-redPrimary text-center"
            style="max-width: 1024px">
            <!-- Monica Centri con Logo-->
            <img class="mx-auto mt-12 w-80 " src="~/assets/img/landing/illustration5.svg" alt="Monica Centri" width="100%"
                height="100%" />
            <div class="font-medium text-xl ">Yourself and nothing else</div>

            <!-- Grazie -->
            <div class="text-4xl font-bold mt-16">GRAZIE!</div>

            <!-- Text sotto Grazie -->
            <div class="font-semibold text-2xl mt-16">Il form è stato inviato <br>correttamente</div>

            <!-- Text a breve -->
            <div class="font-semibold text-2xl mt-10">A breve riceverai una<br>mail informativa e verrai<br>contattata da
                noi
                per<br>prenotare il trattamento<br>Beauty Reset</div>

            <!-- Text Prima di -->
            <div class="font-semibold text-2xl mt-10">Prima di lasciarci la<br>fondatrice e direttrice<br>tecnica Monica
                Centri,<br>Monica Sciascia, ha un<br>video messaggio per te</div>

            <!-- Video -->
            <div class="mt-16">
                <!-- <img class="" src="~/assets/img/landing/video.png" alt="Monica Centri" width="100%" height="100%" /> -->

                <iframe width="315" height="170" src="https://www.youtube.com/embed/Mk2Fn8nNqs4"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>

            <div class="my-8"></div>
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
    mounted() { }, //mounted
    created() { }, //created
    computed: {
        /*  responsive() {
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
          },*/
    },

    methods: {
        /* async shareButton() {
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
         },*/
    }, //methods
    components: {},
};
</script>
  
<style lang="scss" scoped></style>
  
  