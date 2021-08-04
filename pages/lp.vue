<template>
  <div>
    <!-- Container di page -->
    <div class="mx-auto">
      <!-- Container box Login -->
      <div
        class="containerLoginRegister relative mx-auto bg-white"
        :class="{ separeNavBar: true }"
      >
        <!--  box Login -->
        <div class="grid grid-cols-1">
          <!-- Freccia back -->
          <div class="cursor-pointer mt-20" @click="UnStep()" v-if="step > 0">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.66459 1.52039C10.0124 1.17258 10.0124 0.608668 9.66459 0.260858C9.31678 -0.0869527 8.75287 -0.0869526 8.40506 0.260858L0.428011 8.23791C0.368214 8.2977 0.318697 8.36389 0.279461 8.43426C0.107392 8.59665 0 8.82684 0 9.0821C0 9.41503 0.182677 9.70529 0.453264 9.85812L8.4051 17.81C8.75291 18.1578 9.31682 18.1578 9.66463 17.81C10.0124 17.4621 10.0124 16.8982 9.66463 16.5504L3.08694 9.97273H18.1094C18.6013 9.97273 19 9.57398 19 9.0821C19 8.59023 18.6013 8.19148 18.1094 8.19148H2.99351L9.66459 1.52039Z"
                fill="#AF384F"
              />
            </svg>
          </div>

          <!-- Div Per Spazziare -->
          <div class="mt-6"></div>

          <VueSlickCarousel v-bind="settings" class="" ref="carouselLP">
            <!-- step1 -->
            <div class="p-3" id="step1">
              <!-- Title step1 -->
              <div class="text-2xl font-semibold mx-auto text-red pt-6">
                {{ $t("lp.page1.title") }}
              </div>

              <!-- Input Nome -->
              <div class="mt-11">
                <ginput
                  :text="$t('lp.page1.content')"
                  id="step1Content"
                  name="step1Content"
                  type="name"
                  v-model="form.name"
                  :errorMsg="error_name"
                  ref="step1Input"
                />
              </div>

              <!--Button Avanti step1-->
              <div class="mt-8">
                <div @click="nextStep()">
                  <gbutton
                    :text="$t('lp.avanti')"
                    id="buttonAvantiPasso1"
                    name="buttonAvantiPasso1"
                    typeButton="normal"
                  />
                </div>
              </div>
            </div>
            <!-- // step1 -->

            <!-- step2 -->
            <div class="p-3" id="step2">
              <!-- Title step2 -->
              <div class="text-2xl font-semibold mx-auto text-red pt-6">
                {{ $t("lp.page2.title") + " " + form.name }}
              </div>

              <!-- Input Numero Telefono -->
              <div class="mt-11">
                <ginput
                  :text="$t('lp.page2.content')"
                  id="step2Content"
                  name="step2Content"
                  type="number"
                  v-model="form.number"
                  :errorMsg="error_number"
                  ref="step2Input"
                />
              </div>

              <!-- Spiegazione Step 2 -->
              <div class="mt-8">
                <div
                  class="text-md mx-auto text-left font-medium text-red"
                  @click="showResponseStep = !showResponseStep"
                >
                  {{ $t("lp.page2.domanda") }}
                </div>
                <div
                  class="text-md mx-auto text-left font-light text-red"
                  v-show="showResponseStep"
                >
                  {{ $t("lp.page2.risposta") }}
                </div>
              </div>

              <!--Button Avanti step2-->
              <div class="mt-8">
                <div @click="nextStep()">
                  <gbutton
                    :text="$t('lp.avanti')"
                    id="buttonAvantiPasso2"
                    name="buttonAvantiPasso2"
                    typeButton="normal"
                  />
                </div>
              </div>
            </div>
            <!-- // step2 -->

            <!-- step3 -->
            <div class="p-3" id="step3">
              <!-- Title step3 -->
              <div class="text-2xl font-semibold mx-auto text-red pt-6">
                {{ $t("lp.page3.title") + " " + form.name }}
              </div>

              <!-- Input Dove vivi -->
              <div class="mt-11">
                <ginput
                  :text="$t('lp.page3.content')"
                  id="step3Content"
                  name="step3Content"
                  type="text"
                  v-model="form.city"
                  :errorMsg="error_city"
                  ref="step3Input"
                />
              </div>

              <!-- Spiegazione Step 3 -->
              <div class="mt-8">
                <div
                  class="text-md mx-auto text-left font-medium text-red"
                  @click="showResponseStep = !showResponseStep"
                >
                  {{ $t("lp.page3.domanda") }}
                </div>
                <div
                  class="text-md mx-auto text-left font-light text-red"
                  v-show="showResponseStep"
                >
                  {{ $t("lp.page3.risposta") }}
                </div>
              </div>

              <!--Button Avanti step2-->
              <div class="mt-8">
                <div @click="nextStep()">
                  <gbutton
                    :text="$t('lp.avanti')"
                    id="buttonAvantiPasso3"
                    name="buttonAvantiPasso3"
                    typeButton="normal"
                  />
                </div>
              </div>
            </div>
            <!-- // step3 -->
          </VueSlickCarousel>
          <br /><br /><br /><br />

          <pre><code>{{form}}</code></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ginput from "@/components/ginput.vue";
