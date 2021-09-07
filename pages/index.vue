<template>
  <!-- div generale -->
  <div>
    <!-- Div header home page -->
    <div class="bgred flex items-center grid">
      <h1 class="text-white text-center text-4xl">
        <div class="mb-8">
          {{ $t("header.title") }}
        </div>

        <div @click="ScrollPixel()">
          <svg
            class="animate-bounce w-6 h-6 text-center mx-auto"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </h1>

      <!--*** Div header home page*** -->
    </div>

    <!-- Bg-Header -->
    <div class="bg-header"></div>

    <!-- Box Carta con render -->
    <div name="freccietta">
      <nuxt-link :to="localePath('/card')">
        <div class="box-card z-20">
          <img
            class="imgRenderCarta"
            src="~/assets/img/home/render-carta.jpg"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </nuxt-link>
    </div>

    <!-- Containet Body Page -->
    <div class="grid mx-auto container-fluid ContainerBoxHome" style="">
      <!-- Bottone Info Covid -->
      <div class="w-44 mx-auto grid flex items-center my-16">
        <nuxt-link :to="localePath('/lp')">
          <gbutton text="Contattami" id="lp" name="lp" typeButton="normal" />
        </nuxt-link>
      </div>

      <!-- Box home con i vari servizi -->
      <div class="containerBoxHome grid grid-col-1 gap-12 uppercase">
        <!-- Box Laser 1 -->
        <nuxt-link :to="localePath('/laser')">
          <div class="BoxHome duration-300 shadow-lg">
            <div
              class="titleBoxHome text-2xl font-semibold text-left pt-2 pl-5"
            >
              <h4>
                {{ $t("navBuy.fotoepilazione") }}
              </h4>
              <img
                src="~/assets/img/home/box/laser.png"
                alt="laser"
                class="BoxHomeLaser"
              />
            </div>
          </div>
        </nuxt-link>

        <!-- Box Biolifting 2 -->
        <nuxt-link :to="localePath('/biolifting')">
          <div class="BoxHome duration-300 shadow-lg">
            <div
              class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5"
            >
              <h4>
                {{ $t("navBuy.biolifting") }}
              </h4>
              <img
                src="~/assets/img/home/box/biolifting.png"
                alt="laser"
                class="BoxHomeBiolifting"
              />
            </div>
          </div>
        </nuxt-link>

        <!--/// Box puliziaevo 3 -->
        <!-- Box PuliziaEvo 3 -->
        <nuxt-link :to="localePath('/puliziaevo')">
          <div class="BoxHome duration-300 shadow-lg">
            <div
              class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5"
            >
              <h4>
                {{ $t("navBuy.puliziaevo") }}
              </h4>
              <img
                src="~/assets/img/home/box/render-box-home.png"
                alt="pulizia evolution"
                class="BoxHomePuliziaEvo"
                style="
                  transform: translate(-20px, -53px);
                  width: 300px;
                  height: 300px;
                  position: absolute;
                  z-index: -1;
                "
              />
            </div>
          </div>
        </nuxt-link>
        <!-- Box Laser 3 -->

        <!-- Box Mai+Xl 4 -->
        <nuxt-link :to="localePath('/mai+xl')">
          <div class="BoxHome duration-300 shadow-lgX">
            <div class="">
              <!-- <h4>
                {{ $t("navBuy.maipiuxl") }}
              </h4> -->
              <img
                src="~/assets/img/home/box/mai+xl2.svg"
                alt="maipiuxl"
                class="BoxHomeMaipiuxl"
                style="transform: scale(1.005)"
              />
            </div>
          </div>
        </nuxt-link>
      </div>
      <!-- <nuxt-link :to="localePath('/mai+xl')">
          <div class="BoxHome duration-300 shadow-lg">
            <div
              class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5"
            >
         
            </div>
          </div>
        </nuxt-link> -->
      <!-- </div> -->
      <!--/// Box Biolifting 4 -->
    </div>
    <!-- Container Body -->

    <!-- Bg recensioni clienti con titolo -->
    <div class="clientsReviewsHome">
      <div class="TitleClientsReviews z-20 text-2xl sm:text-4xl md:text-5xl">
        {{ $t("header.cosa") }}
      </div>

      <!-- box recensioni clienti -->
      <div class="containerReviews" style="z-index: 2">
        <!-- Carosello Review Clienti -->
        <div class="mx-auto mt-12 text-black">
          <VueSlickCarousel v-bind="settings">
            <clientReview
              class=""
              :text="$t('review.text1')"
              name="Umberto Giuliani"
              img="Umberto Giuliani"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text2')"
              name="Gianrocco Reale"
              img="Gianrocco Reale"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text3')"
              name="Donatella Longo"
              img="Donatella Longo"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text4')"
              name="Domenica Albanese"
              img="Domenica Albanese"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text5')"
              name="Chiara Battista"
              img="Chiara Battista"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text6')"
              name="Annalisa Bucciarelli"
              img="Annalisa Bucciarelli"
            ></clientReview>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <!-- Bg Header Sezione Illustrazioni -->
    <div
      class="bg_illustrationContainer relative grid mt-40"
      style="transform: translateY(-1px)"
    >
      <!-- Banner 1 -->
      <svg
        viewBox="0 0 380 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: translateY(1px)"
      >
        <path
          d="M0 136C136.621 136 218.694 136 380 136L380 41C175.656 41 94.0835 41 0 41V136Z"
          fill="#FFD2D2"
        />
        <path
          d="M0 59.8357L0 21.6694H379.663V135.774C224.76 -16.1024 80.3197 106.761 0 59.8357Z"
          fill="#AF384F"
        />
        <path
          d="M0 38.7686C133.979 88.2518 189.885 1.31326 379.663 88.7417V26.7652L0 3.46729L0 38.7686Z"
          fill="#D16A7D"
        />
        <path
          d="M0 28.9697C133.979 78.4525 229.822 -9.24472 379.663 58.3654L379.663 -0.00012207C175.5 -0.000136375 94 -9.59295e-05 0 -0.00012207V28.9697Z"
          fill="white"
        />
      </svg>
      <!--// Banner 1 -->
      <!--Container MOnica -->
      <div class="containerMonica transform1pxYZ">
        <!--title -->
        <div class="titleMonica">Monica Sciascia</div>
        <!-- Img Monica -->
        <div class="imgMonica mx-auto my-12">
          <img
            src="~/assets/img/home/monica.png"
            class="mx-auto"
            width="300px"
            alt="Monica Sciscia"
          />
        </div>
        <!--// Img Monica -->
        <!-- Content Monica -->
        <div class="contentMonica" style="max-width: 620px; margin: auto">
          {{ $t("home.contentMonica") }}
        </div>
        <br />
        <!-- Button guarda Video -->
        <div class="mx-auto my-16">
          <nuxt-link :to="localePath('/lp')">
            <div
              class="
                mx-auto
                text-white
                font-normal
                text-center
                btnShadow
                duration-300
              "
              style="
                background: #af384f;
                padding: 12px;
                border-radius: 80px;
                width: 170px;
              "
            >
              {{ $t("laser.info.btnVideo") }}
            </div>
          </nuxt-link>
        </div>
        <!--//Content Monica -->
        <!--//title -->
      </div>
      <!--//Container MOnica -->
      <!--Banner 2 -->
      <svg
        viewBox="0 0 380 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style="transform: translate(-1px, -1px)"
      >
        <path
          d="M380 0C243.379 1.19438e-05 161.306 1.91189e-05 -8.30516e-06 3.32207e-05L3.05176e-05 95C204.344 95 285.916 95 380 95L380 0Z"
          fill="#FFD2D2"
        />
        <path
          d="M380 76.1643L380 114.331L0.337494 114.331L0.337484 0.226107C155.24 152.102 299.68 29.2394 380 76.1643Z"
          fill="#AF384F"
        />
        <path
          d="M380 97.2314C246.021 47.7483 190.115 134.687 0.337486 47.2583L0.337492 109.235L380 132.533L380 97.2314Z"
          fill="#D16A7D"
        />
        <path
          d="M380 107.03C246.021 57.5474 150.178 145.245 0.337458 77.6345L0.337494 136C204.5 136 286 136 380 136L380 107.03Z"
          fill="white"
        />
      </svg>
      <!--// Banner 2 -->
    </div>

    <!-- div generale -->
    <foter style="transform: translateY(2048px)" />
  </div>
