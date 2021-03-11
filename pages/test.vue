<template>
  <div class="container">
    <div>
      <h1 class="title">MonicaCentri</h1>


<br><br><br><br><br><br><br><br><br><br>
<Nuxt-Link to="/"><h1>Test</h1></Nuxt-Link>



<br><br><br><br>
State: {{ this.$store.state.lang}}
<br><br><br><br><br><br>

<button @click="cambioLingua()">Cia</button>

    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {
    
    };
    },
    methods:{
        cambioLingua(){
            this.$store.commit('index/changeLang')
        }
    },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}


.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}


.links {
  padding-top: 15px;
}
</style>