import gbutton from "@/components/gbutton.vue";
import VueSlickCarousel from "vue-slick-carousel";

export default {
  data() {
    return {
      optionsFullPage: {},
      step: 1,
      showResponseStep: true,
      form: {
        name: "",
        number: "",
        city: "",
      },
      error_name: "",
      error_number: "",
      error_city: "",

      settings: {
        dots: false,
        arrows: false,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        slidesPerRow: 1,
        touchMove: false,
        variableWidth: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 4000,
        pauseOnDotsHover: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        fade: false,
        useCSS: true,
        swipe: false,
      },
    };
  }, //data
  mounted() {
    setTimeout(() => {
      this.$refs.step1Input.$el.firstChild.focus();
    }, 600);
  }, //mounted
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
  },
  created() {}, //created

  methods: {
    nextStep() {
      /*Step 1*/
      if (this.step == 1) {
        if (
          this.form.name == "" ||
          this.form.name == null ||
          this.form.name == undefined
        ) {
          this.error_name = "Inserire un Nome";
        } else {
          this.error_name = "";
          this.$refs.carouselLP.next();
          setTimeout(() => {
            this.$refs.step2Input.$el.firstChild.focus();
          }, 600);
          this.step += 1;
        }

        /*Step 2*/
      } else if (this.step == 2) {
        if (
          this.form.number == "" ||
          this.form.number == null ||
          this.form.number == undefined
        ) {
          this.error_number = "Inserire il Numero";
        } else {
          this.error_number = "";
          this.step += 1;
          this.$refs.carouselLP.next();
          setTimeout(() => {
            this.$refs.step3Input.$el.firstChild.focus();
          }, 600);
        }

        /*Step 3*/
      } else if (this.step == 3) {
        if (
          this.form.city == "" ||
          this.form.city == null ||
          this.form.city == undefined
        ) {
          this.error_city = "Inserire una Cittá";
        } else {
          this.error_city = "";
          this.step += 1;
          this.$refs.carouselLP.next();
        }
      }
    },
    UnStep() {
      /*Step 1*/
      if (this.step == 1) {
        /*Step 2*/
      } else if (this.step == 2) {
        this.step -= 1;
        this.$refs.carouselLP.prev();
        this.$refs.step1Input.$el.firstChild.focus();

        /*Step 3*/
      } else if (this.step == 3) {
        this.step -= 1;
        this.$refs.carouselLP.prev();
        this.$refs.step2Input.$el.firstChild.focus();
      }
    },
  }, //methods
  components: {
    ginput,
    gbutton,
    VueSlickCarousel,
  },
};
</script>

<style lang="scss" scoped>
.footerTemp {
  top: 50px;
  background: rgba(175, 56, 79, 0.2);
}
</style>

