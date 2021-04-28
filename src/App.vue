<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <router-link class="navlink" to="/helloworld"
      >vue</router-link
    >
    <router-link class="navlink" to="/about">about</router-link>
    <router-link class="navlink" to="/books">books</router-link>
    <router-link class="navlink" to="/contact">contact</router-link>
    <router-link class="navlink" to="/declarativeRendering"
      >declarativeRendering</router-link
    >
    <router-link class="navlink" to="/vbindTitle">vbindTitle</router-link>
    <router-link class="navlink" to="/ConditionalsandLoops">ConditionalsandLoops</router-link>
    <router-link class="navlink" to="/userImput">userImput</router-link>
    <router-link class="navlink" to="/todoitem">todoitem</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.navlink {
  padding: 6px;
  border-radius: 6px;
  margin: 15px;
}
</style>
