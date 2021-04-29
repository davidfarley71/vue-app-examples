<template>
  <header class="App-header">
    <div
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
    >{{item.text}}</div>
  </header>
</template>

<script>
export default {
  name: "recievingProps",
  props: ["groceryList"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
