<template>
  <div>
    <!-- Container di page -->
    <div class=" mx-auto">
      <!-- Container box Login -->
      <div
        class="containerLoginRegister relative mx-auto bg-white"
        :class="{ separeNavBar: true }"
      >
        <!--  box Login -->
        <div class="grid grid-cols-1">


           <!-- Freccia back -->
          <div class="cursor-pointer mt-20" @click="$router.go(-1)">
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


          <!-- Title Accedi -->
          <div class="text-2xl font-semibold mx-auto text-red pt-6">
            {{ $t("modal.login") }}
          </div>

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
            <div @click="login()">
              <gbutton
                :text="$t('modal.login')"
                id="buttolLoginLocal"
                name="buttolLoginLocal"
                typeButton="normal"
              />
            </div>
          </div>
          <!-- </form> -->

          <!-- Forgot Password -->
            <nuxt-link :to="localePath('/forgotPassword')">
          <div class="font-normal text-sm text-red text-right w-full mt-2">
            {{ $t("modal.forgotPassword") }}
          </div>
            </nuxt-link>

          <!-- Vuoto per spazziare -->
          <div class="h-16"></div>

          <!-- hr di testo -->
          <div class="flex">
            <!-- Primo separe -->
            <div class="flex-grow self-center"><hr class="border-red" /></div>
            <!-- Testo -->
            <div
              class="text-sm font-normal text-center text-red flex-grow-0 px-2 self-center"
              style="width: 200px"
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
    <!-- <div class="h-10 footerTemp w-full relative"></div> -->
  </div>
</template>

<script>
import ginput from "@/components/ginput.vue";
import gbutton from "@/components/gbutton.vue";
export default {
  data() {
    return {
      form: {
        email: "giovanni@gmail.com",
        password: "123",
      },
      error_email: "",
      error_password: "",
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
    async login() {
      //console.log("Chiamata Login");

      var x = this.controlloDatiLogin();
      if (x) {
        try {
          //Effettuo la chiamata al server
          let response = await this.$auth.loginWith("local", {
            data: this.form,
          });
          //Debug di RIsposta riuscita
          console.log("Login Effettuato:");
          console.log(response);
        } catch (error) {
          //Catturo l errore e lo gestisco
          console.log("Error Login:");
          if (error.response.data.code == 406) {
            this.error_email = "Credenziali Errate";
            this.error_password = "Credenziali Errate";
          }
        }
        
      } else {
        //Se le informazioni non sono valide 
        this.error_email = "Email non valida";
        this.error_password = "Password non valida";
      }
    },

    //Metodo per Controllare i dati inseriti nel form
    controlloDatiLogin(){
      return true
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

