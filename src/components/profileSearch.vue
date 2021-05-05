
<template>
  <div>
    <simpleCssModal>
      <template v-slot:header>
        <button v-on:click="switchViewGreen">find</button>
        <button v-on:click="switchViewRed">exclude</button>
      </template>

      <template  v-slot:body>
        <checkboxes v-bind:style="green"
          v-bind:checkboxCategory="{
            border: '1px solid green',
            margin: '2px',
          }"
          v-bind:checkboxItem="{
            border: '1px solid green',
          }"
        >
        </checkboxes>
        <checkboxes v-bind:style="red"
          v-bind:checkboxCategory="{
            border: '1px solid red',
            margin: '2px',
          }"
          v-bind:checkboxItem="{
            border: '1px solid red',
          }"
        >
        </checkboxes>
      </template>
      <!-- <template v-else v-slot:body>
        <checkboxes
          v-bind:checkboxCategory="{
            border: '1px solid red',
            margin: '2px',
          }"
          v-bind:checkboxItem="{
            border: '1px solid red',
          }"
        >
        </checkboxes>
      </template> -->
    </simpleCssModal>
  </div>
</template>

<script>
import simpleCssModal from "./simpleCssModal.vue";
import checkboxes from "./checkboxes.vue";
export default {
  name: "profileSearch",
  components: {
    simpleCssModal,
    checkboxes,
  },
  data() {
    return {
      seen: true,
      green: {display: 'block'},
      red: {display: 'none'}
    };
  },
  methods: {
    switchViewGreen: function () {
      this.green.display = 'block'
      this.red.display ='none'
    },
    switchViewRed: function () {
      this.green.display = 'none'
      this.red.display ='block'
    },
  },
};
</script>


<style lang="scss" scoped>
</style>


