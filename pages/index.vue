<template>
  <!-- div generale -->
  <div>
    <!-- Video or GIF -->
    <div class="grid" style="padding-top: 56px">
      <!-- <video
        class="mx-auto"
        src="~/assets/videos/cosmetici.mp4"
        type="video/mp4"
        autoplay
        loop
        muted
        playsinline
        width="100%"
        style="max-height: 500px; background: #af384f"
      ></video> -->
    </div>

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
    <div class="bg-header">
      <!-- Box Carta con render -->
      <div class="box-card z-20">
        <nuxt-link :to="localePath('/card')">
          <img
            class="imgRenderCarta2"
            src="~/assets/img/home/render-carta.jpg"
            alt=""
            width="100%"
            height="100%"
            loading="lazy"
          />
        </nuxt-link>
      </div>

      <!-- Containet Body Page -->
      <div class="grid mx-auto container-fluid ContainerBoxHome" style="">
        <!-- Button Contatti -->
        <div class="mx-auto my-6 mb-12">
          <nuxt-link :to="localePath('/lp')">
            <div
              class="
                btnVideo
                text-white
                p-2
                px-3
                font-bold
                uppercase
                text-sm
                w-max
                btnShadow
                duration-300
              "
            >
              {{ $t("home.contattaci") }}
            </div>
          </nuxt-link>
        </div>

        <!-- Box home con i vari servizi -->
        <div class="containerBoxHome grid grid-col-1 gap-12 uppercase">
          <!-- Box Laser 1 -->
          <div class="BoxHome duration-300 shadow-lg">
            <nuxt-link :to="localePath('/laser')">
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
                  loading="lazy"
                />
              </div>
            </nuxt-link>
          </div>

          <!-- Box Biolifting 2 -->
          <nuxt-link :to="localePath('/biolifting')">
            <div class="BoxHome duration-300 shadow-lg">
              <div
                class="titleBoxHome text-3xl font-semibold text-left pt-2 pl-5"
              >
                <h4>
                  {{ $t("navBuy.biolifting") }}
                </h4>
                <picture>
                  <source
                    type="image/webp"
                    srcset="~/assets/img/home/box/boxBiolifting.webp"
                  />
                  <img
                    src="~/assets/img/home/box/boxBiolifting.jpg"
                    alt="biolifting"
                    class="BoxHomeBiolifting"
                    style="
                      transform: translate(-12px, -35px);
                      width: 300px;
                      height: 300px;
                      position: absolute;
                      z-index: -1;
                      border-radius: 14px;
                    "
                  />
                </picture>
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
                <picture>
                  <source
                    type="image/webp"
                    srcset="~/assets/img/home/box/boxPuliziaEvo.webp"
                  />
                  <img
                    loading="lazy"
                    src="~/assets/img/home/box/boxPuliziaEvo.jpg"
                    alt="pulizia evolution"
                    class="BoxHomePuliziaEvo"
                    style="
                      transform: translate(-20px, -53px);
                      width: 300px;
                      height: 300px;
                      position: absolute;
                      z-index: -1;
                      border-radius: 14px;
                    "
                  />
                </picture>
              </div>
            </div>
          </nuxt-link>
          <!-- Box Laser 3 -->

          <!-- Box Mai+Xl 4 -->
          <div class="BoxHome duration-300 shadow-lgX">
            <nuxt-link :to="localePath('/mai+xl')">
              <div class="">
                <!-- <h4>
                {{ $t("navBuy.maipiuxl") }}
              </h4> -->
                <img
                  loading="lazy"
                  src="~/assets/img/home/box/mai+xl2.svg"
                  alt="maipiuxl"
                  class="BoxHomeMaipiuxl"
                  style="transform: scale(1.005)"
                  width="100%"
                  height="100%"
                />
              </div>
            </nuxt-link>
          </div>
        </div>
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
                :webp="true"
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

      <!-- Bg Header Sezione Monica-->
      <div
        class="bg_illustrationContainer relative grid mt-40"
        :style="
          'margin-top:' + topPostReview + '; transform: translateY(-1px);'
        "
      >
        <!-- Banner 1 -->
        <div class="w-full borderBanner"></div>
        <!--// Banner 1 -->
        <!--Container MOnica -->
        <div class="containerMonica transform1pxYZ">
          <!--title -->
          <div class="titleMonica p-8">Monica Sciascia</div>
          <!-- Onda Svg Img Monica 
          <div>
            <svg
              width="100%"
              height="auto"
              viewBox="0 0 375 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M387.337 88.6911L389.327 115.69L314.954 105.081L106.739 131.706L-55.8983 109.391L-61.5456 32.7899C131.987 196.511 289.721 40.8949 387.337 88.6911Z"
                fill="#AF384F"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M188.637 128.526C252.488 115.692 315.109 103.106 389.988 124.654L389.146 113.236C319.461 93.1824 269.166 101.878 215.808 111.103C146.372 123.107 71.7485 136.009 -57.5425 87.6207L-54.933 123.016C41.2386 158.151 115.739 143.177 188.637 128.526Z"
                fill="#D16A7D"
              />
            </svg>
          </div>-->
          <!-- Img Monica -->
          <div class="imgMonica mx-auto mb-12" v-if="pc">
            <img
              loading="lazy"
              src="~/assets/img/home/monica.png"
              class="mx-auto"
              width="100%"
              height="auto"
              alt="Monica Sciscia"
            />
          </div>
          <div class="imgMonica mx-auto mb-12" v-else>
            <img
              loading="lazy"
              src="~/assets/img/home/onlyMonica.png"
              class="mx-auto"
              width="450px"
              alt="Monica Sciscia"
            />
          </div>
          <!--// Img Monica -->
          <!-- Content Monica -->
          <div class="contentMonica p-8" style="max-width: 620px; margin: auto">
            {{ $t("home.contentMonica") }}
          </div>
          <br />
          <!-- Button guarda Video -->
          <div
            class="mx-auto my-16 cursor-pointer"
            @click="btnvideo = !btnvideo"
            v-if="!btnvideo"
          >
            <!-- <nuxt-link :to="localePath('/lp')"> -->
            <div
              class="
                btnVideo
                text-white
                p-2
                px-3
                font-bold
                uppercase
                text-sm
                w-max
                btnShadow
                duration-300
                mx-auto
              "
              style="
                background: #af384f;

                border-radius: 80px;
              "
            >
              {{ $t("laser.info.btnVideo") }}
            </div>
            <!-- </nuxt-link> -->
          </div>

          <!-- Frame Video  -->
          <div v-else class="my-6">
            <iframe
              class="mx-auto"
              width="300px"
              height="540px"
              src="https://www.youtube.com/embed/3nkYsn4GHgU?rel=0"
              title="Chi è Monica Sciascia?"
              frameborder="0"
              playsinline="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div
              class="
                text-md
                font-light
                mx-auto
                cursor-pointer
                text-red text-center
                my-4
              "
              @click="btnvideo = !btnvideo"
            >
              {{ $t("home.nascondiVideo") }}
            </div>
          </div>
          <!-- Frame Video ////**** */ -->

          <!--//Content Monica -->
          <!--//title -->
        </div>
        <!--Banner 2 -->
        <div class="w-full borderBanner"></div>
        <!--//Container MOnica -->
        <!--// Banner 2 -->

        <!-- Sezione Contatti -->
        <div class="grid grid-rows-1 w-full">
          <!-- Icone Social -->
          <div
            class="
              gird
              grid-cols-3
              text-center
              mx-auto
              my-12
              justify-items-stretch
            "
          >
            <!-- Button Contatti -->
            <div class="mx-auto my-6 mb-12 justify-self-center">
              <nuxt-link :to="localePath('/lp')">
                <div
                  class="
                    btnVideo
                    text-white
                    p-2
                    px-3
                    font-bold
                    uppercase
                    text-sm
                    w-max
                    btnShadow
                    duration-300
                    mx-auto
                  "
                >
                  {{ $t("home.contattaci") }}
                </div>
              </nuxt-link>
            </div>

            <!-- Number 1 -->
            <div
              class="
                font-medium
                text-xl
                my-4
                cursor-point
                justify-self-center
                text-red
              "
            >
              <a href="tel:+393348529048"> +39 334 8529 048 </a>
            </div>
            <!-- Number 2 -->
            <div
              class="
                font-medium
                text-xl
                my-4
                cursor-point
                justify-self-center
                text-red
              "
            >
              <a href="tel:+393920748016"> +39 392 0748 016 </a>
            </div>
            <!-- Number email -->
            <div
              class="
                font-medium
                text-xl
                mt-4
                cursor-point
                justify-self-center
                text-red
                cursor-pointer
              "
              @click="copyEmail()"
            >
              info@monicacentri.com
            </div>
          </div>

          <!-- Button Contatti per whatapp -->
          <div class="mx-auto my-0 mb-12 justify-self-center">
            <a
              href="https://wa.me/393348529048?text=Posso%20prenotare%20una%20consulenza%20gratuita%20?"
            >
              <div
                style="border-radius: 25px"
                class="
                  text-white
                  p-2
                  px-3
                  font-bold
                  uppercase
                  text-sm
                  w-max
                  btnShadow
                  duration-300
                  mx-auto
                  flex flex-inizial
                  items-center
                  bg-green-500
                "
              >
                {{ $t("home.contattaciwa") }}
                <svg
                  viewBox="0 0 32 32"
                  class="whatsapp-ico flex flex-auto items-center"
                  width="32px"
                >
                  <path
                    d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                    fill="white"
                  ></path>
                </svg>
              </div>
            </a>
          </div>

          <!--Maps Mobile -->
          <div class="" v-if="!tablet">
            <!-- Vasto -->
            <div
              class="w-full"
              style="
                height: 200px;
                border-bottom-width: 3px;
                border-color: #af384f;
                border-top-width: 3px;
              "
            >
              <a href="https://goo.gl/maps/vThDdXbFEzEKLxC4A" target="_blank">
                <img
                  src="~/assets/img/home/mapsVasto.jpg"
                  alt="Maps Vasto"
                  width="100%"
                  height="250"
                />
              </a>
            </div>
            <!-- Lentella -->
            <div
              class="w-full mt-4"
              style="
                height: 200px;
                border-bottom-width: 3px;
                border-color: #af384f;
                border-top-width: 3px;
              "
            >
              <a
                href="https://goo.gl/maps/8hFu63hQ2fTvaZbe9"
                target="_blank"
              >
                <img
                  src="~/assets/img/home/mapsLentella.jpg"
                  alt="Maps Lentella"
                  width="100%"
                height="250"
                />
              </a>
            </div>
          </div>
          <!-- Maps Tablet e PC -->
          <div v-else>
            <!-- Maps 1 Vasto -->
            <div class="my-4">
              <div class="text-red text-xl font-bold text-center mb-4">
                Le nostre Sedi
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1613.781484724213!2d14.707024747132175!3d42.114146171597504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330dd829f451e95%3A0x85fc03ffee8a20a1!2sMonica%20Centri!5e0!3m2!1sit!2sit!4v1631218877360!5m2!1sit!2sit"
                width="100%"
                height="200"
                allowfullscreen=""
                loading="lazy"
                style="
                  border-bottom-width: 3px;
                  border-color: #af384f;
                  border-top-width: 3px;
                "
              ></iframe>
            </div>
            <!-- Maps 1 Vasto -->
            <div class="mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1110.6860100472036!2d14.677201325397194!3d41.99651782375736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1330c3c74e2a8b55%3A0xd1e82ab38ba62883!2sMonica%20Centri!5e0!3m2!1sit!2sit!4v1631305511159!5m2!1sit!2sit"
                width="100%"
                height="200"
                allowfullscreen=""
                loading="lazy"
                style="
                  border-bottom-width: 3px;
                  border-color: #af384f;
                  border-top-width: 3px;
                "
              ></iframe>
            </div>
            <!-- V-else -->
          </div>
        </div>
        <!-- Sezione Contatti//**** */ -->
      </div>
      <!-- div generale -->
      <foter style="transform: translateY(500px)" :home="true" />
    </div>
    <!-- header grid -->
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
      btnvideo: false,
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

    copyEmail() {
      //Creating textarea element
      let textarea = document.createElement("textarea");
      //Settings its value to the thing you want to copy
      //textarea.value = this.$refs.asd.innerText;
      textarea.value = "info@monicacentri.com";
      //Appending the textarea to body
      document.body.appendChild(textarea);
      //Selecting its content
      textarea.focus();
      textarea.select();
      //Copying the selected content to clipboard
      document.execCommand("copy");
      //Removing the textarea
      document.body.removeChild(textarea);
    },
  },
  mounted() {},
  components: {
    gbutton,
    clientReview,
    VueSlickCarousel,
    foter,
  },
  computed: {
    topPostReview() {
      switch (this.$mq) {
        case "sm":
          return "200px";
        case "md":
          return "250px";
        case "lg":
          return "300px";
      }
    },
    pc() {
      switch (this.$mq) {
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
      }
    },
    tablet() {
      switch (this.$mq) {
        case "sm":
          return false;
        case "md":
          return true;
        case "lg":
          return true;
      }
    },
  },
};
</script>

<style scope>
.contentMonica {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
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
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  top: 0px;
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
  height: 300px;
}

/* Header */
.box-card {
  /* background: white;*/
  border-radius: 15px;
  width: 236px;
  height: 364px;
  margin: 0 auto;
  position: relative;
}
.imgRenderCarta2 {
  width: 236px;
  height: 364px;
  top: -30px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4);
  box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4);
  border-radius: 15px;
  position: relative;
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
  /* top: 2280px;*/
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
  /*background-color: white;*/
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
  top: 33px;
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
  top: 500px;
}
.containerMonica {
  background-color: #ffd2d2;
  width: 100%;
  height: auto;
  /* padding: 2rem;*/
}

/*
1 freccietta che va giu aggiustare iphoe
*/
</style>


