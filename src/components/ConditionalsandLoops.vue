<template>
  <header>
    <div id="ConditionalsandLoops">
      <h1>here we have a message that is only displayed based on a boolean</h1>
      <span v-if="seen">Now you see me</span>
      <span v-else>
        Now you dont ;)
        <div>
          A v-else element must immediately follow a v-if or a v-else-if element
          - otherwise it will not be recognized.
        </div>
      </span>
    </div>
    <h1>here we loop through an object and put out the text values</h1>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <br />
    <h1>v-for with index</h1>
    <ul id="example-2">
      <li v-for="(item, index) in items" :key="item.message">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>

    <br />
    <h1>v-for looping the contents of an object</h1>
    object: { title: 'How to do lists in Vue', author: 'Jane Doe', publishedAt:
    '2016-04-10' }
    <ul id="v-for-object" class="demo">
      <li v-for="value in object" :key="value">
        {{ value }}
      </li>
    </ul>
    <h1>you can also print the key of the object values</h1>
    <div v-for="(value, name) in object" :key="name">
      {{ name }}: {{ value }}
    </div>
    <h1>same thing but with an added index</h1>
    <div v-for="(value, name, index) in object" :key="index">
      {{ index }}. {{ name }}: {{ value }}
    </div>
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
      parentMessage: "Parent",
      items: [{ message: "Foo" }, { message: "Bar" }],
      object: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
