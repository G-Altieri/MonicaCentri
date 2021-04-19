<template>
  <div class="pt-24">
    <h1>Logout in corso...</h1>
  </div>
</template>

<script>
export default {
  middleware:"auth",
  async mounted() {
    try {
     await this.$auth.logout().then(() => {
        console.log("Logout eseguito con successo");
      });
    } catch (error) {
      console.log("Logout Error:");
      console.log(error);
    }
  },
};
</script>

<style>
</style>