</template>

<script>
import gbutton from "@/components/gbutton.vue";
import clientReview from "@/components/clientReview.vue";
import VueSlickCarousel from "vue-slick-carousel";
import foter from "@/components/footer.vue";

export default {
  data() {
    return {
      settings: {
        dots: true,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,

        centerMode: true,
        centerPadding: "0px",
        slidesPerRow: 1,
        touchMove: true,
        variableWidth: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,

        swipe: true,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    ScrollPixel() {
      console.log("asd");
      window.scrollBy({ top: 200, left: 0, behavior: "smooth" });
    },
  },
  mounted() {},
  components: {
    gbutton,
    clientReview,
    VueSlickCarousel,
    foter,
  },
};
</script>

<style scope>
.contentMonica {
  font-size: 18px;
  font-style: normal;
  font-weight: 300;
  text-align: center;
  color: #af384f;
}
.titleMonica {
  color: #af384f;
  font-size: 29px;
  font-style: normal;
  font-weight: 600;
  text-align: center;
}
.ContainerBoxHome {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 822px;
  z-index: 19;
}

.title-titolare {
  font-size: 5rem;
  color: #af384f;
  text-align: center;
}

/* Css Home */
.bgred {
  background: #af384f; /*#af384f*/
  width: 100%;
  height: 500px;
}

/* Header */
.box-card {
  background: white;
  border-radius: 15px;
  height: 450px;
  width: 290px;
  margin: 0 auto;
  position: absolute;
  /* border-radius: 20px;
    top: 333px;*/
  -webkit-box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4);
  box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4);
  left: 50%;
  top: 373px;
  transform: translateX(-50%);
}

