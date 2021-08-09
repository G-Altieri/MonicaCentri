<template>
  <div>
 
      <nuxt-link :to="localePath('/' + link)" v-if="type == 1">
        <div class="containerBoxComponent text-white duration-300 shadow-lg">
          <div class="title">
            <h4>
              {{ title }}
            </h4>
          </div>
        </div>
      </nuxt-link>


      <nuxt-link :to="localePath('/' + link)" v-if="type == 2">
        <div class="Box2 duration-300 shadow-lg">
          <div class="titleBox2 font-semibold text-left pt-2 pl-5">
            <h4>
              {{ title }}
            </h4>
            <img   :src="require(`~/assets/img/home/box/${title}.png`)" alt="laser" class="imgBox2">
          </div>
        </div>
      </nuxt-link>
  
      <nuxt-link :to="localePath('/' + link)"  v-if="type == 3">
        <!-- <img :src="'~/assets/img/home/box/box'+title+'.png'" :alt="title" class="boxContentImg" />  -->
        <img
          :src="require(`~/assets/img/home/box/box${title}.jpg`)"
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
    type: Number,
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
  border-radius: 11px;
  position: relative;
  margin: 0 auto;
  /* margin-bottom: 30px; */
  cursor: pointer;
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


.Box2{
  width: 300px;
  height: 300px;
  border-radius: 14px;
  position: relative;
  margin: 0 auto;
  cursor: pointer;
  -webkit-box-shadow: 0px 1px 20px -3px rgba(0,0,0,0.6); 
box-shadow: 0px 1px 20px -3px rgba(0,0,0,0.6); 
}

.Box2:hover {
-webkit-box-shadow: 0px 1px 38px 4px rgba(0,0,0,0.4); 
box-shadow: 0px 1px 38px 4px rgba(0,0,0,0.4);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
.Box2:active {
-webkit-box-shadow: 0px 1px 9px 0px #000000; 
box-shadow: 0px 1px 9px 0px #000000;
  -webkit-transform: scale(0.98);
  transform: scale(0.98);
}

.titleBox2{
  color: #af384f;
 font-size: 2.5rem;
}

.imgBox2{
  position: absolute;
  border-radius: 14px;
  transform: scale(0.9);
  float: right;
  right: -12px;
  top: 35px;
}

</style>