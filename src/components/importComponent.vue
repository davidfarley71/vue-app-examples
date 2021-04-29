<template>
  <header>
    <div id="todoitem">
      <br>
     The below component is a copy of the user imput component imported into this component
        <userImput> </userImput>
    </div>
  </header>
</template>

<script>


import userImput from './userImput.vue'
export default {
  name: "importComponent",
 
  components: {
    userImput,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
