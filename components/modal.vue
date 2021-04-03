<template>
  <!-- div generale -->
  <div>
    <!-- Modal -->
    <span @click="eventModal()">
      <Nuxt-Link :to="localePath('/laser')">
        <div class="modal flex hidden transition duration-300" id="id_modal">
          <div class="box-modal p-5 self-center">
            {{ $t("hero.lang") }}
          </div>
        </div>
      </Nuxt-Link>
    </span>
  </div>
  <!-- div generale -->
</template>

<script>
export default {
  data() {
    return {
      open: false,
    };
  },

  created() {
    this.$nuxt.$on("eventModal", () => {
      this.eventModal();
    });
  },

  methods: {
    //Metodo Che apre e chiude il menu
    eventModal() {
      if (!this.open) {
        $("#webSite").addClass("filter");
        $("#id_modal").removeClass("hidden");
        this.open = !this.open;
      } else {
        $("#webSite").removeClass("filter");
        $("#id_modal").addClass("hidden");
        this.open = !this.open;
      }
    },
  }, //methods
};
</script>

<style>
.modal {
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 30;
  position: fixed;
}

.box-modal {
  background: #af384f;
  left: 50%;
  color: white;
  transform: translateX(-50%);
  position: relative;
  border-radius: 25px;
}
</style>



