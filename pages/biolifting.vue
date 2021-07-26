<template>
  <!-- Navbar Acquisto -->
  <div class="navBuy fixed w-full h-8 grid grid-cols-2">
    <div
      class="
        text-white
        font-normal
        text-xs text-left
        flex
        self-center
        ml-2
        md:ml-5
      "
    >
      {{ $t("navBuy.fotoepilazione") }}
    </div>
    <div
      class="text-white text-right flex justify-end self-center mr-2 md:mr-5"
    >
      <div class="btnBuy p-1z px-3z">
        {{ $t("navBuy.buy") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navBuy {
  top: 56px;
  z-index: 50;
  background: #b13850;
}

.btnBuy {
  background: #306bb3;
 /* width: 48.46px;
  height: 15px;*/
  border-radius: 25px;
  font-weight: 500;
  font-size: 7px;
  font-family: "Montserrat", sans-serif;
}
</style>