.bg-header {
  background-image: url("~/assets/img/home/bg-header.svg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-color: #999; */
  width: 100%;
  height: 70vh;
  position: relative;
  left: 0;
  /*top: 490px;*/
}

.imgRenderCarta {
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: auto;
}

/* Clienti Review */
.clientsReviewsHome {
  background-image: url("~assets/img/home/bg-cosadiconodinoi.svg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-color: #999; */
  width: 100%;
  height: 50vh;
  position: absolute;
  left: 0;
  top: 2280px;
}

.TitleClientsReviews {
  color: #af384f;
  position: relative;
  width: 100%;
  top: 50%;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.containerReviews {
  position: relative;
  width: 95%;
  top: 40vh; /*450px*/
  left: 50%;
  transform: translateX(-50%);
}

/* Media Query */
@media screen and (max-height: 700px) {
}

@media screen and (min-width: 1100px) {
}

.BoxHome {
  width: 300px;
  height: 300px;
  border-radius: 14px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 20px -3px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 1px 20px -3px rgba(0, 0, 0, 0.6);
}

.BoxHome:hover {
  -webkit-box-shadow: 0px 1px 38px 4px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 1px 38px 4px rgba(0, 0, 0, 0.4);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.BoxHome:active {
  -webkit-box-shadow: 0px 1px 9px 0px #000000;
  box-shadow: 0px 1px 9px 0px #000000;
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.titleBoxHome {
  color: #af384f;
  /*font-size: 2.5rem;*/
}

.BoxHomeLaser {
  position: absolute;
  border-radius: 14px;
  transform: scale(0.9);
  float: right;
  right: -14px;
  top: 32px;
}
.BoxHomeBiolifting {
  position: absolute;
  border-radius: 14px;
  transform: scale(0.9);
  float: right;
  right: -12px;
  top: 35px;
}

.bg_illustrationContainer {
  top: 2050px;
}
.containerMonica {
  background-color: #ffd2d2;
  width: 100%;
  height: auto;
  padding: 2rem;
}

.BoxHomeMaipiuxl {
  /*    width: 300px;
  height: 300px;
  border-radius: 14px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 20px -3px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 1px 20px -3px rgba(0, 0, 0, 0.6);
  background-color: transparent;*/
}

/*
1 freccietta che va giu
2 pulizia evo ridesign
3 ridesign mai piu xl
4 spazio giu recensioni
5 pulsante video monica
6 footer
*/
</style>


