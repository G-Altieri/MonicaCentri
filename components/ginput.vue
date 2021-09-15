<template>
  <!-- This is the input component -->
  <div
    class="relative h-10 input-component transition-all duration-150 box-border"
    v-bind:class="{ empty: isEmpty }"
  >
    <!-- Input Area -->
    <input
      :id="id"
      :type="type"
      :name="name"
    
      class="
        h-full
        w-full
        border-gray-300
        px-2
        transition-all
        duration-150
        border-red
        rounded-md
        box-border
      "
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
      :input="labelFocus()"
      v-on:keyup.enter="nextStepEnter()"
    />
    <!-- Label -->
    <label
      :for="id"
      class="
        absolute
        left-2
        transition-all
        bg-white
        px-1
        text-red
        duration-150
        cursor-text
      "
    >
      {{ text }}
    </label>
    <!-- Error Email -->
    <div
      class="
        text-red-600
        font-bold
        text-md
        left-2-5
        mb-1-5
        my-1
        relative
        text-left
      "
    >
      {{ errorMsg }}
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isEmpty: false,
    };
  },
  computed: {}, //computed

  created() {},
  methods: {
    labelFocus() {
      if (this.value == "" || this.value == null || this.value == undefined) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    },

    nextStepEnter() {
  //    console.log("Enter");
      $nuxt.$emit("EnterEvent");
     // console.log(this.$parent.nextStep());
      //this.$parent.nextStep();
    },
  }, //metodi

  components: {},
  props: {
    id: {
      type: String,
      default: "",
    },
    value: {
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
    name: {
      type: String,
      default: "",
    },
    errorMsg: {
      type: String,
      default: "",
    },
   
  },
  mounted() {},
};
</script>


<style lang="scss" scoped>
label {
  top: 0%;
  transform: translateY(-50%);
  font-size: 11px;
  left: 10px;
}
.empty input:not(:focus) + label {
  top: 50%;
  transform: translateY(-50%);
  font-size: 14px;
}
input:not(:focus) + label {
  color: rgba(70, 70, 70, 1);
}
input {
  border: 1px solid #af384f;
}
input:focus {
  outline: none;
  // border-color:  rgb(133, 235, 37);
}
</style>
