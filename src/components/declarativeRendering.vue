<template>
  <header class="App-header">
    <div id="app">
      One way data:{{ message }}
    </div>
  </header>
</template>

<script>
export default {
  name: "declarativeRendering",
    data() {
    return {
      message: 'declarative rendered message, which means one way data rendering',
      
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
