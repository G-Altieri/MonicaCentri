<template>
  <div>
    <!-- Navbar Acquisto -->
    <div class="navBuy fixed w-full h-12 grid grid-cols-2">
      <div class="text-white text-left flex self-center ml-2 md:ml-5">
        {{ $t("navBuy.fotoepilazione") }}
      </div>
      <div
        class="text-white text-right flex justify-end self-center mr-2 md:mr-5"
      >
        <div class="btnBuy p-1 px-3">
          {{ $t("navBuy.buy") }}
        </div>
      </div>
    </div>

    <!-- Container -->
    <div class="container-fluid mx-auto grid">
      <!-- Video or GIF -->
      <div class="videoLaser grid">
        <div class="text-center self-center text-red text-2xl">Video</div>
      </div>

      <!-- Sezione di info -->
      <div class="grid text-center justify-center self-center">
        <!-- Prima parte -->
        <div class="text-left my-10 justify-self-center">
          <div class="text-red text-2xl font-bold uppercase">
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
              class="btnVideo text-white p-2 px-3 font-bold uppercase text-sm w-max btnShadow duration-300"
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
      <div class="grid text-center self-center">
        <!-- Bg Header Sezione Illustrazioni -->
        <div class="bg_illustrationContainer">
          <svg
            viewBox="0 0 414 85"
            xmlns="http://www.w3.org/2000/svg"
            class="relative"
          >
            <path
              d="M235 34.5C164.2 62.1 48.8333 23 0 0V18.5C19.5 28.5 139 69 249 47.5C337 30.3 395.667 62 414 80V55C383.833 36.6667 305.8 6.9 235 34.5Z"
              fill="#AF384F"
            />
            <path
              d="M210 50.2481C139.2 60.9669 40.5 32.5489 0 17V70.594L414 83V77.5414C355 31.391 298.5 36.8496 210 50.2481Z"
              fill="#D16A7D"
            />
            <path
              d="M205.252 60.1195C154.114 75.4151 47.1098 53.7463 0 41V121H414V82.2579C355.571 52.0692 269.175 41 205.252 60.1195Z"
              fill="#FFD2D2"
            />
          </svg>
        </div>

        <!-- Box content Illustrazioni -->
        <div class="box_Illustrazioni_content flex grid text-center">
          <!-- Illustration One -->
          <div class="">
            <img
              src="~/assets/img/laser/illustration1.svg"
              alt=""
              class="mt-20 mx-auto"
              width="125px"
              height="auto"
            />
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.one.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-xl text-center wMax-72"
            >
              {{ $t("laser.illustration.one.content") }}
            </div>
          </div>
          <!-- Illustration  Two -->
          <div class="mt-32">
            <img
              src="~/assets/img/laser/illustration2.svg"
              alt=""
              class="mt-20 mx-auto"
              width="125px"
              height="auto"
            />
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.two.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-xl text-center wMax-72"
            >
              {{ $t("laser.illustration.two.content") }}
            </div>
          </div>
          <!-- Illustration  Three-->
          <div class="mt-32 mb-16">
            <img
              src="~/assets/img/laser/illustration3.svg"
              alt=""
              class="mt-20 mx-auto"
              width="125px"
              height="auto"
            />
            <div
              class="text-red font-bold text-2xl w-36 my-3 mx-auto text-center"
            >
              {{ $t("laser.illustration.three.title") }}
            </div>
            <div
              class="text-pink font-normal mx-auto text-xl text-center wMax-72"
            >
              {{ $t("laser.illustration.three.content") }}
            </div>
          </div>
        </div>
        <!-- **Fine sezione content illutrazioni** -->

        <!-- Bg Footer Sezione Illustrazioni -->
        <div class="bg_illustrationContainer">
          <svg
            viewBox="0 0 414 85"
            xmlns="http://www.w3.org/2000/svg"
            class="bg_illustrationFooter"
          >
            <path
              d="M235 34.5C164.2 62.1 48.8333 23 0 0V18.5C19.5 28.5 139 69 249 47.5C337 30.3 395.667 62 414 80V55C383.833 36.6667 305.8 6.9 235 34.5Z"
              fill="#AF384F"
            />
            <path
              d="M210 50.2481C139.2 60.9669 40.5 32.5489 0 17V70.594L414 83V77.5414C355 31.391 298.5 36.8496 210 50.2481Z"
              fill="#D16A7D"
            />
            <path
              d="M205.252 60.1195C154.114 75.4151 47.1098 53.7463 0 41V121H414V82.2579C355.571 52.0692 269.175 41 205.252 60.1195Z"
              fill="#FFD2D2"
            />
          </svg>
        </div>
      </div>
      <!--**  Sezione Illustrazioni **-->

      <!-- Button Acquista Ora -->
      <div class="mx-auto my-16">
        <nuxt-link :to="localePath('/')">
          <div class="BtnBuyNow text-white font-bold text-center btnShadow duration-300">
            {{ $t("laser.BtnBuyNow") }}
          </div>
        </nuxt-link>
      </div>

      <!-- Footer -->
      <div class="footerLaser grid flex text-2xl mt-16">
        <div class="self-center text-red">Footer</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.BtnBuyNow {
  background: #b13850;
  padding: 10px;
  border-radius: 10px;
  width: 150px;
}

.bg_illustrationContainer {
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
.box_Illustrazioni_content {
  background: #ffd2d2;
}


.btnVideo {
  background: #b13850;
  border-radius: 25px;
}
.videoLaser {
  background: #fad1d2;
  height: 800px;
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
</style>