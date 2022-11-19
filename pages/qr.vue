<template>
  <div>
    <!-- Container di page -->
    <div class="h-screen bg-red-100 flex justify-center items-center">
      <div class="lg:w-2/5 md:w-4/5 w-11/12 relative">
        <div class="bg-white rounded-xl shadow-lg min-w-full">
          <!-- Intestazione -->
          <div class="flex justify-center items-center grid grid-cols-1 mb-2 p-5">
            <svg width="28" height="88" viewBox="0 0 28 88" fill="none" xmlns="http://www.w3.org/2000/svg"
              class="flex items-center grid place-self-center mb-4">
              <g clip-path="url(#clip0_27_397)">
                <path
                  d="M26.2142 0.0344205C26.0993 0.220578 25.9994 0.419696 25.9159 0.629053C25.5149 1.86345 25.3765 3.20156 25.5142 4.51865C25.6164 5.46165 25.7659 6.39613 25.9617 7.31691C26.3288 9.10081 26.7132 10.8777 27.0516 12.6616C27.3672 14.4134 27.5968 16.1864 27.7402 17.9713C27.9426 20.5542 28.0135 23.1499 27.9523 25.7434C27.8738 28.4242 27.5112 31.0814 26.8738 33.6485C25.8248 38.0991 24.2331 42.3322 22.1525 46.2059C21.9632 46.5628 21.7681 46.9055 21.5788 47.2692C21.5074 47.3824 21.4731 47.5239 21.4826 47.6662C21.4922 47.8084 21.5449 47.9412 21.6305 48.0387C21.8944 48.4374 22.2041 48.8292 22.4393 49.235C23.1675 50.3404 23.782 51.5504 24.2694 52.8377C24.7076 53.9956 24.9736 55.2391 25.0553 56.5104C25.1279 57.838 24.9309 59.1668 24.4817 60.379C24.0968 61.5154 23.5446 62.5563 22.8524 63.4502C22.3418 64.0938 21.8083 64.7025 21.2461 65.283C20.5359 66.0161 19.7671 66.6607 18.9514 67.2068C16.5568 68.9226 14.4158 71.1172 12.6181 73.6988C11.4596 75.293 10.4137 77.0037 9.4916 78.8128C9.32523 79.1274 9.16461 79.4493 8.98677 79.7571C8.9581 79.806 8.87204 79.806 8.81468 79.827C8.75731 79.848 8.77451 79.7361 8.786 79.694C9.25642 77.2559 10.0551 74.9298 11.1495 72.8105C11.5192 72.1507 11.9175 71.5154 12.3428 70.9075C13.4155 69.2917 14.5055 67.6964 15.5725 66.0736C16.2674 64.9958 16.8156 63.7888 17.196 62.4988C17.5407 61.3832 17.6836 60.19 17.6148 59.0008C17.5509 57.6676 17.0899 56.409 16.3183 55.461C15.8995 54.9364 15.6872 54.8944 15.2168 55.3002C13.2395 56.9646 11.496 59.0082 10.0538 61.3514C9.17116 62.7868 8.44067 64.3522 7.8796 66.0105C7.336 67.6238 6.95088 69.3098 6.73224 71.0336C6.6462 71.733 6.63472 72.4326 6.60031 73.1322C6.39378 77.6515 6.39378 82.1776 6.34217 86.7037V87.8372C6.29483 87.8487 6.24606 87.8487 6.19875 87.8372C6.1212 87.6764 6.05958 87.505 6.01516 87.3263C5.59065 84.6401 5.03993 81.9818 4.44903 79.3513C3.92071 76.9347 3.55994 74.4683 3.37054 71.9779C3.20235 69.7688 3.14869 67.5493 3.20992 65.3319C3.24496 62.413 3.5373 59.5071 4.0819 56.6644C4.6204 53.9467 5.50713 51.3497 6.7093 48.9691C6.92155 48.5633 7.1166 48.1646 7.31165 47.7588C7.33624 47.7099 7.35249 47.6557 7.35944 47.599C7.3664 47.5422 7.3639 47.4843 7.35211 47.4288C7.34034 47.3733 7.31951 47.3213 7.29087 47.2758C7.26223 47.2303 7.22637 47.1924 7.18544 47.1643C6.95024 47.0033 6.7093 46.8563 6.4741 46.6886C4.86543 45.593 3.47008 44.086 2.38384 42.2713C1.29757 40.4563 0.546093 38.3763 0.180935 36.1741C-0.0731538 34.5547 -0.0595012 32.8898 0.221092 31.2772C0.608288 28.8655 1.22635 26.5173 2.06257 24.2814C2.38382 23.372 2.72229 22.4696 3.02635 21.5531C3.47444 20.248 3.84075 18.9033 4.12205 17.5306C4.48247 15.6938 4.50404 13.7823 4.18515 11.9341C4.0991 11.4234 4.00158 10.9197 3.91554 10.409C3.91554 10.2971 3.91554 10.2271 4.01306 10.2341C4.03176 10.2336 4.05032 10.2383 4.06724 10.2481C4.08416 10.2578 4.09901 10.2721 4.11057 10.2901C4.22565 10.4802 4.33101 10.6788 4.42609 10.8847C5.49265 13.2854 6.22357 15.8862 6.58883 18.58C6.81143 20.4464 6.88254 22.335 6.80108 24.2185C6.80108 24.8341 6.76093 25.4496 6.74947 26.0583C6.72619 28.0952 7.0709 30.1134 7.75913 31.9697C8.78747 34.7818 10.3628 37.2455 12.3485 39.1473C12.4404 39.2328 12.5362 39.3123 12.6353 39.3851C12.7003 39.4362 12.776 39.4636 12.8533 39.4636C12.9307 39.4636 13.0064 39.4362 13.0713 39.3851C13.5991 38.7625 14.1555 38.1678 14.6432 37.5032C16.6056 34.7668 18.298 31.7592 19.6857 28.5418C21.2212 25.0998 22.395 21.4354 23.1794 17.6355C23.7376 14.9351 24.0095 12.1584 23.9882 9.37364C23.9882 8.28698 24.0055 7.20265 24.0399 6.12064C24.0893 4.93152 24.2667 3.75547 24.5676 2.62282C24.7641 1.70858 25.1423 0.867558 25.6691 0.174334C25.7344 0.0867194 25.8217 0.0281373 25.9173 0.00786322C26.0129 -0.0124107 26.1112 0.00678229 26.1968 0.0624033L26.2142 0.0344205Z"
                  fill="#AF384F" />
              </g>
              <defs>
                <clipPath id="clip0_27_397">
                  <rect width="28" height="88" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <h1 class="text-red text-center font-semibold text-3xl">
                MONICA CENTRI
              </h1>
            </div>
            <div>
              <h1 class="text-red text-center font-semibold text-base">
                Yourself and nothing else
              </h1>
            </div>
          </div>

          <!-- Box Scopri cosa puoi fare con noi -->
          <div class="boxScopriDiPiu">
            <div class="text_ScopriDiPiu">SCOPRI COSA PUOI FARE CON NOI</div>
            <button class="button_ScopriDiPiu">Scarica il menù servizi</button>
          </div>

          <!-- Body with links -->
          <div class="py-5"></div>
          <div class="p-5">
            <!-- Internet -->
            <qrlink link="https://www.monicacentri.com/" borderColor="#39ACAC" text="Visita il nostro sito Web"
              icon="internet" :type="false" />
            <!-- Facebook -->
            <qrlink link="https://www.facebook.com/monicacentrii" borderColor="#039BE5"
              text="Visita il nostro profilo Facebook" icon="facebook" :type="false" />
            <!-- Instagram -->
            <qrlink link="https://www.instagram.com/monica_centri/" borderColor="#AE44AE"
              text="Visita il nostro profilo Instagram" icon="instagram" :type="false" />
            <!-- WhatsApp -->
            <qrlink link="https://wa.me/393348529048?text=Posso%20prenotare%20una%20consulenza%20gratuita?"
              borderColor="#40C351" text="Scrivici su WhatsApp" icon="whatsapp" :type="false" />
            <!-- Google -->
            <!-- <qrlink
              link="https://g.co/kgs/emXVJy"
            borderColor="#FBC02D"
            text="Visita il nostro profilo google"
            icon="google"
            :type="false"
            /> -->
            <!-- Youtube -->
            <!-- <qrlink
              link="https://www.youtube.com/channel/UCgQZR6GKr5DyWeVlkBOCCqQ"
              borderColor="#F44F5A"
              text="Guarda i nostri video su youtube"
            icon="youtube"
            :type="false"
            /> -->
            <!-- TIKTOK -->
            <qrlink link="https://www.youtube.com/channel/UCgQZR6GKr5DyWeVlkBOCCqQ" borderColor="#F44F5A"
              text="Scrivici su TikTok" icon="tiktok" :type="false" />
          </div>
          <!-- Button Condividi -->
          <div class="" @click="shareButton">
            <svg class=" absolute right-0 top-48 mr-5 mb-8" width="48" height="48" viewBox="0 0 48 48" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="#AF384F" />
              <path
                d="M31.7206 8.13232C30.4581 8.13232 29.2473 8.63386 28.3545 9.52659C27.4618 10.4193 26.9603 11.6301 26.9603 12.8927C26.9612 13.1912 26.9903 13.489 27.047 13.7821L15.7568 20.3679C14.8968 19.6394 13.8063 19.2396 12.6793 19.2398C11.4168 19.2398 10.2059 19.7413 9.31321 20.634C8.42048 21.5268 7.91895 22.7376 7.91895 24.0001C7.91895 25.2626 8.42048 26.4734 9.31321 27.3662C10.2059 28.2589 11.4168 28.7604 12.6793 28.7604C13.8046 28.7582 14.8927 28.3574 15.7506 27.6292L27.047 34.2181C26.9903 34.5112 26.9612 34.809 26.9603 35.1075C26.9603 36.37 27.4618 37.5809 28.3545 38.4736C29.2473 39.3663 30.4581 39.8679 31.7206 39.8679C32.9831 39.8679 34.1939 39.3663 35.0867 38.4736C35.9794 37.5809 36.4809 36.37 36.4809 35.1075C36.4809 33.845 35.9794 32.6342 35.0867 31.7415C34.1939 30.8487 32.9831 30.3472 31.7206 30.3472C30.5943 30.3487 29.5049 30.7495 28.6462 31.4784L17.3528 24.8896C17.4096 24.5964 17.4386 24.2986 17.4396 24.0001C17.4386 23.7015 17.4096 23.4037 17.3528 23.1106L28.6431 16.5249C29.5031 17.2534 30.5936 17.6531 31.7206 17.653C32.9831 17.653 34.1939 17.1515 35.0867 16.2587C35.9794 15.366 36.4809 14.1552 36.4809 12.8927C36.4809 11.6301 35.9794 10.4193 35.0867 9.52659C34.1939 8.63386 32.9831 8.13232 31.7206 8.13232Z"
                fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ginput from "@/components/ginput.vue";
