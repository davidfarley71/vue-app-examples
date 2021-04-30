<template>
  <header class="App-header">
    <div id="app">
     <div class="blog-post">
      <div>{{ post.title }}</div>
    </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "blogPost",
  data() {
    return {};
  },
  props:['post']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
