<template>
  <!-- Footer -->
  <div
    class="footer grid flex text-2xl mt-0 borderBanner w-full"
    v-bind:class="{ FBorder: !home }"
  >
    <!-- Icon Social -->
    <div
      style="width: 300px"
      class="grid grid-cols-3 mx-auto justify-items-stretch my-12"
    >
      <!-- Facebook -->
      <div class="justify-self-center">
        <nuxt-link :to="localePath('/lp')">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.176 23.5878C47.176 10.5612 36.6147 -0.000190735 23.5893 -0.000190735C10.5613 -0.000190735 0 10.5612 0 23.5878C0 35.3612 8.62667 45.1185 19.9027 46.8892V30.4051H13.9147V23.5878H19.9027V18.3905C19.9027 12.4785 23.4254 9.21315 28.812 9.21315C31.3934 9.21315 34.0934 9.67448 34.0934 9.67448V15.4785H31.1173C28.188 15.4785 27.2747 17.2971 27.2747 19.1625V23.5878H33.816L32.7707 30.4051H27.2747V46.8892C38.5507 45.1185 47.176 35.3612 47.176 23.5878Z"
              fill="#AF384F"
            />
            <path
              d="M32.7701 30.4051L33.8154 23.5878H27.274V19.1624C27.274 17.2971 28.1873 15.4785 31.1167 15.4785H34.0927V9.67445C34.0927 9.67445 31.3927 9.21312 28.8114 9.21312C23.4247 9.21312 19.902 12.4785 19.902 18.3905V23.5878H13.9141V30.4051H19.902V46.8891C21.1034 47.0771 22.334 47.1758 23.5887 47.1758C24.842 47.1758 26.0727 47.0771 27.274 46.8891V30.4051H32.7701Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
      </div>

      <!-- Instagram -->
      <div class="justify-self-center">
        <nuxt-link :to="localePath('/lp')">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.176 23.5878C47.176 36.6144 36.6147 47.1758 23.5893 47.1758C10.5613 47.1758 0 36.6144 0 23.5878C0 10.5598 10.5613 -0.000228882 23.5893 -0.000228882C36.6147 -0.000228882 47.176 10.5598 47.176 23.5878Z"
              fill="#AF384F"
            />
            <path
              d="M30.9104 14.6641C30.0144 14.6641 29.2891 15.3907 29.2891 16.2854C29.2891 17.1814 30.0144 17.9067 30.9104 17.9067C31.8064 17.9067 32.5318 17.1814 32.5318 16.2854C32.5318 15.3907 31.8064 14.6641 30.9104 14.6641Z"
              fill="white"
            />
            <path
              d="M23.7026 27.9173C21.2959 27.9173 19.3386 25.9599 19.3386 23.5546C19.3386 21.1492 21.2959 19.1919 23.7026 19.1919C26.1079 19.1919 28.0639 21.1492 28.0639 23.5546C28.0639 25.9599 26.1079 27.9173 23.7026 27.9173ZM23.7026 16.7439C19.9466 16.7439 16.8906 19.7986 16.8906 23.5546C16.8906 27.3106 19.9466 30.3652 23.7026 30.3652C27.4573 30.3652 30.5133 27.3106 30.5133 23.5546C30.5133 19.7986 27.4573 16.7439 23.7026 16.7439Z"
              fill="white"
            />
            <path
              d="M18.0664 12.3281C14.9211 12.3281 12.3624 14.8868 12.3624 18.0335V29.0761C12.3624 32.2215 14.9211 34.7815 18.0664 34.7815H29.1091C32.2558 34.7815 34.8158 32.2215 34.8158 29.0761V18.0335C34.8158 14.8868 32.2558 12.3281 29.1091 12.3281H18.0664ZM29.1091 37.3828H18.0664C13.4864 37.3828 9.75977 33.6561 9.75977 29.0761V18.0335C9.75977 13.4535 13.4864 9.72679 18.0664 9.72679H29.1091C33.6891 9.72679 37.4171 13.4535 37.4171 18.0335V29.0761C37.4171 33.6561 33.6891 37.3828 29.1091 37.3828Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
      </div>

      <!-- Youtube -->
      <div class="justify-self-center">
        <nuxt-link :to="localePath('/lp')">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M47.176 23.5882C47.176 36.6148 36.6147 47.1763 23.5893 47.1763C10.5613 47.1763 0 36.6148 0 23.5882C0 10.5602 10.5613 0.00019455 23.5893 0.00019455C36.6147 0.00019455 47.176 10.5602 47.176 23.5882Z"
              fill="#AF384F"
            />
            <path
              d="M27.6999 24.0936L21.2053 27.307C20.9493 27.444 20.0853 27.2602 20.0853 26.9706V20.3748C20.0853 20.0816 20.9573 19.8977 21.212 20.043L27.4293 23.4253C27.6893 23.5737 27.9626 23.9497 27.6999 24.0936ZM36.2173 20.2175C36.2173 17.0909 33.6813 14.5534 30.5533 14.5534H16.0693C12.9413 14.5534 10.4053 17.0909 10.4053 20.2175V26.9576C10.4053 30.0868 12.9413 32.6216 16.0693 32.6216H30.5533C33.6813 32.6216 36.2173 30.0868 36.2173 26.9576V20.2175Z"
              fill="white"
            />
          </svg>
        </nuxt-link>
      </div>
    </div>

    <div class="text-lg text-red font-normal">
      <!-- Norme sulla privacy -->
      <div class="mb-3">
        <a
          href="https://www.iubenda.com/privacy-policy/52995361"
          class=""
          title="Privacy Policy "
          >{{ $t("footer.normePrivacy") }}
        </a>
        <script type="text/javascript">
          (function (w, d) {
            var loader = function () {
              var s = d.createElement("script"),
                tag = d.getElementsByTagName("script")[0];
              s.src = "https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s, tag);
            };
            if (w.addEventListener) {
              w.addEventListener("load", loader, false);
            } else if (w.attachEvent) {
              w.attachEvent("onload", loader);
            } else {
              w.onload = loader;
            }
          })(window, document);
        </script>
      </div>

      <!-- Termini e Condizioni -->
      <div class="mb-3">
        <a
          href="https://www.privacypolicies.com/live/dc409d01-2d13-4d54-a5e9-5f6f505e6062"
        >
          {{ $t("footer.terminiCondizioni") }}</a
        >
      </div>



      <!-- Copiright -->
      <div class=" mb-3  text-center text-sm " style="color:">
©copyright all rights reserved 1994-2021
      </div>
    </div>
    <!-- FIne Text -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEmpty: false,
    };
  },

  components: {},
  props: {
    home: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {},
};
</script>

<style>
/* Footer */
.footer {
  /*position: absolute;
  bottom: 0;
  top: 5000px;
  left: 0;
  width: 100%;
  color: #af384f;
  font-size: 2rem;
  text-align: center;*/
  position: relative;
  background: #ffffff;
  bottom: 0;
  width: 100%;
  height: 110px;
  text-align: center;
}
.FBorder {
  border-top: 8px solid #af384f;
}
</style>