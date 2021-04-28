<template>
  <header>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound
      title!
    </span>
  </header>
</template>

<script>
export default {
  name: "vbindTitle",
  data() {
    return {
      message: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
