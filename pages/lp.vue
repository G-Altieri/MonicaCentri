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
         <div class="cursor-pointer mt-20" @click="UnStep()">
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
          <div class="mt-20"></div>

<!-- step2 -->
<div class="" v-if="step==1">
          <!-- Title step1 -->
          <div class="text-2xl font-semibold mx-auto text-red pt-6">
            {{ $t("lp.page1.title") }}
          </div>

          <!-- Input Nome -->
          <div class="mt-11">
            <ginput
              :text="$t('lp.page1.content')"
              id="page1Content"
              name="page1Content"
              type="name"
              v-model="form.name"
              :errorMsg="error_name"
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
<div class="" v-if="step==2">
          <!-- Title step2 -->
          <div class="text-2xl font-semibold mx-auto text-red pt-6">
            {{ $t("lp.page2.title")+" "+form.name }}
          </div>

          <!-- Input Numero Telefono -->
          <div class="mt-11">
            <ginput
              :text="$t('lp.page2.content')"
              id="page1Content"
              name="page1Content"
              type="number"
              v-model="form.number"
              :errorMsg="error_number"
            />
          </div>

          <!--Button Avanti step2-->
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
          <!-- // step2 -->

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
export default {
  data() {
    return {
        step:1,
      form: {
        name: "",
        number: "",
      },
      error_name: "",
      error_number: "",
    };
  }, //data
  mounted() {}, //mounted
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
      nextStep(){
          this.step += 1;
      },
      UnStep(){
          this.step -= 1;
      },
  }, //methods
  components: {
    ginput,
    gbutton,
  },
};
</script>

<style lang="scss" scoped>
.footerTemp {
  top: 50px;
  background: rgba(175, 56, 79, 0.2);
}
</style>

