
<template>
  <div>
    <simpleCssModal>
      <template v-slot:header>
        {{ greenChecked }}
        {{ redChecked }}
        <br>
        <button v-on:click="switchViewGreen">find</button>
        <button v-on:click="switchViewRed">exclude</button>
      </template>

      <template v-slot:body>
        <ProfileSearchCheckboxes
          v-if="seen"
          key="if"
          v-on:updateparentCheckedValues="greenChecked = $event"
          v-bind:checked="greenChecked"
          v-bind:checkboxCategory="{
            border: '1px solid green',
            margin: '2px',
          }"
          v-bind:checkboxItem="{
            border: '1px solid green',
          }"
        >
        </ProfileSearchCheckboxes>
        <ProfileSearchCheckboxes
          v-else
          key="else"
          v-on:updateparentCheckedValues="redChecked = $event"
          v-bind:checked="redChecked"
          v-bind:checkboxCategory="{
            border: '1px solid red',
            margin: '2px',
          }"
          v-bind:checkboxItem="{
            border: '1px solid red',
          }"
        >
        </ProfileSearchCheckboxes>
      </template>
    </simpleCssModal>
  </div>
</template>

<script>
import simpleCssModal from "./simpleCssModal.vue";
import ProfileSearchCheckboxes from "./ProfileSearchCheckboxes.vue";
export default {
  name: "profileSearch",
  components: {
    simpleCssModal,
    ProfileSearchCheckboxes,
  },
  data() {
    return {
      seen: true,
      green: { display: "block" },
      red: { display: "none" },
      redChecked: [],
      greenChecked: [],
    };
  },
  methods: {
    switchViewGreen: function () {
      // this.green.display = 'block'
      // this.red.display = 'none'
      this.seen = true;
    },
    switchViewRed: function () {
      // this.green.display = 'none'
      // this.red.display = 'block'
      this.seen = false;
    },
  },
};
</script>


<style lang="scss" scoped>
</style>


