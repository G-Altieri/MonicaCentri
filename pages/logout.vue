<template>
<div class="w-full h-screen flex flex justify-center">
  <div class=" text-red text-5xl text-center self-center">
    <h1>Logout in corso...</h1>
  </div>
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