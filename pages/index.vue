<template>
  <!-- div generale -->
  <div>
    <!-- Div header home page -->
    <div class="bgred flex items-center grid">
      <h1 class="text-white text-center">{{ $t("header.title") }}</h1>
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

    <div class="containerInfoCovid grid flex items-center">
      <nuxt-link
        type="button"
        class="text-center text-white font-semibold px-6 py-3 rounded-lg btnInfoCovid duration-300"
        :to="localePath('/test')"
      >
        Info Covid
      </nuxt-link>
    </div>

    <div class="containerBoxHome grid grid-col-1 gap-6 ">
      <boxHome class="" :title="$t('hero.developer')"></boxHome>
      <boxHome class="" :title="$t('hero.designer')"></boxHome>
      <boxHome class="" :title="$t('hero.marketing')"></boxHome>
      <boxHome class="" :title="$t('header.k')"></boxHome>
    </div>

<div class="clientsReviewsHome">
  <img
      class="z-10"
      src="~/assets/img/home/bg-clientsReviews.png"
      alt=""
      width="100%"
      height="100%"
    />
    <div class="TitleClientsReviews z-20 text-2xl sm:text-4xl md:text-6xl ">
       {{ $t("header.cosa") }}
    </div>
  
</div>


    <div class="containerStronzata">
      <div>
        <h1 class="title">MonicaCentri</h1>

        <h3>{{ $t("hero.developer") }}</h3>
        <h3>{{ $t("hero.designer") }}</h3>
        <h3>{{ $t("hero.marketing") }}</h3>

        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Nuxt-Link :to="localePath('/laser')">{{ $t("hero.lang") }}</Nuxt-Link>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </div>
    <!-- div generale -->
  </div>
</template>

<script>
import boxHome from "@/components/boxHome.vue";
export default {
  components: {
    boxHome,
  },

};
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

.containerInfoCovid {
  /* width: 100%; */
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 870px;
}

.btnInfoCovid {
  background: #af384f;
  border-radius: 50px;
  width: 200px;
}
.btnInfoCovid:hover {
  transform: scale(0.9);
}

.containerBoxHome {
  /* background: #35495e; */
  top: 966px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  /* width: 100%; */
}


.clientsReviewsHome{
  position: absolute;
  top:2270px;
  width: 100%;
}

.TitleClientsReviews{
color: #af384f;
  /* font-size: 3rem; */
  text-align: center;
  
position: absolute;
top: 40%;
width: 100%;



}


.containerStronzata {
  margin: 0 auto;
  min-height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3000px;
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


</style>
