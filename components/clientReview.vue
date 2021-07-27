<template>
  <div class="container2">
    <div class="shadow-lg ombrareview rounded-xl flex-none w-80 md:w-xl mx-2" style="">
      <div
        class="rounded-t-xl bg-white px-6 py-8 md:p-10 text-lg md:text-xl leading-8 md:leading-8 font-semibold text-gray-900"
      >
        <!-- Virgolette -->
        <svg width="45" height="36" class="mb-5 fill-current text-pink">
          <path
            d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
          ></path>
        </svg>
        <div class="text-red text-center mb-5">
          <p>{{ text }}</p>
        </div>
        <!-- Virgolette sotto -->
        <div class="pb-5">
          <svg
            width="45"
            height="36"
            class="fill-current text-pink virgolette-reflect float-right"
          >
            <path
              d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
            ></path>
          </svg>
        </div>
      </div>

      <!-- Footer della revie -->
      <div
        class="flex items-center space-x-4 p-6 md:px-10 md:py-6 rounded-b-xl leading-6 font-semibold text-white bg-footer-review"
      >
        <div
          class="flex-none w-14 h-14 rounded-full items-center justify-center"
        >
          <!-- Img profilo -->
          <img
            :src="require(`~/assets/img/home/${img}.jpg`)"
            alt=""
            class="w-16 h-16 bg-trasparent"
            loading="lazy"
          />
        </div>
        <!-- nome utente profilo -->
        <div class="flex-auto">
          {{ name }}<br /><span class="text-orange-100"> {{ ruolo }}</span>
        </div>

        <!-- Icona di twitter -->
        <div class="flex">
          <a
            target="_blank"
            href="https://www.facebook.com/centroesteticomonika"
            class="opacity-75 hover:opacity-100 transition-opacity duration-200 text-pink"
            ><span class="sr-only">Facebook</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="#ffd2d2"
            >
              <path
                d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  props: {
    text: String,
    img: String,
    name: String,
    ruolo: String,
  },
};
</script>

<style scoped>
.virgolette-reflect {
  -webkit-transform: scaleX(-1);
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  transform: scaleX(-1);
}
.text-pink {
  color: #ffd2d2;
}

.text-red {
  color: #af384f;
}

.container2 {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 50px;
}

.ombrareview {
-webkit-box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.6); 
box-shadow: 0px 4px 8px -1px rgba(0,0,0,0.6);
}

.bg-footer-review{
  /* bg-gradient-to-br from-orange-400 to-pink-600*/
  background: #af384f;
}

@media screen and (min-width: 900px) {
}

@media screen and (min-width: 1100px) {
}
</style>