<template>
  <div id="app">
    <div v-for="(item, key) in info" :key="key">
      <h3>{{key}}</h3>
      <span v-for="sub in item" :key="sub">
        <input
          type="checkbox"
          v-bind:id="sub"
          v-bind:value="sub"
          v-model="checkedValues"
        />
        <label v-bind:for="sub">{{ sub }}</label>
      </span>
    </div>

    <li v-for="todo in todos" :key="todo.text">
      {{ todo.text }}
    </li>
  </div>
</template>

<script>
import dat from "../assets/data.json";
export default {
  data() {
    return {
      name: "checkboxes",
      info: dat,
      checkedValues: {},
    };
  },
};
</script>


<style lang="scss">
</style>