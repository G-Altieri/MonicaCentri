<template>
  <div class="pt-20">
    <pre><code>{{form}}</code></pre>
   <center>
     <h1>Login</h1>
     
    <div class="border-red-900 w-3/4">

    <form action="#" v-on:submit.prevent="login()">
      <input
        placeholder="Email..."
        type="email"
        name="email"
        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border-green-400 border-2"
        v-model="form.email"
      />
      <input
        placeholder="Password..."
        type="password"
        name="password"
        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border-green-400 border-2"
        v-model="form.password"
      />
      <button class="bg-gray-900 text-white p-4" type="submit">Login</button>`
    </form>
        </div>

    <br />   <br />   <br />   <br />
 
     <h1>Registrazione</h1>
  
    <br />
    <form action="#" v-on:submit.prevent="register()">
      <input
        placeholder="Name..."
        type="text"
        name="name"
       class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border-green-400 border-2"
        v-model="formRegister.name"
      />
      <input
        placeholder="Email..."
        type="email"
        name="email"
       class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border-green-400 border-2"
        v-model="formRegister.email"
      />
      <input
        placeholder="Password..."
        type="password"
        name="password"
          class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white border-green-400 border-2"
        v-model="formRegister.password"
      />
      <button class="bg-gray-900 text-white p-4" type="submit">
        Registrazione
      </button>
      <!-- <button class="bg-gray-900 text-white" type="submit"> -->

      <!-- </button> -->
      <!-- <div v-if="error">{{error}}</div> -->
    </form>
     </center>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
      form: {
        email: "",
        password: "",
      },
      formRegister: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  /*  async asyncData({ $axios }) {
    try {
      const Response = await $axios.get("/api/testdb", {});
      console.log(Response);
    } catch (error) {
      console.log(error);
      console.log("Cazzo");
    }
  },*/
  methods: {
    //Metodo Login per effettuare la chiamata
    async login() {
      //  alert("asd");
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.form,
        });
        console.log(response);
        console.log("Loggin Effettuato");
        //console.log(this.$auth.strategy.token.status());
       // this.$router.push({ path: "/dashboard" });
        //localePath('/dasboard')
        /*
        var Response = this.$axios.$post("/auth/login", {
          email: this.form.email,
          password: this.form.password,
        });
        console.log(Response);*/
      } catch (error) {
        this.error = error.response.data;
        console.log(error.response.data);
        console.log("Cazzo");
      }
    },

    async register() {
      var errorRegister = false;
      const axios = require("axios");
      axios
        .post("https://www.monicacentri.com/BackEnd/BackEndMonicaCentri/public/api/auth/register", {
          //production confing https://www.monicacentri.com/BackEnd/BackEndMonicaCentri/public/api/auth/register
          //local http://127.0.0.1:8000/api/auth/register
          name: this.formRegister.name,
          email: this.formRegister.email,
          password: this.formRegister.password,
        })
        .then(function (response) {
          console.log(response);
          //this.loginRegister();
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
          errorRegister = true;
        });
      if (!errorRegister) {
        this.loginRegister();
      }
    },
    async loginRegister() {
      //    alert("asd");
      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.formRegister.email,
            password: this.formRegister.password,
          },
        });
        console.log(response);
        //console.log(this.$auth.strategy.token.status());
        console.log("Registrazione Effettuato");
        this.$router.push({ path: "/dashboard" });
        //localePath('/dasboard')
        /*
        var Response = this.$axios.$post("/auth/login", {
          email: this.form.email,
          password: this.form.password,
        });
        console.log(Response);*/
      } catch (error) {
        this.error = error.response.data;
        console.log(error.response.data);
        console.log("Cazzo");
      }
    },
    /* async me() {
      try {
        var Response2 = this.$axios.$get(
          "/auth/me",
        );
        console.log(Response2);
      } catch (error) {
         this.error=error.response.data;
        console.log(error);
        console.log("Cazzo2");
      }
    },*/
  },
};
</script>

<style>
</style>