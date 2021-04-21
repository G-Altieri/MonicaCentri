<template>
  <div class="container">
    <div>
      <h1 class="title">MonicaCentri</h1>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Nuxt-Link :to="localePath('/')"><h1>Home</h1></Nuxt-Link>
      <client-only>
        {{ ip }}
        {{ result }}
      </client-only>

      <div>
        <button @click="animeEl">Click me</button>
        <p class="p1">Nuxt Animejs Module</p>
      </div>
      <!-- <div class="testbg" width="100px">{{ ip2 }}</div> -->

      <br /><br /><br /><br /><br /><br />
      {{lang}}
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      ip: "NotApi",
      result: "",
    };
  },
  computed:{
    lang () {
      return this.$store.state.lang
    }
  },
  async asyncData({ $axios }) {
    /*let payload = { nome: "test", score: "1000", difficolta: "imposibile" };
     const params = "nome=test&score=1000&difficolta=cazzova";
    const ip = await $axios.$get(
      `https://inf5.altervista.org/scoreGame/insertDato.php?${params}`,
      payload,
      {
        headers: {
         CORS: "Access-Control-Allow-Origin",
        },
      }
    );*/

    const result = await $axios.$get(
      "https://inf5.altervista.org/scoreGame/view.php",
      "",
      {
        headers: {
          CORS: "Access-Control-Allow-Origin",
        },
      }
    );
    //console.log(result);
    return { result };
  },
  created() {},
  methods: {
    animeEl() {
      this.$anime({
        targets: ".p1",
        translateX: 250,
        rotate: "1turn",
        backgroundColor: "#FFF",
        duration: 800,
      });
    },
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

.testbg {
  background-image: url("~assets/img/home/bg-cosadiconodinoi.svg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
  /* background-color: #999; */
  width: 100vw;
  height: 50vh;
  position: absolute;
  left: 0;
  top: 1000px;
}
</style>
