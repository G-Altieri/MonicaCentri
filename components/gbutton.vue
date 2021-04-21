<template>
  <div>
    <div v-if="typeButton == 'normal'">
      <button
        class="bg-red px-4 py-3 text-sm font-normal tracking-wider text-white rounded-md w-full leading-4 duration-300 transition-all" :class="{uppercase:uppercase}"
      >
        {{ text }}
      </button>
    </div>

    <div v-if="typeButton == 'outline'">
      <button
        class="bg-white border-red px-4 py-3 text-sm font-normal tracking-wider text-red border-1 rounded-md w-full leading-4 duration-300 transition-all btnOutline"
      >
        {{ text }}
      </button>
    </div>

    <div v-if="typeButton == 'google'">
      <button
        class="bg-white btnGoogle px-4 text-sm font-medium tracking-wider uppercase rounded-md w-full leading-4 duration-300 transition-all grid grid-cols-3 flex items-center"
      >
        <span class="">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2689 9.92401C21.2689 9.12577 21.1965 8.54327 21.0398 7.93921H10.8514V11.542H16.8318C16.7113 12.4374 16.0602 13.7858 14.6133 14.6918L14.593 14.8124L17.8144 17.0451L18.0376 17.065C20.0873 15.3714 21.2689 12.8796 21.2689 9.92401Z"
              fill="#4285F4"
            />
            <path
              d="M10.8515 19.4168C13.7814 19.4168 16.241 18.5538 18.0376 17.0652L14.6133 14.6919C13.697 15.2637 12.4671 15.6628 10.8515 15.6628C7.98189 15.6628 5.54634 13.9692 4.67814 11.6284L4.55088 11.6381L1.20125 13.9573L1.15744 14.0663C2.94189 17.2377 6.6073 19.4168 10.8515 19.4168Z"
              fill="#34A853"
            />
            <path
              d="M4.67816 11.6284C4.44908 11.0243 4.3165 10.3771 4.3165 9.70831C4.3165 9.03948 4.44908 8.39228 4.66611 7.78822L4.66004 7.65957L1.26843 5.3031L1.15747 5.35032C0.422008 6.66635 0 8.1442 0 9.70831C0 11.2724 0.422008 12.7502 1.15747 14.0662L4.67816 11.6284Z"
              fill="#FBBC05"
            />
            <path
              d="M10.8515 3.75387C12.8891 3.75387 14.2636 4.54132 15.0474 5.19937L18.1099 2.52417C16.229 0.960051 13.7813 0 10.8515 0C6.6073 0 2.94189 2.17897 1.15744 5.35033L4.66608 7.78824C5.54634 5.44745 7.98188 3.75387 10.8515 3.75387Z"
              fill="#EB4335"
            />
          </svg>
        </span>
        <span class=""> Google </span>
        <span></span>
      </button>
    </div>

    <div v-if="typeButton == 'facebook'">
      <button
        class="btnFacebook px-4 text-sm font-medium tracking-wider text-white uppercase rounded-md w-full leading-4 duration-300 transition-all grid grid-cols-3 flex items-center"
      >
        <span class="pl-2"
          ><svg
            width="9"
            height="20"
            viewBox="0 0 9 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.98591 14.3362C1.98591 12.8702 1.97995 11.4034 1.99102 9.93742C1.99102 9.68895 1.92202 9.61275 1.66732 9.62352C1.1971 9.64174 0.72603 9.62352 0.255813 9.6318C0.0649997 9.63677 -0.00485149 9.58542 0.000259567 9.38913C0.00991379 8.47365 0.00991379 7.55845 0.000259567 6.64352C0.000259567 6.4671 0.0530742 6.40995 0.236221 6.41327C0.717512 6.42403 1.19966 6.40002 1.6801 6.42321C1.9578 6.43646 2.01572 6.34038 2.00976 6.09191C1.99386 5.39564 1.99386 4.69909 2.00976 4.00226C2.0285 3.15166 2.26531 2.35738 2.78494 1.6658C3.44426 0.790354 4.38129 0.389486 5.46313 0.34062C6.57053 0.293411 7.6873 0.319914 8.79895 0.308319C8.95484 0.308319 9.00084 0.360498 8.99999 0.507096C8.99488 1.43251 8.99488 2.35793 8.99999 3.28335C8.99999 3.449 8.94632 3.49787 8.78021 3.49538C8.24525 3.48793 7.7103 3.49538 7.17534 3.49538C6.4632 3.49538 6.03728 3.85401 5.99298 4.53896C5.9572 5.08809 5.98361 5.64052 5.96998 6.19544C5.96572 6.39173 6.08498 6.37848 6.21872 6.37848C7.03138 6.37848 7.84489 6.38594 8.65755 6.37268C8.89606 6.37268 8.97443 6.42238 8.94717 6.66588C8.84495 7.58605 8.75721 8.50706 8.67629 9.42889C8.65755 9.63677 8.56044 9.67736 8.36792 9.67322C7.72648 9.66328 7.08504 9.66659 6.44275 9.67322C5.98191 9.67322 6.02705 9.60779 6.02705 10.0641C6.02705 12.9348 6.02109 15.8047 6.03387 18.6778C6.03387 18.981 5.9555 19.0563 5.64628 19.0505C4.54513 19.0307 3.4437 19.0307 2.34198 19.0505C2.03106 19.0563 1.97994 18.9536 1.9825 18.6845C1.99187 17.2276 1.98591 15.7823 1.98591 14.3362Z"
              fill="#FEFEFE"
            />
          </svg>
        </span>
        <span>Facebook</span>
        <span></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {}, //computed

  methods: {}, //metodi

  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    typeButton: {
      type: String,
      default: "normal",
    },
    text: {
      type: String,
      default: "Hello Word",
      require: true,
    },
    name: {
      type: String,
      default: "",
    },
     uppercase: {
      type: Boolean,
      default: false,
    },
  },
};
</script>


<style lang="scss" scoped>
.btnGoogle {
  border: 1px solid #cecece;
  color: #cecece;
  font-size: 14px;
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}
.btnFacebook {
  background: #3c5b9a;
  font-size: 14px;
  padding-top: 0.65rem;
  padding-bottom: 0.65rem;
}

.bg-red {
  background: #af384f;
}
.bg-red:hover {
  background: #882c3e;
}

.btnOutline:hover{
      background: #af384f;
      color: white !important;
}
</style>
