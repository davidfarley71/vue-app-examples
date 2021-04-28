<template>
  <header>
    <div id="todoitem">
      <ol>
        <!--
      Now we provide each todoitem with the todo object
      it's representing, so that its content can be dynamic.
      We also need to provide each component with a "key",
      which will be explained later.
    -->
        <!-- <todoitem
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
        ></todoitem> -->
        <!-- <todoitemt></todoitemt> -->
        <passcomponent>
      </ol>
    </div>
  </header>
</template>

<script>
// Vue.component('todoitem', {
//   props: ['todo'],
//   template: '<li>{{ todo.text }}</li>'
// })
// const todoitemt = {name: "todoitemt", template: "<div>test</div>", props: ["todo"] };
import passComponent from '/passComponent.vue'
export default {
  name: "todoitem",
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
  components: {
    passComponent,
    // todoitemt
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
