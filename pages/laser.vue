<template>
  <div class="container">
    <div>
      <h1 class="title">Laser</h1>
      <br /><br /><br />
      <nuxt-link
        v-for="language in langAvailable"
        :key="language.code"
        :to="switchLocalePath(language.code)"
      >
        {{ language.name }}
      </nuxt-link>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Nuxt-Link :to="languageGet">Home</Nuxt-Link>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  },
  computed: {
    langAvailable() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },

     languageGet() {
      if (this.$i18n.locale == "it") {
      return  this.languageSet = "/";
      } else {
       return this.languageSet = "/" + this.$i18n.locale + "/";
      } //metodo
    },

  },//computed
  method: {
   
  },//metodi
};
</script>

<style>
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
