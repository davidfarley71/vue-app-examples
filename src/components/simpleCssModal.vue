<template>
  <div>
    <h2>Modal Example</h2>
    <!-- Trigger/Open The Modal -->
    <button v-on:click="openModal" id="myBtn">Open Modal</button>
    <!-- The Modal -->
    <div id="myModal" v-bind:class="classname">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
            <button @click="hidemodal" class="close">&times;</button>
          <slot name="header"></slot>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button  @click="hidemodal">
              OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "simpleCssModal",
  data() {
    return {
      classname: "modalhid",
    };
  },
  methods: {
    openModal: function () {
      this.classname = "modalshown";
    },
    hidemodal: function () {
      this.classname = "modalhid";
    },
    clickout: function (event) {
      if (event.target != event) {
        console.log("test");
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.modalhid {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modalshown {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>