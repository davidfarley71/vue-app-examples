<template>
  <header class="App-header">
    <article class="message" :class="accordionClasses">
      <div class="message-header" @click="toggleAccordion">Hello World</div>
      <div class="message-body">
        <div class="message-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </article>
  </header>
</template>

<script>
export default {
  name: "accordion",
  data() {
    return {
      isOpen: true,
      methods: {
        toggleAccordion: function () {
          this.isOpen = !this.isOpen;
        },
      },
      computed: {
        accordionClasses: function () {
          return {
            "is-closed": !this.isOpen,
            "is-primary": this.isOpen,
            "is-dark": !this.isOpen,
          };
        },
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.message-header {
  cursor: pointer;
}

.message-body {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}

.is-closed .message-body {
  max-height: 0;
}

.message-content {
  padding: 20px;
}
</style>
