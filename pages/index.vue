<template>
  <!-- div generale -->
  <div>
    <!-- Container -->
    <div class="container-fluid mx-auto grid">
      <!-- Div header home page -->
      <div class="bgred flex items-center grid">
        <h1 class="text-white text-center text-4xl">
          {{ $t("header.title") }}
        </h1>
        <!--*** Div header home page*** -->
      </div>

      <!-- Bg-Header -->
      <div class="bg-header"></div>


</div>

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

      <!-- Bottone Info Covid -->
      <div class=" w-44 mx-auto grid flex items-center">
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
      </div>
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
      <div class="bg_illustrationContainer transform1pxY relative">
        <svg
          viewBox="0 0 375 210"
          class="relative"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M179.739 25.3825C105.76 40.8042 28.538 11.1152 0 0V108H376V81.1244C334.445 40.8111 301.5 0 179.739 25.3825Z"
            fill="#AF384F"
          />
          <path
            d="M188.5 47C99 56 38.8734 33.4488 0 19V160H376V89.9067C274 89.9067 278 38 188.5 47Z"
            fill="#D16A7D"
          />
          <path
            d="M194.5 84.5C122.539 30.5291 38.8734 83.4487 0 69V210H376V113.5C341.418 89.8207 266.5 138.5 194.5 84.5Z"
            fill="#FED1D1"
          />
        </svg>
      </div>
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

  mounted() {
    //$("body").addClass("scrollbar");
  },
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

/* Box Home */
.containerBoxHome2 {
  /* background: #35495e; */
  top: 966px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* width: 100%; */
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
  top: 2230px;
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

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
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
