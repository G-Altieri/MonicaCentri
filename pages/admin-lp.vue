<template>
  <div>
    <div class="mx-auto">
      <div class="w-full grid relative mx-auto bg-white">
        <!-- Table -->
        <table
          class="rounded-t-lg m-5 w-5/6 mx-auto bg-red-200 text-gray-800 mt-20"
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
            <td class="px-4 py-3" @click="copyToClipBoard(utente.id)">{{ index+1 }}</td>
            <td class="px-4 py-3" @click="copyToClipBoard(utente.name)">{{ utente.name }}</td>
            <td class="px-4 py-3" @click="copyToClipBoard(utente.number)">{{ utente.number }}</td>
            <td class="px-4 py-3" @click="copyToClipBoard(utente.city)">{{ utente.city }}</td>
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
      loading: "Caricamento Dati",
      request: null,
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
    copyToClipBoard(params) {
      console.log(params);
    },

    async renderRequest() {
      await this.$axios
        .$get(
          "https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client"
        )
        //Local http://127.0.0.1:8000/api/client
        //Production https://www.monicacentri.com/BackEnd/booking-monicacentri-app/public/api/client
        .then((response) => {
          this.loading = "";
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

