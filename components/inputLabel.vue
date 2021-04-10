<template>
  <div :style="SizeWidth">
    <mdb-input :type="type" size="lg" :label="text" outline counter :id="id"/>
  </div>
</template>



<script>
import { mdbInput } from "mdbvue";
import { mdbIcon } from "mdbvue";

export default {
  data() {
    return {};
  },
  computed: {
    SizeWidth() {
      return {
        width: this.Size,
        position: "relative",
        margin: "0 auto",
      };
    },
   /* InputDiverso() {
          if(this.id=="EmailInput"){
            return ""
          }
    },*/
  }, //computed
  methods: {

  }, //metodi

  components: {
    mdbInput,
    mdbIcon,
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    text: {
      type: String,
      default: "Hello Word",
    },
    Size: {
      type: String,
      default: "100%",
    },
    EmailLogin: {
      type: String,
      default: "",
    },
  },
};
</script>


<style lang="scss" scope>
//Label quando e ACTIVE
.md-form.md-outline label.active {
  left: 20px;
  color: #af384f;
  top: 0px !important;
}
//Label quando  e in FOCUS
.md-form.md-outline input[type="text"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="password"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="email"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="time"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="date"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="datetime-local"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="tel"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="number"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label,
.md-form.md-outline input[type="search"]:focus:not([readonly]) + label,
.md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
  color: #af384f;
}
//Label quando NON e attiva
.md-form.md-outline label {
  position: absolute;
  top: 0px;
  left: 20px;
  padding-left: 0px;
  font-size: 1rem;
  color: #d16a7d;
  cursor: text;
  -webkit-transition: color 0.2s ease-out, -webkit-transform 0.2s ease-out;
  transition: color 0.2s ease-out, -webkit-transform 0.2s ease-out;
  transition: transform 0.2s ease-out, color 0.2s ease-out;
  transition: transform 0.2s ease-out, color 0.2s ease-out,
    -webkit-transform 0.2s ease-out;
  -webkit-transform: translateY(9px);
  transform: translateY(9px);
  -webkit-transform-origin: 0% 100%;
  transform-origin: 0% 100%;
}
//Input area quando e NORMALE
.md-form.md-outline input[type="text"],
.md-form.md-outline input[type="password"],
.md-form.md-outline input[type="email"],
.md-form.md-outline input[type="url"],
.md-form.md-outline input[type="time"],
.md-form.md-outline input[type="date"],
.md-form.md-outline input[type="datetime-local"],
.md-form.md-outline input[type="tel"],
.md-form.md-outline input[type="number"],
.md-form.md-outline input[type="search-md"],
.md-form.md-outline input[type="search"],
.md-form.md-outline textarea.md-textarea {
  border-radius: 25px;
  border: 1px solid #ffd2d2;
  font-size: 100%;
  margin-top: 0rem;
  margin-bottom: 0rem;
}

//Input area quando e FOCUS
.md-form.md-outline input[type="text"]:focus:not([readonly]),
.md-form.md-outline input[type="password"]:focus:not([readonly]),
.md-form.md-outline input[type="email"]:focus:not([readonly]),
.md-form.md-outline input[type="url"]:focus:not([readonly]),
.md-form.md-outline input[type="time"]:focus:not([readonly]),
.md-form.md-outline input[type="date"]:focus:not([readonly]),
.md-form.md-outline input[type="datetime-local"]:focus:not([readonly]),
.md-form.md-outline input[type="tel"]:focus:not([readonly]),
.md-form.md-outline input[type="number"]:focus:not([readonly]),
.md-form.md-outline input[type="search-md"]:focus:not([readonly]),
.md-form.md-outline input[type="search"]:focus:not([readonly]),
.md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
  border-color: #af384f;
  -webkit-box-shadow: inset 0 0 0 1px #af384f;
  box-shadow: inset 0 0 0 1px #af384f;
}
//Input area quando sottolineatura bordo e FOCUS
/*
.md-form input:not([type]):focus:not([readonly]),
.md-form input[type="text"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="password"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="email"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="url"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="time"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="date"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="datetime"]:not(.browser-default):focus:not([readonly]),
.md-form
  input[type="datetime-local"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="tel"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="number"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="search"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="phone"]:not(.browser-default):focus:not([readonly]),
.md-form input[type="search-md"]:focus:not([readonly]),
.md-form textarea.md-textarea:focus:not([readonly]) {
   border-bottom: 1px solid #af384f;
    -webkit-box-shadow: 0 1px 0 0 #af384f;
    box-shadow: 0 1px 0 0 #af384f;
}*/

/*Grandezza*/
.md-form.md-outline {
  position: relative;
  margin-top: 0;
  margin-bottom: 0;
}
.md-form.md-outline.form-lg .form-control.form-control-lg {
  /* padding: .5rem .725rem;
    margin: 0 auto;
    left: 50%;
    position: relative;
    transform: translateX(-50%);*/
  width: 100%;
}


.md-form.md-outline.form-lg label{
  font-size: 1.1rem !important;
  top: 3px ;
}
</style>

