<template>
  <div class="containerMenu z-40"
  :class="{ hidden: !open }"
  >
    <div class="container txtRed">
      <ul class="textMenu">
        <li>
          <a href=""><b>TEST1</b></a>
        </li>
        <li>
          <a href=""><b>TEST2</b></a>
        </li>
        <li>
          <a href=""><b>TEST3</b></a>
        </li>
        <li>
          <a href=""><b>TEST4</b></a>
        </li>
        <li>
          <a href=""><b>TEST5</b></a>
        </li>
       
      </ul>
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      open : false
    };
  },
  created(){
    this.$nuxt.$on('eventoX', () => { this.openMenu()})
  },
  methods:{
    //Metodo Che apre e chiude il menu
    openMenu(){
      this.open = !this.open //hidden menu
      if(this.open){ //hidden scrollbar
        $("body").addClass("overflow-hidden")
      }else{
        $("body").removeClass("overflow-hidden")
      }
    },

  },//methods
  props: {
  
  },
};
</script>

<style >
.containerMenu {
  background: gray;
  width: 100%;
  height: 100vh;
}

.textMenu {
  font-size: 2rem;
}
</style>
