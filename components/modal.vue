<template>
  <!-- div generale -->
  <div>
    <!-- Modal -->

    <!-- @click="eventModal()" per lo span che sta sotto per fa chiudere -->
    <span>
      <div
        class="modal flex transition duration-300 overflow-y-auto"
        v-show="Show_modal"
        id="id_modal"
      >
        <div
          @click="closeModal()"
          class="absolute flex items-stretch bg-transparent w-full h-full"
        ></div>
        <div class="box-modal self-center" v-bind:class="{ filter: Show_blur }">
          <div class="grid grid-cols-1 gap-4">
            <!-- Title Modal -->
            <div
              class="h-20 rounded-md flex text-center text-2xl font-extrabold"
            >
              <div class="flex-none w-20"></div>

              <div class="flex-grow text-center self-center">
                {{ $t("modal.login") }}
              </div>

              <!-- Icona di Chiusura -->
              <div
                @click="closeModal()"
                class="flex-none w-20 items-center justify-center self-center"
              >
                <mdb-icon icon="times" />
              </div>
            </div>

            <!-- Input Email -->
            <div
              class="h-12 rounded-md flex items-center justify-center text-2xl"
            >
              <inputLabel
                :text="$t('modal.email')"
                Size="95%"
                id="EmailInput"
                event="email"
          
              ></inputLabel>
            </div>

            <!-- Input Password -->
            <div
              class="h-20 rounded-md flex items-center justify-center text-2xl"
            >
              <inputLabel
                :text="$t('modal.password')"
                Size="95%"
                type="password"
                id="PasswordInput"
                event="password"
              ></inputLabel>
            </div>

            <!-- Password Dimenticata -->
            <div
              class="h-10 rounded-md flex items-center justify-left text-2xl"
            >
              <div class="passowordDimenticata duration-300">
                <Nuxt-Link
                  :to="localePath('/laser')"
                  @click.native="closeModal()"
                >
                  {{ $t("modal.credenzialiDimenticate") }}
                </Nuxt-Link>
              </div>
            </div>

            <!-- Error Login -->
            <div
              class="h-10 rounded-md flex items-center justify-center text-2xl"
            >
              <div class="alertError" id="ErroreLogin" v-show="Show_error">
                Opsss!!!!!!
              </div>
            </div>

            <!-- Button Login -->
            <div
              class="h-20 rounded-md flex items-center justify-center text-2xl"
            >
              <div
                class="buttonLogin duration-300 cursor-pointer"
                @click="show_error = true"
              >
                <!-- show_error = true -->
                {{ $t("modal.login") }}
              </div>
            </div>

            <!-- Button Register -->
            <div
              class="h-0 rounded-md flex items-center justify-center text-2xl"
            >
              <div
                class="buttonLogin buttonRegister duration-300 cursor-pointer"
                @click="show_error = false"
              >
                {{ $t("modal.register") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </span>
  </div>
  <!-- div generale -->
</template>

<script>
//import inputLabel from "@/components/inputLabel.vue";
//import { mdbIcon } from "mdbvue";

var t_modal;

export default {
  data() {
    return {
      show_modal: false,
      show_error: false,
      show_blur: false,
      menu_open: false,
      form: {
        email: "1232@gmail.com",
        password: "123",
      },
    };
  },
  mounted() {


  },
  computed: {
    // a computed getter
    Show_error: function () {
      return this.show_error;
    },
    Show_modal: function () {
      return this.show_modal;
    },
    Show_blur: function () {
      return this.show_blur;
    },
  },
  created() {
   /* this.$nuxt.$on("email", () => {
      console.log("Cambio email");
      });
    this.$nuxt.$on("password", () => {
      console.log("Cambio password");
      });*/
    //Ricezione Evento Apertura Chiusura Modal
    this.$nuxt.$on("showModal", () => {
      this.eventModal();
    });
    //Ricezione Evento
    this.$nuxt.$on("StatusMenu", (e) => {
      // console.log("evento "+e)
      this.menu_open = e;
      this.show_blur = !this.show_blur;
    });
  },

  methods: {
    //Metodo Login per effettuare la chiamata
    async login() {
      console.log(this.form.email);
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.form,
        });
        console.log(response);
      } catch (error) {}
    },
    //Metodo Che apre e chiude il menu
    eventModal() {
      if (true) {
        if (!this.Show_modal) {
          this.openModal();
        } else {
          this.closeModal();
        }
      }
    },
    closeModal() {
      $nuxt.$emit("StatusModal", false);
      if (!this.menu_open) {
        this.bodyClose();
      }
      this.animateMenuClose();
      //console.log("Chiuso");
    },
    openModal() {
      $nuxt.$emit("StatusModal", true);
      this.bodyOpen();
      this.animateMenuOpen();
      //console.log("Aperto");
      this.show_modal = !this.show_modal;
    },
    bodyOpen() {
      $("#webSite").addClass("filter");
      $("body").addClass("overflow-hidden");
    },
    bodyClose() {
      $("#webSite").removeClass("filter");
      $("body").removeClass("overflow-hidden");
    },
    changeStatusModal() {},
    /*Animazione Apertura Modal*/
    animateMenuOpen() {
      /*Restarta l apertura del modal*/
     // t_modal.restart();
    },

    /*Animazione Chiusura Menu*/
    animateMenuClose() {
      /*Riversa l aniamzione e toglie il modal dopo 500 millisecondi*/
     // t_modal.reverse();
      setTimeout(() => (this.show_modal = !this.show_modal), 500);
    },
  }, //methods
  components: {
    //inputLabel,
   // mdbIcon,
  },
};
</script>

<style lang="scss" scope>
$altezzaNav: 56px;
$heightModal: 525px;

/*Effetto Blur */

/*Allert Error */
.alertError {
  width: 95%;
  border: 2px solid red;
  border-radius: 25px;
  padding: 10px;
  font-size: 1.2rem;
  color: red;
  text-align: center;
  background: rgba($color: red, $alpha: 0.1);
}

/*Text passowordDimenticata*/
.passowordDimenticata {
  color: rgba(175, 175, 175, 0.7);
  font-size: 15px;
  margin-left: 33px;
  a {
    &:hover {
      color: rgb(121, 121, 121) !important;
    }
  }
}

/*Button Login */
.buttonLogin {
  text-align: center;
  color: #ffffff;
  background: #af384f;
  border-radius: 25px;
  width: 150px;
  // height: 50px;
  padding: 7px;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
  box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
}

.buttonLogin:hover {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.buttonLogin:active {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}
/**Button Register */
.buttonRegister {
  background: #d16a7d;
  width: 210px;
}
/* Container Modal-- */
.box-modal {
  position: relative;
  width: 90%;
  max-width: 500px;
  //height: 90%;
  height: 525px;
  //max-height: 525px;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  border-radius: 40px;
  color: #af384f;
  //top: calc(50% + 60px);
  margin: 0 auto;
  // left: 50%;
  //transform: translate(-50%, -50%) ;
}

.modal {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 30;
  position: fixed;
}
/* Media Query */
$mediaHeightModal: calc(56 + 525);
@media screen and (max-height: 618px) {
  .box-modal {
    top: calc(0% + 65px);
    //  transform: translate(-50%, 0%) !important;
  }
}
</style>



