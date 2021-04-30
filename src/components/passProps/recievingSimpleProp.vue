<template>
  <header class="App-header">
    <div id="app">
      <h1>example of passing simple prop</h1>

      <h3>{{ title }}</h3>
      
    </div>
  </header>
</template>

<script>
export default {
  name: "recievingSimpleProp",
  data() {
    return {};
  },
  props:['title']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
