<template>
  <div class="container">
    <div class="review text-center">
      <div class="text">
        {{ title }}
      </div>
    </div>
      <div class="img"><img :src="require(`~/assets/img/home/${img}.jpg`)" alt=""></div>
    <!-- <img src="~assets/img/home/review.png" alt=""> -->

    <!-- <div class="title"></div> -->
  </div>
</template>


<script>
export default {
  props: {
    title: String,
    img: String
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
}
.review {
  background-image: url(~assets/img/home/review.png);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: inherit;
  background-size: 40%;
  /* background-color: white; */
  width: 100%;
  position: relative;
  /*top: 2230px;*/
  height: 20vw;
  max-width: 1000px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 760px;
  min-height: 170px;
  max-height: 233px;
  z-index: 3;
}

.text {
  color: #af384f;
  position: relative;
  top: 10px;
  /* background: red; */
  width: 32%;
  margin: 0 auto;
}


.img{
position: relative;
width: 40px;
margin: 0 auto;
z-index: 1;
top: -73px;
}

@media screen and (min-width: 900px) {
  .text {
    top: 20px;
  }
}

@media screen and (min-width: 1100px) {
  .text {
    top: 35px;
  }
}
</style>