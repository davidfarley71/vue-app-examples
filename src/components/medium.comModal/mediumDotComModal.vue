<template>
  <div id="app">
    <button @click="$refs.modalName.openModal()">Open modal</button>

    <h1>this modal is from <a href="https://medium.com/notonlycss/how-to-build-a-modal-in-vue-js-b3db644afaeb">medium.com</a></h1>
  

    <modal ref="modalName">
      <template v-slot:header>
        <h1>Modal title</h1>
      </template>

      <template v-slot:body>
       
      </template>

      <template v-slot:footer>
        <div>
          <button @click="$refs.modalName.closeModal()">Cancel</button>
          <button @click="$refs.modalName.closeModal()">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: "mediumDotComModal",
  components: {
    Modal
  }
};
</script>
