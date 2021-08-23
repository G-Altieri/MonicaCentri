<template>
  <div>
    <!-- Navbar Acquisto -->
    <navbarBuy :name="$t('navBuy.fotoepilazione')" link="/"></navbarBuy>

    <!-- Container -->
    <div class="container-fluid mx-auto grid">
      <!-- Video or GIF -->
      <div class="videoDemoPage borderbottomred grid">
        <video
          class="mx-auto"
          src="~/assets/videos/DemoLaser.mp4"
          type="video/mp4"
          autoplay
          loop
          muted
          playsinline
        ></video>
      </div>

      <!-- Sezione di info -->
      <div class="grid text-center justify-center self-center">
        <!-- Prima parte -->
        <div class="text-left my-10 justify-self-center">
          <div class="text-red text-3xl font-bold uppercase">
            {{ $t("laser.info.title1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("laser.info.title2") }}
          </div>
        </div>

        <!-- Button Video -->
        <div class="mx-auto my-6">
          <nuxt-link :to="localePath('/')">
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
              {{ $t("laser.info.btnVideo") }}
            </div>
          </nuxt-link>
        </div>

        <!-- Seconda Parte -->
        <div class="text-left my-10 text-center">
          <div class="text-red text-2xl font-bold">
            {{ $t("laser.info2.content1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("laser.info2.content2") }} <br />
            {{ $t("laser.info2.content3") }}
          </div>
        </div>

        <!-- Terza Parte -->
        <div class="text-center my-16">
          <div
            class="text-red text-2xl font-normalmx-auto max-w-sm md:text-2xl"
          >
            {{ $t("laser.info3.content1") }}
          </div>
        </div>
      </div>
      <!--** Fine Sezione info** -->

      <!-- Sezione Illustrazioni -->
      <div class="grid text-center self-center ">
        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainerLaser transform1pxY">
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

        <!-- Box content Illustrazioni -->
        <div class="box_Illustrazioni_content flex grid text-center lg:grid-cols-3 pt-1">
          <!-- Illustration One -->
          <div class="mt-32">
            <div>
              <!-- <img
              src="~/assets/img/laser/illustration1.svg"
              alt=""
              class="mx-auto"
              width="125px"
              height="auto"
            /> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 283.27 342.71"
                class="mx-auto"
                width="125px"
                height="auto"
              >
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_1-2" data-name="Livello 1">
                    <rect
                      x="135.01"
                      y="-1.78"
                      width="15.4"
                      height="31.19"
                      rx="3.44"
                      transform="translate(73.63 -111.83) rotate(55.67)"
                      style="fill: #d16a7d"
                    />
                    <path
                      d="M232.87,239.28c5.29-6.95,49.33-73.36,49.33-73.36s3.79-3.54-2.9-14.75c-.64-1.06-1.51-2.75-2.59-4.95a352.16,352.16,0,0,0-37.65,63.27c-3.22,6.49-6.65,12.66-10.19,19.38-2.19,4.36-4.44,8.85-6.21,13.45C224.59,243.27,228.92,244.49,232.87,239.28Z"
                      style="fill: #d16a7d"
                    />
                    <path
                      d="M239.06,209.49a352.16,352.16,0,0,1,37.65-63.27c-10.29-20.9-39.9-88.89-75.1-128.42,0,0-4.65-4-12.18-1.72,0,0-17.17-8.35-19.36-8.76s-5.27-.71-9.93,2.95S119.89,33.94,115.35,49s-8.84,22.76-8.84,22.76-7,7.19-5.63,14.84c0,0,27.47,57.73,35.24,67.71,0,0-42,26.71-31.56,46.89l-85.2,79.22a29.21,29.21,0,0,1,5.05,3.95,467.06,467.06,0,0,1,34.12,40.93c33.75-30,106.11-93.28,117.15-94.51,14.21-1.58,20.46-6.09,45.94,10.93a6.66,6.66,0,0,0,1,.61c1.77-4.6,4-9.09,6.21-13.45C232.41,222.15,235.84,216,239.06,209.49Z"
                      style="fill: #b13850"
                    />
                    <path
                      d="M19.36,280.41,1.94,296.6s-3.14,3.11-1.43,4.56l34.94,40.67s1.79,2.61,5.9-1.16c.93-.84,7.45-6.73,17.18-15.38a467.06,467.06,0,0,0-34.12-40.93A29.21,29.21,0,0,0,19.36,280.41Z"
                      style="fill: #d16a7d"
                    />
                    <circle
                      cx="150.6"
                      cy="146.81"
                      r="6.32"
                      style="fill: #d16a7d"
                    />
                    <rect
                      x="158.04"
                      y="101.38"
                      width="84.49"
                      height="56.45"
                      rx="28.22"
                      transform="translate(194.37 -108.88) rotate(55.67)"
                      style="fill: #fff"
                    />
                    <path
                      id="illustrationonelinestroke"
                      d="M191.3,98c4.37,6.4-16.75,20.82-12.38,27.22s25.48-8,29.85-1.63S192,144.39,196.39,150.79s25.49-8,29.86-1.63"
                      style="
                        fill: none;
                        stroke: #b13850;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                        stroke-width: 5px;
                      "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.one.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("laser.illustration.one.content") }}
            </div>
          </div>
          <!-- Illustration  Two -->
          <div class="mt-32">
            <img
              src="~/assets/img/laser/illustration2.svg"
              alt=""
              id="illustrationtwoice"
              class=" mx-auto"
              width="125px"
            />
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.two.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("laser.illustration.two.content") }}
            </div>
          </div>
          <!-- Illustration  Three-->
          <div class="mt-32 mb-16">
            <!-- <img
              src="~/assets/img/laser/illustration3.svg"
              alt=""
              class="mt-20 mx-auto"
              width="125px"
              height="auto"
            /> -->
            <div>
              <svg
                class="mt-20 mx-auto"
                width="125px"
                height="auto"
                viewBox="0 0 477 106"
              >
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_1-2" data-name="Livello 1">
                    <rect
                      y="68"
                      width="477"
                      height="38"
                      rx="5.29"
                      style="fill: #b13850"
                    />
                    <line
                      id="illustrationtwopelle"
                      x1="90"
                      y1="48.5"
                      x2="387"
                      y2="48.5"
                      style="
                        fill: none;
                        stroke: #d16a7d;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                        stroke-width: 5px;
                      "
                    />
                    <line
                      id="illustrationtwopelle"
                      x1="90"
                      y1="25.5"
                      x2="387"
                      y2="25.5"
                      style="
                        fill: none;
                        stroke: #d16a7d;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                        stroke-width: 5px;
                      "
                    />
                    <line
                      id="illustrationtwopelle"
                      x1="90"
                      y1="2.5"
                      x2="387"
                      y2="2.5"
                      style="
                        fill: none;
                        stroke: #d16a7d;
                        stroke-linecap: round;
                        stroke-miterlimit: 10;
                        stroke-width: 5px;
                      "
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.three.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("laser.illustration.three.content") }}
            </div>
          </div>
        </div>
        <!-- **Fine sezione content illutrazioni** -->

        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainerLaser">
          <svg
            viewBox="0 0 375 210"
            class="relative"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M196.261 184.617C270.24 169.196 347.462 198.885 376 210L376 102L9.44166e-06 102L7.09212e-06 128.876C41.5553 169.189 74.5 210 196.261 184.617Z"
              fill="#AF384F"
            />
            <path
              d="M187.5 163C277 154 337.127 176.551 376 191L376 50L1.23266e-05 50L6.19886e-06 120.093C102 120.093 98 172 187.5 163Z"
              fill="#D16A7D"
            />
            <path
              d="M181.5 125.5C253.461 179.471 337.127 126.551 376 141L376 4.57764e-05L1.31451e-05 1.29054e-05L4.7088e-06 96.5001C34.5815 120.179 109.5 71.5 181.5 125.5Z"
              fill="#FED1D1"
            />
          </svg>
        </div>
      </div>
      <!--**  Sezione Illustrazioni **-->

      <!-- Button Acquista Ora -->
      <div class="mx-auto my-16">
        <nuxt-link :to="localePath('/lp')">
          <div
            class="
              BtnBuyNow
              text-white
              font-bold
              text-center
              btnShadow
              duration-300
            "
          >
            {{ $t("laser.BtnBuyNow") }}
          </div>
        </nuxt-link>
      </div>

      <!-- Footer -->
      <foter />
  
    </div> 
  </div>
</template>
<script>
import navbarBuy from "@/components/navbarBuy.vue";
import foter from "@/components/footer.vue";

export default {
  data() {
    return {};
  },
  computed: {
    MediaQuery() {
      switch (this.$mq) {
        case "sm":
          return "mobile";
        case "md":
          return "tablet";
        case "prelg":
          return "pc";
        case "lg":
          return "pc";
      }
    },
  }, //computed
  mounted() {
    //Illustration 2 Ice
    this.$anime({
      targets: "#illustrationtwoice",
      // scale: ["70%", "110%"],
      rotate: "360deg",
      easing: "linear",
      direction: "normal",
      autoplay: true,
      loop: true,
      duration: 15000,
      complete: () => {},
    });
    //Illustration 3 Pelle
    this.$anime({
      targets: "#illustrationtwopelle",
      //scale: ["80%", "100%"],
      //rotate: "360deg",
     // opacity:["100%","50%"],
      translateY:["-40px","20px"],
      easing: "linear",
      //direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 3000,
      delay: this.$anime.stagger(100),
      complete: () => {},
    });
  },
  components: {
    navbarBuy,
    foter,
  },
};
</script>
<style lang="scss" scoped>
.bg_illustrationContainerLaser {
  position: relative;
  margin: 0;
  padding: 0;
  //	background: #57ca7b;
  width: 100%;
  //	height: 100vh;
}

.bg_illustrationFooter {
  /*position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;*/
  position: relative;
  //   bottom: 0;
  //  width: 100%;
  //   height: auto;
  transform: scale(-1);
}

.videoLaser {
  background: white;
  // background: #fad1d2;
  // background: #b13850;
  // height: 800px;
  margin-top: 104px;
  border-bottom: solid 10px #b13850;
}
.borderVideoLaser {
  border-bottom: solid 10px #b13850;
}
.navBuy {
  top: 56px;
  z-index: 50;
  background: #b13850;
}
.container {
  top: 104px;
  position: relative;
}
.btnBuy {
  background: #306bb3;
  //width: 100px;
  // padding: 10px;
  border-radius: 25px;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
}
.footerLaser {
  position: relative;
  background: #d8d8d8;
  bottom: 0;
  width: 100%;
  height: 110px;
  text-align: center;
}

#illustrationonelinestroke {
  stroke-dasharray: 130;
  stroke-dashoffset: 1172;
  animation: illustrationonelinestrokeanime 40s linear forwards infinite;
}

@keyframes illustrationonelinestrokeanime {
  to {
    stroke-dasharray: 130;
    stroke-dashoffset: 0;
  }
}

#illustrationtwoice {
  transform-origin: center;
}
#illustrationtwopelle {
  transform-origin: bottom;
}
</style>