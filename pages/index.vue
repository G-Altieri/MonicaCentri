<template>
  <!-- div generale -->
  <div>
    <!-- Div header home page -->
    <div class="bgred flex items-center grid">
      <h1 class="text-white text-center">El tiempo</h1>
      <!--*** Div header home page*** -->
    </div>
    <img
      class="z-10"
      src="~/assets/img/home/bg-header.svg"
      alt=""
      width="100%"
      height="100%"
    />
    <div class="box-card">
      <img
        class="z-20 imgRenderCarta"
        src="~/assets/img/home/render-carta.jpg"
        alt=""
        width="100%"
        height="100%"
      />
    </div>


    <div class="containerInfoCovid">
      <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-lg">Info Covid</button>
    </div>

    <div class="containerStronzata">
      <div>
        <h1 class="title">MonicaCentri</h1>

        <h3>{{ $t("hero.developer") }}</h3>
        <h3>{{ $t("hero.designer") }}</h3>
        <h3>{{ $t("hero.marketing") }}</h3>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Nuxt-Link :to="localePath('/laser')">{{ $t("hero.lang") }}</Nuxt-Link>
        <Nuxt-Link :to="localePath('/test')">test</Nuxt-Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        <div class="giu">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          excepturi alias veniam! Omnis, nostrum. Similique officia nam tenetur
          quas recusandae unde obcaecati, suscipit vitae distinctio id laborum
          sit aperiam. Molestias?
        </div>
      </div>
    </div>
    <!-- div generale -->
  </div>
</template>

<script>
export default {};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.bgred {
  background: #af384f; /*#af384f*/
  width: 100%;
  height: 500px;
}

.box-card {
  background: white;
  border-radius: 15px;
  height: 450px;
  width: 290px;
  margin: 0 auto;
  position: absolute;
  /* border-radius: 20px;
    top: 333px;*/
    -webkit-box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4);
    box-shadow: 0px 0px 9px 0px rgba(50, 50, 50, 0.4); 
      left: 50%;
    top: 373px;
    transform: translateX(-50%);
}

.imgRenderCarta {
  border-radius: 15px;
  position: relative;
  width: 100%;
  height: auto;
}



.containerInfoCovid{
    margin: 0 auto;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.containerStronzata {
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
