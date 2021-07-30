<template>
  <div>

        <!-- Navbar Acquisto -->
    <navbarBuy
    :name="$t('navBuy.biolifting')"
    link="/"
    ></navbarBuy>


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
          <!-- Illustration One -->
          <div class="">
            <img
              src="~/assets/img/biolifting/illustration1.svg"
              alt=""
              class="mx-auto"
              width="200px"
              height="auto"
            />
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
            <img
              src="~/assets/img/biolifting/illustration2.svg"
              alt=""
              class="mt-20 mx-auto"
              width="200px"
              height="auto"
            />
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
  components: {
    navbarBuy,
  },
};
</script>

<style lang="scss" scoped>


</style>