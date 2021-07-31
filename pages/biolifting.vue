<template>
  <div>
    <!-- Navbar Acquisto -->
    <navbarBuy :name="$t('navBuy.biolifting')" link="/"></navbarBuy>

    <!-- Container -->
    <div class="container-fluid mx-auto grid">
      <!-- Video or GIF -->
      <div class="videoDemoPage borderbottomred grid">
        <video
          class="mx-auto"
          src="~/assets/videos/DemoBiolifting.mp4"
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
          <div class="text-red text-4xl font-bold uppercase">
            {{ $t("biolifting.info.title1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("biolifting.info.title2") }}
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
              {{ $t("biolifting.info.btnVideo") }}
            </div>
          </nuxt-link>
        </div>

        <!-- Seconda Parte -->
        <div class="text-left my-10 text-center">
          <div class="text-red text-2xl font-bold">
            {{ $t("biolifting.info2.content1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("biolifting.info2.content2") }} <br />
            {{ $t("biolifting.info2.content3") }}
          </div>
        </div>

        <!-- Terza Parte -->
        <div class="text-center my-16">
          <div
            class="text-red text-2xl font-normalmx-auto max-w-sm md:text-2xl"
          >
            {{ $t("biolifting.info3.content1") }}
          </div>
        </div>
      </div>
      <!--** Fine Sezione info** -->

      <!-- Sezione Illustrazioni -->
      <div class="grid text-center self-center">
        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainer">
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
        <div class="box_Illustrazioni_content flex grid text-center">
          <!-- Contenitore Illustration One -->
          <div class="">
            <!-- Illustration One -->
            <div class="">
              <!-- <img
              src="~/assets/img/biolifting/illustration1.svg"
              alt=""
              class="mx-auto"
              width="200px"
              height="auto"
            /> -->
              <svg
                class="mx-auto"
                width="200px"
                height="auto"
                viewBox="0 0 186 183"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M139.656 106.631C133.178 126.091 121.761 141.705 108.707 151.274C95.6444 160.849 81.2225 164.213 68.3512 159.929C55.4799 155.644 45.9516 144.308 41.234 128.814C36.5194 113.331 36.7377 93.989 43.2154 74.529C49.6931 55.0691 61.1104 39.4554 74.1644 29.8863C87.2266 20.3114 101.648 16.947 114.52 21.2315C127.391 25.516 136.919 36.8527 141.637 52.3461C146.352 67.8298 146.133 87.1714 139.656 106.631Z"
                  stroke="#AF384F"
                  stroke-width="7"
                />
                <circle cx="91.0981" cy="90.2428" r="35.0896" fill="#D16A7D" />
                <circle cx="91.0981" cy="90.2428" r="16.1952" fill="#FFD2D2" />
                <path
                  id="illustrationline1"
                  class="classillustrationline1"
                  d="M45.8865 20.7383L61.4069 6.23007L57.0207 18.3765L74.9029 3.86827"
                  stroke="#AF384F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <!-- Linea Animata 1 -->
                <path
                  id="illustrationline1"
                  class="classillustrationline1"
                  d="M167.55 90.9743L166.221 69.7704L172.807 80.8791L172.98 57.8523"
                  stroke="#AF384F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <!--////Linea Animata 1 -->
                <path
                  id="illustrationline1"
                  class="classillustrationline1"
                  d="M15.3618 148.605L8.5651 128.476L17.8128 137.49L11.9922 115.21"
                  stroke="#AF384F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  id="illustrationline1"
                  class="classillustrationline1"
                  d="M113.552 180.655L126.363 163.707L124.118 176.425L139.256 159.072"
                  stroke="#AF384F"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="84.3501"
                  cy="81.4703"
                  r="1.3496"
                  fill="#D16A7D"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="97.1713"
                  cy="99.69"
                  r="1.3496"
                  fill="#D16A7D"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="83.3379"
                  cy="92.6046"
                  r="1.687"
                  fill="#D16A7D"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="89.7485"
                  cy="86.8688"
                  r="2.0244"
                  fill="#D16A7D"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="93.7972"
                  cy="92.942"
                  r="1.3496"
                  fill="#D16A7D"
                />
                <circle
                  class="origin-center"
                  id="illustrationcircle1"
                  cx="98.8584"
                  cy="84.507"
                  r="2.3618"
                  fill="#D16A7D"
                />
              </svg>
            </div>
            <div class="text-red font-bold text-2xl my-3 mx-auto text-center">
              {{ $t("biolifting.illustration.one.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("biolifting.illustration.one.content") }}
            </div>
          </div>
          <!-- Illustration  Two -->
          <div class="mt-26">
            <!-- <img
              src="~/assets/img/biolifting/illustration2.svg"
              alt=""
              class="mt-20 mx-auto"
              width="200px"
              height="auto"
            /> -->

            <div class="mt-20">
              <svg
                class="mx-auto"
                width="200px"
                height="auto"
                viewBox="0 0 178 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  class="origin-left"
                  id="illustrationtwoellipse"
                  cx="23.5"
                  cy="43.6879"
                  rx="11.0741"
                  ry="15.6138"
                  transform="rotate(18.4112 23.5 43.6879)"
                  fill="#D16A7D"
                />
                <ellipse
                  class="origin-left"
                  id="illustrationtwoellipse"
                  cx="83.4387"
                  cy="44.3122"
                  rx="14.7486"
                  ry="20.7947"
                  transform="rotate(18.4112 83.4387 44.3122)"
                  fill="#D16A7D"
                />
                <ellipse
                  class="origin-left"
                  id="illustrationtwoellipse"
                  cx="148.561"
                  cy="45.3884"
                  rx="21.9059"
                  ry="27.4004"
                  transform="rotate(18.4112 148.561 45.3884)"
                  fill="#D16A7D"
                />
                <path
                  d="M3 77.4172C35.9847 74.1754 115.563 76.3536 162 87.0001"
                  stroke="#AF384F"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 12C39.4847 15.2417 115.563 13.6463 162 2.99975"
                  stroke="#AF384F"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div
              class="text-red font-bold text-2xl w-64 my-3 mx-auto text-center"
            >
              {{ $t("biolifting.illustration.two.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("biolifting.illustration.two.content") }}
            </div>
          </div>
          <!-- Illustration  Three-->
          <div class="mt-26 mb-16">
            <img
              src="~/assets/img/biolifting/illustration3.svg"
              alt=""
              class="mt-20 mx-auto"
              width="200px"
              height="auto"
            />
            <div class="text-red font-bold text-2xl my-3 mx-auto text-center">
              {{ $t("biolifting.illustration.three.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("biolifting.illustration.three.content") }}
            </div>
          </div>
        </div>
        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainer">
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
      <!-- **Fine sezione content illutrazioni** -->

      <!-- Button Acquista Ora -->
      <div class="mx-auto my-16">
        <nuxt-link :to="localePath('/')">
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

      <div
        class="w-32 bg-red-900 mx-auto m-16 p-5"
        id="illustrationline1"
      ></div>

      <!-- Footer -->
      <div class="footerLaser grid flex text-2xl mt-16">
        <div class="self-center text-red">Footer</div>
      </div>
    </div>
    <!-- Container Page -->
  </div>
</template>



<script>
import navbarBuy from "@/components/navbarBuy.vue";
var t1;
export default {
  data() {
    return {};
  },
  mounted() {
    t1 = this.$anime({
      targets: "#illustrationline1",
      translateX: ["0px", "-2px"],
      translateY: ["0px", "2px"],
      rotate: ["0deg", "-2deg"],
      /*translateX: () => {
        return this.$anime.random(0, 4);
      },
      translateY: () => {
        return this.$anime.random(0, 4);
      },
      rotate: () => {
        return this.$anime.random(0, 4);
      },*/
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 700,
      complete: () => {},
    });

    this.$anime({
      targets: "#illustrationcircle1",
      scale: ["60%", "100%"],
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 1000,
      complete: () => {},
    });

    this.$anime({
      targets: "#illustrationtwoellipse",
      scale: ["60%", "100%"],
      //left: ["80%", "100%"],
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 2000,
      complete: () => {},
    });
  },
  methods: {},
  components: {
    navbarBuy,
  },
};
</script>

<style lang="scss" scoped>
.classillustrationline1 {
  transform: translate(5px);
}
</style>