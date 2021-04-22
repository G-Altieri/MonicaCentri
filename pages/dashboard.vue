<template>
  <div class="font-5xl pt-20 mx-auto text-center w-full">
    Dashboard <br />
    {{ $auth.user }}
    <br>
    <button
      class="border-red-500 p-5 mx-auto text-center font-5xl"
      @click="debugconsole()"
    >
      Console view
    </button>
    <br />


    <!-- <div class="w-50">local {{ this.$auth.strategy.token.get() }} <br /></div> -->

    loggato = {{ this.$auth.loggedIn }} <br />

    <br /><br /><br /><br /><br />
    <!-- <button
      class="border-red-500 p-5 mx-auto text-center font-5xl"
      @click="refreshToken()"
    >
     Auto RefreshToken 15s
    </button> -->

       <!-- <button
      class="border-red-500 p-5 mx-auto text-center font-5xl"
      @click="scadenzaToken()"
    >
      Fai scadere il Token
    </button> -->

    <br /><br /><br /><br /><br />
    <Nuxt-Link :to="localePath('/logout')"> Logout </Nuxt-Link>
    <nuxt-link :to="localePath('/logout')"> </nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {
      newToken: null,
    };

  },
  created(){
    //  this.refreshToken()
  },
  mounted(){
   // this.aggiornametoAutomatico()
 //   this.$auth.$storage.setUniversal("_token_expiration.local", 1800);
  },
  methods: {
    debugconsole() {
      console.log("status:");
      console.log(this.$auth.strategy.token.status());
      console.log("unknown:");
      console.log(this.$auth.strategy.token.status().unknown());
      console.log("valid:");
      console.log(this.$auth.strategy.token.status().valid());
      console.log("expired:");
      console.log(this.$auth.strategy.token.status().expired());
      console.log("Token:");
      console.log(this.$auth.strategy.token.get());
      console.log(this.$auth.$storage);

    },

    refreshToken() {
      this.richiestaRefresh().then(() => {
        console.log(this.newToken);
        var token = this.newToken;
        //controllo se il token e vuoto
        if (token != null && token != undefined) {
          //aggiorno il token
          this.$auth.strategy.token.set(token);
          console.log("TokenAggiornato")
        }
        if(this.$auth.loggedIn){
          setTimeout(() => { this.refreshToken() },(1.5*Math.pow(10, 4)) )
        }
      });
    },

    //Richiesta new token
    async richiestaRefresh() {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: this.$auth.strategy.token.get(),
      };
      try {
        var response = await this.$axios.$post(
          "https://www.monicacentri.com/BackEnd/BackEndMonicaCentri/public/api/auth/refresh", 
          //local  http://127.0.0.1:8000/api/auth/refresh
          //production 
          {},
          {
            headers: headers,
          }
        );
        this.newToken = response.access_token;
      } catch (error) {
        console.log("Errore nella richiesta " + error);
      }
    },

    aggiornametoAutomatico() {
      // Watch state changes
     /* this.$auth.$storage.watchState("_token_expiration.local", (newValue) => {
        console.log(newValue)
      });*/
    },
    scadenzaToken(){
     //setTimeout(() => { this.logoutForce() }, 3000)
      setTimeout(() => { this.refreshToken() }, 10000)

    },
   logoutForce(){
       this.$router.push({ path: "/logout" });
    }
  },
};
</script>

<style>
</style>