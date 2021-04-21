<template>
<div>
  <!-- Container di page -->
  <div class="container mx-auto">
    <!-- Container box Login -->
    <div class="containerLogin relative mx-auto bg-white">
      <!--  box Login -->
      <div class="grid grid-cols-1">
        <!-- Title Accedi -->
        <div class="text-2xl font-semibold mx-auto text-red pt-6">
          {{ $t("modal.login") }}
        </div>

        <form action="">
          <!-- Input Email -->
          <div class="mt-11">
            <ginput
              :text="$t('modal.email')"
              id="loginEmail"
              name="loginEmail"
              type="email"
              v-model="form.email"
              :errorMsg="error_email"
            />
          </div>

          <!-- Input Password -->
          <div class="mt-8">
            <ginput
              :text="$t('modal.password')"
              id="loginPassword"
              name="loginPassword"
              type="password"
              v-model="form.password"
              :errorMsg="error_password"
            />
          </div>

          <!--Button Login Local-->
          <div class="mt-8">
            <gbutton
              :text="$t('modal.login')"
              id="buttolLoginLocal"
              name="buttolLoginLocal"
              typeButton="normal"
            />
          </div>
        </form>

        <!-- Forgot Password -->
        <div class="font-normal text-sm text-red text-right w-full mt-2">
          {{ $t("modal.forgotPassword") }}
        </div>

        <!-- Vuoto per spazziare -->
        <div class="h-16"></div>

        <!-- hr di testo -->
        <div class="flex">
          <!-- Primo separe -->
          <div class="flex-grow self-center"><hr class="border-red" /></div>
          <!-- Testo -->
          <div
            class="text-sm font-normal text-center text-red flex-grow-0 px-2 self-center "
            style="width:200px;"
          >
            {{ $t("modal.hrLogin") }}
          </div>
          <!-- Secondo separe -->
          <div class="flex-grow self-center"><hr class="border-red" /></div>
        </div>

        <!-- Button Login Google -->
        <div class="mt-5">
          <gbutton
            :text="$t('modal.login')"
            id="buttolLoginLocal"
            name="buttolLoginLocal"
            typeButton="google"
          />
        </div>

        <!-- Button Facebook Google -->
        <div class="mt-5">
          <gbutton
            :text="$t('modal.login')"
            id="buttolLoginLocal"
            name="buttolLoginLocal"
            typeButton="facebook"
          />
        </div>

        <!-- Policy Privacy Login -->
        <div class="mt-6 text-gray text-xs w-full text-center">
          {{ $t("modal.loginPrivacy") }}
        </div>

        <!-- Testo Registrazione  -->
        <nuxt-link :to="localePath('/register')">
          <div class="my-10 text-red text-lg w-48 text-center mx-auto">
            {{ $t("modal.loginRegistration") }}
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- <pre><code>{{form}}</code></pre> -->
  </div>
      <!-- Footer Temporaneo -->
      <div class="h-10 footerTemp w-full relative"></div>
      </div>
</template>

<script>
import ginput from "@/components/ginput.vue";
import gbutton from "@/components/gbutton.vue";
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error_email: "",
      error_password: "",
    };
  }, //data
  mounted() {}, //mounted
  computed: {
    //  Getters
    // Show_error: function () {
    // return this.show_error;
    //  },
  },
  created() {}, //created

  methods: {}, //methods
  components: {
    ginput,
    gbutton,
  },
};
</script>

<style lang="scss" scoped>
.containerLogin {
  width: 90%;
  top: 56px;
  max-width: 550px;
}
.footerTemp{
    top: 50px;
    background: rgba(175, 56, 79, 0.2);
}
</style>

