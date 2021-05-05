
<template>
  <div>
    <div class="titleClass" v-on:click="openClose">
      <slot name="title">open me</slot>
      <span class="plusorminusClass">{{ plusorminus }}</span>
    </div>
    <div v-bind:style="styleObject">
      <slot name="contents">default contents</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "collapsable",
  data() {
    return {
      styleObject: {
        display: "none",
      },
      plusorminus: "+",
    };
  },
  methods: {
    openClose: function () {
      if (this.styleObject.display == "block") {
        this.styleObject.display = "none";
        this.plusorminus = "+";
      } else {
        this.styleObject.display = "block";
        this.plusorminus = "-";
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.titleClass {
  cursor: pointer;
  background-color: grey;
}
.plusorminusClass {
    position: relative;
    float: right;
    bottom: 47px;
    size: 29px;
    font-size: 2em;
}
</style>