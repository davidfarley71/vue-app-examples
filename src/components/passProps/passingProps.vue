<template>
  <header class="App-header">
    <div id="app">
      <h1>example of passing props from one component to another</h1>

      <recievingProps v-bind:groceryList="groceryList"></recievingProps>

      <recievingSimpleProp
        title="this is the simple prop!"
      ></recievingSimpleProp>

      <h1>
        example of looping over data and rendering a component for each item
      </h1>
      <blog-post
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:post="post"
      ></blog-post>

      <h1>
        emiting event up from child component and Emitting a Value With an Event
      </h1>
      <passUpEvents
        v-on:changeBool="changeboolval = !changeboolval"
        v-on:emitValueUP="valuePassedUp = $event"
        v-on:multiplyBy5="multiplyBy5x"
      ></passUpEvents>
      {{ changeboolval }}
      <br />
      {{ valuePassedUp }}
      <br />
      your input multiplied by 5:  {{ productOf5 }}
    </div>
  </header>
</template>

<script>
import recievingProps from "./recievingProps.vue";
import recievingSimpleProp from "./recievingSimpleProp.vue";
import passUpEvents from "./passUpEvents.vue";
import blogPost from "./blogPost.vue";
export default {
  name: "passingProps",
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" },
      ],
      changeboolval: true,
      valuePassedUp: "Not changed yet",
      productOf5: 5,
    };
  },
  components: {
    recievingProps,
    recievingSimpleProp,
    blogPost,
    passUpEvents,
  },
  methods: {
    multiplyBy5x: function () {
      this.productOf5 *= 5;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
