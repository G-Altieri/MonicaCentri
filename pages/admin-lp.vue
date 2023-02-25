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
            class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200 flex items-center justify-between absolute"
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
          class="flex gap-4 px-4 text-center items-stretch w-5/6 mx-auto grid grid-cols-2 md:grid-cols-3"
        >
          <!-- Button Update -->
          <div
            class="p-2 text-white rounded-full flex-1 self-center cursor-pointer"
            style="background: #af384f"
            @click="reload()"
          >
            Aggiorna
          </div>
          <!-- Order By -->
          <div
            class="p-2 text-white rounded-full flex-1 self-center cursor-pointer"
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
            class="flex-none self-center px-4 py-2 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-red-400 col-span-2 md:col-span-1"
          />
        </div>

        <!-- Modal Ordina -->
        <div
          v-show="showOrder"
          class="absolute mx-auto grid flex w-4/5 bg-white rounded-lg shadow-md bg-pink-100"
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
                  v-model="tableIndices.nome"
                  class="h-6 w-6"
                />
                <label for="checkboxName">Nome</label>
              </div>
              <!-- Cognome -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxName"
                  v-model="tableIndices.cognome"
                  class="h-6 w-6"
                />
                <label for="checkboxName">Cognome</label>
              </div>
              <!-- number -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxNumber"
                  v-model="tableIndices.tel"
                  class="h-6 w-6"
                />
                <label for="checkboxNumber">Numero</label>
              </div>
              <!-- City -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxCity"
                  v-model="tableIndices.email"
                  class="h-6 w-6"
                />
                <label for="checkboxCity">Email</label>
              </div>
              <!-- Sesso -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxCity"
                  v-model="tableIndices.sesso"
                  class="h-6 w-6"
                />
                <label for="checkboxCity">Sesso</label>
              </div>
              <!-- Data -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxData"
                  v-model="tableIndices.dataOra"
                  class="h-6 w-6"
                />
                <label for="checkboxData">Data</label>
              </div>
              <!-- Marketing -->
              <div>
                <input
                  type="checkbox"
                  id="checkboxData"
                  v-model="tableIndices.marketing"
                  class="h-6 w-6"
                />
                <label for="checkboxData">consenso Marketing</label>
              </div>
            </div>

            <!-- Order -->
            <div class="col-span-2 justify-self-start px-6 py-2">
              Ordina
              <!-- <div class="text-sm">(questa funzionalitá é in sviluppo)</div> -->
            </div>

            <!-- Visualizza Indici Ordini -->
            <div
              class="flex items-center px-6 gap-y-2 grid grid-cols-1 col-span-2 text-lg"
            >
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
            <th class="px-4 py-3" v-show="tableIndices.nome">Nome</th>
            <th class="px-4 py-3" v-show="tableIndices.cognome">Cognome</th>
            <th class="px-4 py-3" v-show="tableIndices.tel">Numero</th>
            <th class="px-4 py-3" v-show="tableIndices.email">Email</th>
            <th class="px-4 py-3" v-show="tableIndices.sesso">Sesso</th>
            <th class="px-4 py-3" v-show="tableIndices.dataOra">Data</th>
            <th class="px-4 py-3" v-show="tableIndices.marketing">
              Consenso Marketing
            </th>
          </tr>

          <tr
            class="border-b border-my-pink"
            :class="index % 2 ? 'bg-gray-200' : 'bg-white'"
            v-for="(utente, index) in filterResponse"
            :key="index"
          >
            <td class="px-4 py-3" v-show="tableIndices.id">
              {{ index + 1 }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.nome)"
              v-show="tableIndices.nome"
            >
              {{ utente.nome }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.cognome)"
              v-show="tableIndices.cognome"
            >
              {{ utente.cognome }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.tel)"
              v-show="tableIndices.tel"
            >
              <a :href="'tel:+39' + utente.tel">
                {{ utente.tel }}
              </a>
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.email)"
              v-show="tableIndices.email"
            >
              {{ utente.email }}
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.sesso)"
              v-show="tableIndices.sesso"
            >
              {{ utente.sesso }}
            </td>

            <td class="px-4 py-3 cursor-pointer" v-show="tableIndices.dataOra">
              {{ utente.dataOra }}
              <!-- {{ new Date(utente.created_at).toLocaleString("en-GB") }} -->
            </td>
            <td
              class="px-4 py-3 cursor-pointer"
              @click="copyToClipBoard(utente.marketing)"
              v-show="tableIndices.marketing"
            >
              {{ utente.consensoMarketing ? "Consentito" : "Negato" }}
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

        <!-- 
        <div v-for="(utente) in request" :key="utente.id">
            {{utente.nome}}
            {{utente.cognome}}
            {{utente.email}}
            {{utente.tel}}
            {{utente.dataOra}}
        </div> -->
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
        nome: true,
        cognome: true,
        tel: true,
        email: true,
        dataOra: true,
        sesso: true,
        marketing: true,
      },
      tableOrder: "az",
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
        //console.log(this.request);
        switch (this.tableOrder) {
          case "az":
            this.request = this.request.sort((a, b) => {
              if (a.nome < b.nome) {
                return -1;
              }
            });
            break;
          case "za":
            this.request = this.request.sort((a, b) => {
              if (a.nome > b.nome) {
                return -1;
              }
            });
            break;
          case "decr":
            this.request = this.request.sort((a, b) => {
              if (a.dataOra < b.dataOra) {
                return -1;
              }
            });
            break;
          case "cre":
            this.request = this.request.sort((a, b) => {
              if (a.dataOra > b.dataOra) {
                return -1;
              }
            });
            break;
        }

        //return this.request;
        const result = JSON.stringify(this.request);
        const obg = JSON.parse(result);
       // console.log(obg);

        return obg.filter((obj) => {
          return (
            obj.nome.toLowerCase().match(this.search.toLowerCase()) || 
            obj.cognome.toLowerCase().match(this.search.toLowerCase()) ||
            obj.tel.match(this.search.toLowerCase()) ||
            obj.email.toLowerCase().match(this.search.toLowerCase()) ||
            obj.sesso.toLowerCase().match(this.search.toLowerCase()) ||
            obj.dataOra.toLowerCase().match(this.search.toLowerCase())
          );
        });

        /*  return (
            x.nome.toLowerCase().match(this.search.toLowerCase()) ||
            x.cognome.toLowerCase().match(this.search.toLowerCase()) ||
            x.tel.match(this.search) ||
            x.email.toLowerCase().match(this.search) ||
            x.sesso.toLowerCase().match(this.search) ||
            x.dataOra.toLowerCase().match(this.search) ||
            x.marketing.match(this.search)

            //  x.created_at.toString().match(this.search)
          ); */
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
        .$get(
          "https://vivicalascio.altervista.org/MonicaCentri/receiveForm.php"
        )
        //Local http://127.0.0.1:8000/api/client
        //Production https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client
        //Old SiteGround "https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client"
        .then((response) => {
          this.showResponseServer = false;
          this.loading = "Caricamento Effettuato :)";
          //       console.log(response.filter((obj) => obj.nome === "gio"));
          //  const obj = JSON.parse('['+response+']');
          //  console.log(obj);
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

