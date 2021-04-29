<template>
  <header class="App-header">
    <div id="app">
      <h1>example of passing props from one component to another</h1>
    <recievingProps v-bind:groceryList="groceryList"></recievingProps>
    <templatepassTitle title='my body is ready kakashi sense'></templatepassTitle>
    </div>
  </header>
</template>

<script>

import recievingProps from './recievingProps.vue'
export default {
  name: "passingProps",
    data() {
    return {
     groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
      
    };
  },
   components: {
    recievingProps,
  }
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
