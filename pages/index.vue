<template>
  <!-- div generale -->
  <div>
    <!-- Div header home page -->
    <div class="bgred flex items-center grid">
      <h1 class="text-white text-center text-4xl">{{ $t("header.title") }}</h1>
      <!--*** Div header home page*** -->
    </div>

    <!-- Bg-Header -->
    <div class="bg-header"></div>

    <!-- Box Carta con render -->
    <nuxt-link :to="localePath('/dashboard')">
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

    <!-- Bottone Info Covid -->
    <div class="containerInfoCovid grid flex items-center">
      <nuxt-link
        type="button"
        class="
          text-center text-white
          font-semibold
          px-6
          py-3
          rounded-lg
          btnInfoCovid
          duration-300
        "
        :to="localePath('/test')"
      >
        Test Zone
      </nuxt-link>
    </div>

    <!-- Box home con i vari servizi -->
    <div class="containerBoxHome grid grid-col-1 gap-6">
      <boxHome 
      class="text-center"
       title="Laser"
        link="laser"
        :type="false"
         ></boxHome>
      <boxHome
        class="text-center"
        title="Biolifting"
        link="biolifting"
        :type="false"
      ></boxHome>
      <boxHome
        class="text-center"
        title="Pulizia Evo"
        link="puliziaevo"
       :type="true"
      ></boxHome>
      <boxHome
        class="text-center"
        title="Mai + XL"
        link="mai+xl"
        :type="true"
      ></boxHome>
      <!-- <boxHome class="text-center" title="Lingue" link="lingue"></boxHome>
      <boxHome class="text-center" title="Dashboard" link="dashboard"></boxHome> -->
    </div>
    <!-- Bg recensioni clienti con titolo -->
    <div class="clientsReviewsHome">
      <div class="TitleClientsReviews z-20 text-2xl sm:text-4xl md:text-5xl">
        {{ $t("header.cosa") }}
      </div>

      <!-- box recensioni clienti -->
      <div class="containerReviews">
        <!-- Carosello Review Clienti -->
        <div class="mx-auto mt-36 text-black">
          <VueSlickCarousel v-bind="settings">
            <clientReview
              class=""
              :text="$t('review.text1')"
              name="Umberto Giuliani"
              img="Annalisa Bucciarelli"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text2')"
              name="Gianrocco Reale"
              img="Chiara Battista"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text3')"
              name="Donatella Longo"
              img="Domenica Albanese"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text4')"
              name="Domenica Albanese"
              img="Donatella Longo"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text5')"
              name="Chiara Battista"
              img="Gianrocco Reale"
            ></clientReview>
            <clientReview
              class=""
              :text="$t('review.text6')"
              name="Annalisa Bucciarelli"
              img="Umberto Giuliani"
            ></clientReview>
          </VueSlickCarousel>
        </div>
      </div>
    </div>

    <!-- bg titolare -->
    <div class="bg-titolare">
      <div class="bg-titolare-color">
        <div class="title-titolare">Monica</div>
        <img src="~/assets/img/home/monica.png" class="img-titolare" alt="" />
        <div class="text-titolare">{{ $t("titolare.content") }}</div>
        <div class="bg-titolare-footer"></div>
      </div>
    </div>

    <!-- div generale -->
  </div>
</template>

<script>
import boxHome from "@/components/boxHome.vue";
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
    boxHome,
    clientReview,
    VueSlickCarousel,
  },
};
</script>

<style >
/* Titotlare */
.bg-titolare {
  background-image: url("~/assets/img/home/bg-titolare.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: absolute;
  left: 0;
  top: 3800px;
  height: 70vh;
  z-index: 10;
}
.bg-titolare-footer {
  background-image: url("~/assets/img/home/bg-titolare-footer.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: absolute;
  left: 0;
  top: 148vh;
  height: 40vh;
  z-index: 10;
}
.bg-titolare-color {
  background: #ffd2d2;
  width: 100%;
  position: relative;
  height: 150vh;
  top: 45vh;
}
.img-titolare {
  left: 50%;
  transform: translateX(-50%);
  position: relative;
  width: 40vh;
  margin-top: 100px;
}

.text-titolare {
  font-size: 1.5rem;
  color: #af384f;
  text-align: center;
  width: 85%;
  position: relative;
  margin: 0 auto;
  margin-top: 60px;
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
  position: absolute;
  left: 0;
  top: 490px;
}

.imgRenderCarta {
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: auto;
}

/* Button Info Covid */
.containerInfoCovid {
  /* width: 100%; */
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 870px;
}

.btnInfoCovid {
  background: #af384f;
  border-radius: 50px;
  width: 200px;
  cursor: pointer;
  color: white;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
  box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
}

.btnInfoCovid:hover {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.btnInfoCovid:active {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

/* Box Home */
.containerBoxHome {
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
  position: absolute;
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

/* Test Zone */
.containerStronzata {
  margin: 0 auto;
  min-height: 600vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3000px;
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
</style>
