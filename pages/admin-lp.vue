<template>
  <div>
    <div class="mx-auto">
      <div
        class="w-full grid relative mx-auto bg-white"
        style="padding-top: 6rem"
      >
        <!-- Test Button Copy into Clipboard -->
        <div style="top: 0px" class="px-4" v-show="showCopied">
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
              absolute
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

        <!-- Button Update  Search Bar e Order By-->
        <div
          class="
            flex
            gap-4
            px-4
            text-center
            items-stretch
            w-5/6
            mx-auto
            grid grid-cols-2
            md:grid-cols-3
          "
        >
          <!-- Button Update -->
          <div
            class="
              p-2
              text-white
              rounded-full
              flex-1
              self-center
              cursor-pointer
            "
            style="background: #af384f"
            @click="reload()"
          >
            Aggiorna
          </div>
          <!-- Order By -->
          <div
            class="
              p-2
              text-white
              rounded-full
              flex-1
              self-center
              cursor-pointer
            "
            style="background: #af384f"
            @click="showOrder = !showOrder"
          >
            Ordina
          </div>

          <!-- Search Bar -->
          <input
            v-model="search"
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
              focus:outline-none
              focus:ring-2 focus:ring-indigo-300
              focus:border-red-400
              col-span-2
              md:col-span-1
            "
          />
        </div>

        <!-- Modal Ordina -->
        <div
          v-show="showOrder"
          class="
            absolute
            mx-auto
            grid
            flex
            w-4/5
            bg-white
            rounded-lg
            shadow-md
            bg-pink-100
          "
          style="
            height: auto;
            top: 153px;
            left: 50%;
            transform: translateX(-50%);
          "
        >
          <!-- Modal Option -->
          <div class="text-red font-semibold text-xl grid grid-cols-2 gap-6">
            <!-- Title e X -->
            <div class="justify-self-start px-6 py-2">Visulizza</div>
            <div
              @click="showOrder = !showOrder"
              class="justify-self-end px-6 py-2 cursor-pointer"
            >
              X
            </div>
            <!-- Visualizza Indici Table -->
            <div class="grid grid-cols-1 px-6 col-span-2 gap-y-2">
              <!-- ID -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxID"
                  v-model="tableIndices.id"
                  class="h-6 w-6"
                />
                <label for="checkboxID">Id</label>
              </div>
              <!-- Name -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxName"
                  v-model="tableIndices.name"
                  class="h-6 w-6"
                />
                <label for="checkboxName">Nome</label>
              </div>
              <!-- number -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxNumber"
                  v-model="tableIndices.number"
                  class="h-6 w-6"
                />
                <label for="checkboxNumber">Numero</label>
              </div>
              <!-- City -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxCity"
                  v-model="tableIndices.city"
                  class="h-6 w-6"
                />
                <label for="checkboxCity">Cittá</label>
              </div>
              <!-- Data -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxData"
                  v-model="tableIndices.data"
                  class="h-6 w-6"
                />
                <label for="checkboxData">Data</label>
              </div>
            </div>

            <!-- Order -->
            <div class="col-span-2 justify-self-start px-6 py-2">Ordina <div class="text-sm">(questa funzionalitá é in sviluppo)</div>   </div>

            <!-- Visualizza Indici Ordini -->
            <div class="flex items-center px-6 gap-y-2 grid grid-cols-1 col-span-2 text-lg">
              <div>
                <input
                  type="radio"
                  id="radioA-Z"
                  class="h-6 w-6 mr-2"
                  value="az"
                  v-model="tableOrder"
                />
                <label for="radioA-Z">Alfabetico A-Z</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioZ-A"
                  class="h-6 w-6 mr-2"
                  value="za"
                  v-model="tableOrder"
                />
                <label for="radioZ-A">Alfabetico Z-A</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioZ-A"
                  class="h-6 w-6 mr-2"
                  value="cre"
                  v-model="tableOrder"
                />
                <label for="radioZ-A">Crescente per data</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="radioZ-A"
                  class="h-6 w-6 mr-2"
                  value="decr"
                  v-model="tableOrder"
                />
                <label for="radioZ-A">Decrescente per data</label>
              </div>
            </div>

            <!-- Modal Option -->
          </div>
        </div>

        <!-- Table -->
        <table
          class="rounded-t-lg m-5 w-5/6 mx-auto bg-red-200 text-gray-800 mt-16"
        >
          <tr class="text-left border-my-red border-b-2">
            <th class="px-4 py-3" v-show="tableIndices.id">#</th>
            <th class="px-4 py-3" v-show="tableIndices.name">Nome</th>
            <th class="px-4 py-3" v-show="tableIndices.number">Numero</th>
            <th class="px-4 py-3" v-show="tableIndices.city">Cittá</th>
            <th class="px-4 py-3" v-show="tableIndices.data">Data</th>
          </tr>

          <tr
            class="bg-gray-100 border-b border-my-pink"
            v-for="(utente, index) in filterResponse"
            :key="utente.id"
          >
            <td class="px-4 py-3" v-show="tableIndices.id">
              {{ index + 1 }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.name)"
              v-show="tableIndices.name"
            >
              {{ utente.name }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.number)"
              v-show="tableIndices.number"
            >
              <a :href="'tel:+39' + utente.number">
                {{ utente.number }}
              </a>
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.city)"
              v-show="tableIndices.city"
            >
              {{ utente.city }}
            </td>
            <td class="px-4 py-3 cursor-pointer" v-show="tableIndices.data">
              {{ new Date(utente.created_at).toLocaleString("en-GB") }}
            </td>
          </tr>
          <!--**Table -->
        </table>

        <!-- Attend Response -->
        <div
          style="padding-top: 0rem"
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

        <!-- <pre><code>{{request }}</code></pre> -->
        <!-- <pre><code>{{tableOrder }}</code></pre> -->
        <!-- <pre><code>{{filterResponse}}</code></pre> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      ip: "no ip",
      loading: "Caricamento in corso",
      request: "",
      textCopied: null,
      showCopied: false,
      showResponseServer: true,
      tableIndices: {
        id: true,
        name: true,
        number: true,
        city: true,
        data: false,
      },
      tableOrder: "cre",
      showOrder: false,
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
    filterResponse() {
      if (this.request != "") {
        //return this.request.sort((a, b) => b.name.localeCompare(a.name))
        return this.request.filter((x) => {
          return (
            x.city.toLowerCase().match(this.search.toLowerCase()) ||
            x.name.toLowerCase().match(this.search.toLowerCase()) ||
            x.number.toString().match(this.search)
            //  x.created_at.toString().match(this.search)
          );
        });
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
    reload() {
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

