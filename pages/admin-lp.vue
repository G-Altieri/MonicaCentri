<template>
  <div>
    <div class="mx-auto">
      <div
        class="w-full grid relative mx-auto bg-white"
        style="padding-top: 6rem"
      >
        <!-- Test Button Copy into Clipboard -->
        <div style="padding-top: 6rem" class="px-4" v-show="showCopied">
          <div
            class="
              py-3
              px-5
              mb-4
              bg-green-100
              text-green-900 text-sm
              rounded-md
              border border-green-200
              flex
              items-center
              justify-between
            "
            role="alert"
          >
            <span><b>Copiato! </b> {{ textCopied }} </span>
            <button
              class="w-4"
              type="button"
              data-dismiss="alert"
              aria-label="Close"
              @click="showCopied = false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="{2}"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Attend Response -->
        <div
          style="padding-top: 6rem"
          class="px-4 grid"
          v-show="showResponseServer"
        >
          <div
            class="mx-auto items-center p-4 text-white rounded-full"
            style="background: #af384f"
          >
            {{ loading }}
          </div>
        </div>

        <!-- Button Update  Search Bar e Order By-->
        <div class="flex gap-4 px-4 text-center items-stretch w-5/6 mx-auto grid grid-cols-2 md:grid-cols-3 ">
          <!-- Button Update -->
          <div
            class="p-2 text-white rounded-full flex-1 self-center"
            style="background: #af384f"
            @click="reload()"
          >
            Aggiorna
          </div>
          <!-- Order By -->
          <div
            class="p-2 text-white rounded-full flex-1 self-center"
            style="background: #af384f"
          >
            Ordina
          </div>
          <!-- Search Bar -->
            <input
              id="inputRicerca"
              type="text"
              name="inputRicerca"
              placeholder="Ricerca"
              class="
             flex-none
              self-center
                px-4
                py-2
                rounded-lg
                border border-red-200
                focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-red-400  
                col-span-2 md:col-span-1
              "
            />
        
        </div>

        <!-- Table -->
        <table
          class="rounded-t-lg m-5 w-5/6 mx-auto bg-red-200 text-gray-800 mt-16"
        >
          <tr class="text-left border-my-red border-b-2">
            <th class="px-4 py-3">#</th>
            <th class="px-4 py-3">Nome</th>
            <th class="px-4 py-3">Numero</th>
            <th class="px-4 py-3">Cittá</th>
          </tr>

          <tr
            class="bg-gray-100 border-b border-my-pink"
            v-for="(utente, index) in request"
            :key="utente.id"
          >
            <td class="px-4 py-3">
              {{ index + 1 }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.name)"
            >
              {{ utente.name }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.number)"
            >
              <a :href="'tel:+39' + utente.number">
                {{ utente.number }}
              </a>
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.city)"
            >
              {{ utente.city }}
            </td>
          </tr>
        </table>
        <!--**Table -->

        <!-- <pre><code>{{request }}</code></pre> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip: "no ip",
      loading: "Caricamento in corso",
      request: null,
      textCopied: null,
      showCopied: false,
      showResponseServer: true,
    };
  }, //data
  mounted() {}, //mounted
  created() {
    this.renderRequest();

    /* Richiede Ip
    this.$axios
      .$get("https://api.ipify.org/?format=json", {
        headers: {
        
        },
      })
      .then((response) => {
        this.ip = response;
        // console.log(response);
      })
      .catch((error) => {
        //this.loading = "Ops, qualcosa é andato storto";
        console.error("Oh Error, ip");
        console.error(error);
      });*/
  },
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

  methods: {
    /*    copy() {
      //Creating textarea element
      let textarea = document.createElement("textarea");
      //Settings its value to the thing you want to copy
      //textarea.value = this.$refs.asd.innerText;
      textarea.value = this.$refs.asd.innerText;
      //Appending the textarea to body
      document.body.appendChild(textarea);
      //Selecting its content
      textarea.focus();
      textarea.select();
      //Copying the selected content to clipboard
      document.execCommand("copy");
      //Removing the textarea
      document.body.removeChild(textarea);
    },
*/
reload(){
  window.location.reload();
},
    copyToClipBoard(params) {
      // console.log(params);

      //Creating textarea element
      let textarea = document.createElement("textarea");
      //Settings its value to the thing you want to copy
      //textarea.value = this.$refs.asd.innerText;
      textarea.value = params;
      //Appending the textarea to body
      document.body.appendChild(textarea);
      //Selecting its content
      textarea.focus();
      textarea.select();
      //Copying the selected content to clipboard
      document.execCommand("copy");
      //Removing the textarea
      document.body.removeChild(textarea);

      this.showCopied = true;
      this.textCopied = params;
    },

    async renderRequest() {
      await this.$axios
        .$get("https://shielded-island-95040.herokuapp.com/api/client")
        //Local http://127.0.0.1:8000/api/client
        //Production https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client
        //Old SiteGround "https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client"
        .then((response) => {
          this.showResponseServer = false;
          this.loading = "Caricamento Effettuato :)";
          console.log(response);
          this.request = response;
        })
        .catch((error) => {
          this.loading = "Ops, qualcosa é andato storto";
          console.error("Oh Error");
          console.error(error);
        });
    },
  }, //methods
  components: {},
};
</script>

<style lang="scss" scoped>
.border-my-table-admin {
  border-radius: 25px;
}

.border-my-red {
  border-color: #af384f !important;
}
.border-my-pink {
  border-color: #d16a7d !important;
}
</style>

