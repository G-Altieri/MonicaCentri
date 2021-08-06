<template>
  <div>

    <div class="mx-auto">

      <div
        class="w-full grid relative mx-auto bg-white">
      <div class="text-center text-xl p-16">
          {{ip.ip}} <br>
          {{loading}}
      </div>


<div v-for="utente in request" :key="utente.id" class="text-center text-xl p-3 mx-auto">
    {{utente.id +" "}} 
    {{utente.name +" "}} 
    {{utente.number +" "}} 
    {{utente.city}} <br>
</div>

          <!-- <pre><code>{{request }}</code></pre> -->

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ip:null,
      loading: "Caricamento Dati",
      request:null,
    };
  }, //data
  mounted() {}, //mounted
  created() {
    this.renderRequest()
    
    this.$axios
        .$get("https://api.ipify.org/?format=json")
          .then((response) => {
            this.ip = response;
          // console.log(response);
        })
        .catch((error) => {
          //this.loading = "Ops, qualcosa é andato storto";
          console.error("Oh Error, ip");
          console.error(error);
        });
     
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
    async renderRequest() {
       await this.$axios
        .$get("http://127.0.0.1:8000/api/client")
          .then((response) => {
            this.loading = "";
          // console.log(response);
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
</style>

