<template>
  <header class="App-header">
    <div class="wrapper">
      <div class="gridbox">
        <img src="../assets/mugshot.jpg" class="mugshot" />
      </div>
      <div class="gridbox">
        <h1>Hi! My name is David Farley</h1>
        <h2>
          I'm a self taught web developer in the San Francisco Bay Area.
          <br />I love to learn, and work on websites.
          <br />When I am not working, I enjoy cycling, reading, and having game nights with friends.
        </h2>
        <h2></h2>
        <h1>How I made this website</h1>
        <h3>
          I used Angular, with Nodejs, hosted on Firebase.
          <br />The backend is AWS Lambda and Mysql RDS.
          <br />Code for this site on
          <a href="https://github.com/davidfarley71/Vue-Portfolio">Github</a>.
          <br />My
          <a href="https://www.linkedin.com/in/david-farley-221b21a6/">LinkedIn</a> profile.
          <br />
        </h3>
        <h3>My next project is a React Native app.</h3>
        <h3>Stay tuned for updates!</h3>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "about",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mugshot{
  width: 390px;
  margin-top: 32px;
}
</style>
