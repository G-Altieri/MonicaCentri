<template>
  <div>
    <!-- Navbar Acquisto -->
    <div class="navBuy fixed w-full h-9 grid grid-cols-2">
      <div
        class="
          text-white
          font-medium
          text-xs text-left
          flex
          self-center
          ml-2
          md:ml-5
        "
      >
        {{ name }}
      </div>
      <div
        class="text-white text-right flex justify-end self-center mr-2 md:mr-5"
      >
        <a :href="link">
          <div class="btnBuy p-1 px-2 text-xs font-normal self-center">
            {{ $t("navBuy.buy") }}
          </div>
        </a>
      </div>
    </div>
  </div>
</template>





<script>
export default {
  props: {
    name: String,
    link: String,
  },
};
</script>

<style scoped>
.navBuy {
  top: 56px;
  z-index: 50;
  background: #b13850;
}
.btnBuy {
  background: #3791ff;
  /*width: 48.46px;
height: 15px;*/
  border-radius: 25px;
  /* font-weight: 500;*/
  font-size: 10px;
  font-family: "Montserrat", sans-serif;
}
</style>