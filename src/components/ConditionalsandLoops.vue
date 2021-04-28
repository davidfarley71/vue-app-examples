<template>
  <header>
    <div id="ConditionalsandLoops">
        <h1>here we have a message that is only displayed based on a boolean</h1>
      <span v-if="seen">Now you see me</span>
    </div>
    <h1>here we loop through an object and put out the text values</h1>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
  </header>
</template>

<script>
export default {
  name: "ConditionalsandLoops",
  data() {
    return {
      seen: true,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