import gbutton from "@/components/gbutton.vue";
import qrlink from "@/components/qr-link.vue";

export default {
  layout: "empty",
  data() {
    return {};
  }, //data
  mounted() { }, //mounted
  created() { }, //created
  computed: {
    responsive() {
      switch (this.$mq) {
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return false;
      }
    },
    webShareApiSupported() {
      return navigator.share;
    },
  },

  methods: {
    async shareButton() {
      try {
        await navigator.share({
          title: "Monica Centri",
          text: "Non il solito Centro Estetico",
          url: "https://monicacentri.com/qr",
        });
        console.log("shared successfully");
      } catch (err) {
        console.log("Error: " + err);
      }
    },
  }, //methods
  components: {
    ginput,
    gbutton,
    qrlink,
  },
};
</script>

<style lang="scss" scoped>
.footerTemp {
  top: 50px;
  background: rgba(175, 56, 79, 0.2);
}

.bg-red {
  background: #af384f;
}

.bg-red:hover {
  background: #882c3e;
}

.top-48 {
  /*top: 12.5rem;*/
  top: 1.5rem;
}

.boxScopriDiPiu {
  background: #AF384F;
  height: 222px;
  width: 100%;
}

.text_ScopriDiPiu {
  position: absolute;
  max-width: 377px;
  width: 100%;
  height: 78px;
  top: 251px;
  left: 50%;
  transform: translateX(-50%);

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  /*font-size: 32px;*/
  font-size: 29px;
  line-height: 39px;
  text-align: center;

  color: #FFFFFF;
}

.button_ScopriDiPiu {
  position: absolute;
  width: 216px;
  height: 37px;
  top: 371px;
  left: 50%;
  transform: translateX(-50%);

  background: #FFFFFF;
  border-radius: 47px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-align: center;

  color: #AF384F;
}
</style>

