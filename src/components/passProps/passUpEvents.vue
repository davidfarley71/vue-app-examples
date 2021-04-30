<template>
  <header class="App-header">
    <div id="app">
      <button v-on:click="$emit('changeBool')">change boolean in parent</button>
      <button v-on:click="$emit('emitValueUP', inputvalue)">pass text up to parent</button>
      <input type="text" v-model="inputvalue">

      <input type="number" v-on:keyup="$emit('multiplyBy5', multby5)" v-model="multby5" placeholder="put a number to see it multiplied 5x">
    </div>
  </header>
</template>

<script>
export default {
  name: "passUpEvents",
  data() {
   return {
       inputvalue:'change me and pass me up',
       multby5: ''
   };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
