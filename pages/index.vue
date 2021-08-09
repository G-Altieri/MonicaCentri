<template>
  <!-- div generale -->
  <div>
    <!-- Div header home page -->
    <div class="bgred flex items-center grid">
      <h1 class="text-white text-center text-4xl">
        {{ $t("header.title") }}
      </h1>
      <!--*** Div header home page*** -->
    </div>

    <!-- Bg-Header -->
    <div class="bg-header"></div>

    <!-- Box Carta con render -->
    <div>
      <nuxt-link :to="localePath('/admin-lp')">
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
    <div class="grid mx-auto container-fluid -mt-44 lg:mt-0" style="">
      <!-- Bottone Info Covid -->
      <div class="w-44 mx-auto grid flex items-center my-16">
        <nuxt-link :to="localePath('/lp')">
          <gbutton text="Contattami" id="lp" name="lp" typeButton="normal" />
        </nuxt-link>
      </div>

      <!-- Box home con i vari servizi -->
      <div class="containerBoxHome grid grid-col-1 gap-6">
        <!-- Box Laser 1 -->
        <nuxt-link :to="localePath('/laser')">
          <div class="BoxHome duration-300 shadow-lg">
            <div
              class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5"
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
    
      <!--/// Box Biolifting 2 -->
      <!-- Box Laser 3 -->
      <nuxt-link :to="localePath('/puliziaevo')">
        <div class="BoxHome duration-300 shadow-lg">
          <div class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5">
            <h4>
              {{ $t("navBuy.puliziaevo") }}
            </h4>
            <img
              src="~/assets/img/home/box/laser.png"
              alt="pulizia evolution"
              class="BoxHomeLaser"
            />
          </div>
        </div>
      </nuxt-link>
      <!-- Box Laser 3 -->

      <!-- Box Biolifting 4 -->
      <nuxt-link :to="localePath('/mai+xl')">
        <div class="BoxHome duration-300 shadow-lg">
          <div class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5">
            <h4>
              {{ $t("navBuy.maipiuxl") }}
            </h4>
            <img
              src="~/assets/img/home/box/biolifting.png"
              alt="maipiuxl"
              class="BoxHomeBiolifting"
            />
          </div>
        </div>
      </nuxt-link>
  </div>
      <!--/// Box Biolifting 4 -->
    </div>
    <!-- Container Body -->

    <!-- Bg recensioni clienti con titolo -->
    <div class="clientsReviewsHome">
      <div class="TitleClientsReviews z-20 text-2xl sm:text-4xl md:text-5xl">
        {{ $t("header.cosa") }}
      </div>

      <!-- box recensioni clienti -->
      <div class="containerReviews">
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
      class="bg_illustrationContainer transform1pxY relative grid mt-40"
      style="margin-top: 33.5rem"
    >
      <svg
        viewBox="0 0 375 1275"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-5 1074.69C20.5 1074.69 338.5 1085 375 1085V44L-5 44L-5 1074.69Z"
          fill="#FFD2D2"
        />
        <path
          d="M-5 81.8357L-5 43.6694H374.663V157.774C219.76 5.89761 75.3197 128.761 -5 81.8357Z"
          fill="#AF384F"
        />
        <path
          d="M374.663 1056.03L374.663 1094.19L-4.99991 1094.19L-4.9999 980.089C149.902 1131.97 294.343 1009.1 374.663 1056.03Z"
          fill="#AF384F"
        />
        <path
          d="M-5 60.7686C128.979 110.252 184.885 23.3133 374.663 110.742V48.7652L-5 25.4673L-5 60.7686Z"
          fill="#D16A7D"
        />
        <path
          d="M374.663 1077.09C240.684 1027.61 184.777 1114.55 -4.9999 1027.12L-4.99991 1089.1L374.663 1112.4L374.663 1077.09Z"
          fill="#D16A7D"
        />
        <path
          d="M-5 50.9706C128.979 100.453 224.822 12.7562 374.663 80.3663L374.663 35.4999C171.838 21.292 166.776 -21.6002 -5 14.1645V50.9706Z"
          fill="white"
        />
        <path
          d="M374.663 1086.89C240.684 1037.41 144.84 1125.11 -4.99989 1057.5L-4.9999 1202.03C197.824 1216.23 202.886 1301.97 374.663 1266.21L374.663 1086.89Z"
          fill="white"
        />
      </svg>
    </div>

    <!-- div generale -->
  </div>
</template>

<script>
import gbutton from "@/components/gbutton.vue";
import clientReview from "@/components/clientReview.vue";
import VueSlickCarousel from "vue-slick-carousel";

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

  mounted() {},
  components: {
    gbutton,
    clientReview,
    VueSlickCarousel,
  },
};
</script>

<style >
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
  position: relative;
  left: 0;
  /* top: 2230px;*/
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
  width: 90%;
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
</style>
