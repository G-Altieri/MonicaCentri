<template>
  <div>
    <!-- Navbar Acquisto -->
    <navbarBuy :name="$t('navBuy.puliziaevo')" link="/"></navbarBuy>

    <!-- Container -->
    <div class="container-fluid mx-auto grid">
      <!-- Video or GIF -->
      <div class="videoDemoPage borderbottomred grid">
        <video
          class="mx-auto"
          src="~/assets/videos/Demopuliziaevo.mp4"
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
            {{ $t("puliziaevo.info.title1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("puliziaevo.info.title2") }}
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
              {{ $t("puliziaevo.info.btnVideo") }}
            </div>
          </nuxt-link>
        </div>

        <!-- Seconda Parte -->
        <div class="text-left my-10 text-center">
          <div class="text-red text-2xl font-bold">
            {{ $t("puliziaevo.info2.content1") }}
          </div>
          <div class="text-pink text-2xl font-bold">
            {{ $t("puliziaevo.info2.content2") }} <br />
            {{ $t("puliziaevo.info2.content3") }}
          </div>
        </div>

        <!-- Terza Parte -->
        <div class="text-center my-16">
          <div
            class="text-red text-2xl font-normalmx-auto max-w-sm md:text-2xl"
          >
            {{ $t("puliziaevo.info3.content1") }}
          </div>
        </div>
      </div>
      <!--** Fine Sezione info** -->

      <!-- Sezione Illustrazioni -->
      <div class="grid text-center self-center">
        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainer transform1pxY ">
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
          <div class="">
            <div class="">
              <svg
                class="mx-auto"
                width="200px"
                height="auto"
                alt="Pulizia Profonda Illustration"
                viewBox="0 0 186 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.032C0 4.78168 4.71613 0.78903 9.89446 1.65539V1.65539C64.9158 10.8607 121.084 10.8607 176.106 1.65539V1.65539C181.284 0.78903 186 4.78168 186 10.032V68H0V10.032Z"
                  fill="#D16A7D"
                />
                <path
                  d="M152.983 30.2952L184.866 21.6536V79.1992H0.5V21.6536L32.3828 30.2952C71.8705 40.9982 113.495 40.9982 152.983 30.2952Z"
                  fill="#FFD2D2"
                  stroke="#D16A7D"
                />
                <path
                  d="M0.195068 45.3008L38.4216 58.9446C73.6379 71.5141 112.118 71.5141 147.334 58.9446L185.561 45.3008V86C185.561 95.9411 177.502 104 167.561 104H18.1951C8.25396 104 0.195068 95.9411 0.195068 86V45.3008Z"
                  fill="#AF384F"
                />
                <circle
                  cx="8"
                  cy="37"
                  r="2"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="31"
                  cy="40"
                  r="3"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="48"
                  cy="52"
                  r="3"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="70"
                  cy="48"
                  r="4"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="97.5"
                  cy="57.5"
                  r="4.5"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="124.5"
                  cy="46.5"
                  r="2.5"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="150.5"
                  cy="48.5"
                  r="3.5"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
                <circle
                  cx="173.5"
                  cy="35.5"
                  r="2.5"
                  fill="#D16A7D"
                  id="illustrationonecircle1"
                />
              </svg>
            </div>

            <div
              class="text-red font-bold text-2xl my-3 mt-6 mx-auto text-center"
            >
              {{ $t("puliziaevo.illustration.one.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("puliziaevo.illustration.one.content") }}
            </div>
          </div>
          <!-- Illustration  Two -->
          <div class="my-20 lg:my-0">
            <div class="">
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
            <div
              class="
                text-red
                font-bold
                text-2xl
                w-64
                my-3
                mt-6
                mx-auto
                text-center
              "
            >
              {{ $t("puliziaevo.illustration.two.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("puliziaevo.illustration.two.content") }}
            </div>
          </div>

          <!-- Illustration  Three-->
          <div class="mb-16">
       
            <div>
              <svg
                alt="Trattamento Specifico illustration"
                class="mx-auto"
                width="200px"
                height="180px"
                viewBox="0 0 149 118"
                fill="none"
              >
                <path
                         id="illustrationthreelente"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M137.865 51C137.865 73.0914 119.956 91 97.8648 91C75.7734 91 57.8648 73.0914 57.8648 51C57.8648 28.9086 75.7734 11 97.8648 11C119.956 11 137.865 28.9086 137.865 51ZM148.865 51C148.865 79.1665 126.031 102 97.8648 102C82.336 102 68.4283 95.0597 59.0741 84.1117L58.5748 84.4385L10.0605 116.193C7.05688 118.159 3.02818 117.318 1.06217 114.314C-0.903833 111.311 -0.0626679 107.282 2.94097 105.316L51.4553 73.5614L51.954 73.235C48.6934 66.5148 46.8648 58.971 46.8648 51C46.8648 22.8335 69.6982 0 97.8648 0C126.031 0 148.865 22.8335 148.865 51Z"
                  fill="#AF384F"
                />
                <path
                id="illustrationthreeglass"
                
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M79.5007 50.507L79.538 50.4697C88.8958 49.8812 96.382 42.395 96.9704 33.0373L97.0077 33L97.045 33.0373C97.6335 42.395 105.12 49.8812 114.477 50.4697L114.515 50.507L114.477 50.5442C105.12 51.1326 97.6334 58.6189 97.045 67.9767L97.0077 68.0139L96.9704 67.9767C96.382 58.6189 88.8958 51.1327 79.538 50.5442L79.5007 50.507Z"
                  fill="#AF384F"
                />
              </svg>
            </div>
            <div
              class="text-red font-bold text-2xl my-3 mt-8 mx-auto text-center"
            >
              {{ $t("puliziaevo.illustration.three.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-md text-center wMax-18"
            >
              {{ $t("puliziaevo.illustration.three.content") }}
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
            {{ $t("puliziaevo.BtnBuyNow") }}
          </div>
        </nuxt-link>
      </div>

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

export default {
  data() {
    return {};
  },
  mounted() {
    this.$anime({
      targets: "#illustrationline1",
      translateX: ["0px", "-2px"],
      translateY: ["0px", "2px"],
      rotate: ["0deg", "-2deg"],
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 700,
      complete: () => {},
    });

      //Illustration 1 pelle
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
      //Illustration 2 cellula
    this.$anime({
      targets: "#illustrationonecircle1",
      scale: ["63%", "100%"],
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 1500,
      complete: () => {},
    });
    //Illustration 3 Lente
    this.$anime({
      targets: "#illustrationthreeglass2",
      scale: ["70%", "110%"],
    // rotate:'360deg',
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 1500,
      complete: () => {},
    });
    //Illustration 3 Lente
    this.$anime({
      targets: "#illustrationthreelente",
       translateX: ["0px", "-5px"],
      translateY: ["0px", "5px"],
      rotate: ["0deg", "-5deg"],  
      easing: "easeInOutQuad",
      direction: "alternate",
      autoplay: true,
      loop: true,
      duration: 1500,
      complete: () => {},
    });
  },
  components: {
    navbarBuy,
  },
};
</script>

<style lang="scss" scoped>
#illustrationonecircle1 {
  transform-origin: top;
}
#illustrationthreeglass {
  transform-origin: 100px 50%;
}
</style>