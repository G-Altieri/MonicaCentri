<template>
  <div>
 
      <nuxt-link :to="localePath('/' + link)" v-if="type">
        <div class="containerBoxComponent text-white duration-300 shadow-lg">
          <div class="title">
            <h4>
              {{ title }}
            </h4>
          </div>
        </div>
      </nuxt-link>


  
      <nuxt-link :to="localePath('/' + link)" v-else>
        <!-- <img :src="'~/assets/img/home/box/box'+title+'.png'" :alt="title" class="boxContentImg" />  -->
        <img
          :src="require(`~/assets/img/home/box/box${title}.png`)"
          :alt="title"
          class="boxContentImg duration-300"
        />
    
      </nuxt-link>

    </div>
</template>


<script>
export default {
  props: {
    title: String,
    link: String,
    type: Boolean,
  },
};
</script>

<style scoped>
.containerBoxComponent {
  width: 300px;
  height: 300px;
  background: #af384f;
  border-radius: 25px;
  position: relative;
  margin: 0 auto;
  /* margin-bottom: 30px; */
  cursor: pointer;
  -webkit-box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
  box-shadow: 0px 3px 7px 0px rgba(50, 50, 50, 0.22);
}

.containerBoxComponent:hover {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.containerBoxComponent:active {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.title {
  color: white;
  padding: 20px;
  font-size: 2.5rem;
  line-height: 1.2;
  letter-spacing: 1.5px;
}

.boxContentImg {
  width: 300px;
  height: 300px;
}
.boxContentImg:hover {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.boxContentImg:active {
  -webkit-box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  box-shadow: 0px 15px 25px -5px rgba(50, 50, 50, 0.23);
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}
</style>