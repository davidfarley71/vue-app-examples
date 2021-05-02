<template>
  <header class="App-header">
    <div id="dynamic-component-demo" class="demo">
      <h1>click the buttons below to switch between the components, kinda like a router but using the special is keyword</h1>
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>
  </header>
</template>

<script>
import userImput from "./userImput.vue";
import vbindTitle from "./vbindTitle.vue";
import watcchAndComputed from "./watcchAndComputed.vue";

export default {
  name: "SpecialIsKeyword",
  data() {
    return {
      inputvalue: "change me and pass me up",
      multby5: "",
      currentTab: "userImput",
      tabs: ["userImput", "vbindTitle", "watcchAndComputed"],
    };
  },
  computed: {
    currentTabComponent: function () {
      return this.currentTab
    },
  },
  components:{
    userImput,
    vbindTitle,
    watcchAndComputed
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
