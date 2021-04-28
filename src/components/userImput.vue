<template>
  <header>
     <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>

  <h1>Text input</h1>
   <p>{{ inputmessage }}</p>
  <input v-model="inputmessage">
  </header>
</template>

<script>
export default {
  name: "userImput",
  data() {
    return {
      message: 'Hello Vue.js!',
       inputmessage: 'Hello Vue!'
    };
  },
   methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
