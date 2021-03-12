<template>
  <div class="container">
    <div>
      <h1 class="title">MonicaCentri</h1>

      <h3>{{ $t("hero.developer") }}</h3>
      <h3>{{ $t("hero.designer") }}</h3>
      <h3>{{ $t("hero.marketing") }}</h3>

<br><br><br><br><br><br><br><br><br><br>
<Nuxt-Link :to="localePath('/laser')" >{{$t("hero.lang")}}</Nuxt-Link>
<Nuxt-Link :to="localePath('/test')" >test</Nuxt-Link>
<br><br><br><br><br><br><br><br><br><br>


      <div class="giu">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque excepturi
        alias veniam! Omnis, nostrum. Similique officia nam tenetur quas
        recusandae unde obcaecati, suscipit vitae distinctio id laborum sit
        aperiam. Molestias?
      </div>
    </div>
  </div>
</template>

<script>
export default {

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

.giu {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 1180px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
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

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
