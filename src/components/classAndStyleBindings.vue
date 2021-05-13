<template>
  <div>
    <div v-bind:class="{ active: isActive }">
      will only show if active is true
    </div>
    <h1>
      The above syntax means the presence of the active class will be determined
      by the truthiness of the data property isActive.
    </h1>
    <br />
    <div
      class="static"
      v-bind:class="{ active: isActive, 'text-danger': hasError }"
    >
      this has a class and a v-bind to dynamically bind vue data to class fields
      together.
    </div>
    <h1>
      You can have multiple classes toggled by having more fields in the object.
      In addition, the v-bind:class directive can also co-exist with the plain
      class attribute.
    </h1>
    <br />
    <div v-bind:class="classObject">
      here the class values are from a computed value
    </div>
    <br />
    <div v-bind:class="[activeClass, errorClass]">
      We can pass an array to v-bind:class to apply a list of classes:
    </div>
    <br />
    <div v-bind:class="[isActive ? activeClass : '', errorClass]">
      This will always apply errorClass, but will only apply activeClass when
      isActive is truthy.
    </div>
    <h1>
      If you would like to also toggle a class in the list conditionally, you
      can do it with a ternary expression:
    </h1>
    <br />
    <div v-bind:class="[{ active: isActive }, errorClass]">
      using object syntax inside an array
    </div>
    <h1>
      However, this can be a bit verbose if you have multiple conditional
      classes. That’s why it’s also possible to use the object syntax inside
      array syntax:
    </h1>
    <br />
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    <h1>
      The object syntax for v-bind:style is pretty straightforward - it looks
      almost like CSS, except it’s a JavaScript object. You can use either
      camelCase or kebab-case (use quotes with kebab-case) for the CSS property
      names:
    </h1>
    <br />
    <div v-bind:style="styleObject"></div>
    <h1>
      It is often a good idea to bind to a style object directly so that the
      template is cleaner:
    </h1>
    <br>
    <div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">This will only render the last value in the array which the browser supports. In this example, it will render display: flex for browsers that support the unprefixed version of flexbox.</div>
    <h1>Starting in 2.3.0+ you can provide an array of multiple (prefixed) values to a style property, for example:</h1>
  </div>
</template>

<script>
export default {
  name: "classAndStyleBindings",
  data() {
    return {
      isActive: true,
      hasError: false,
      activeClass: "active",
      errorClass: "text-danger",
      activeColor: "red",
      fontSize: 30,
      styleObject: {
        color: "red",
        fontSize: "13px",
      },
    };
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal",
      };
    },
  },
};
</script>


<style lang="scss" scoped>

</style>