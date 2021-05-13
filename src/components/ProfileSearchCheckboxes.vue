<template>
  <div id="app">
    {{ checkedValues }}
    <div v-bind:style='checkboxCategoryclass' v-for="(item, key) in info" :key="key">
      <collapsable>
        <template v-slot:title
          ><h3>{{ key }}</h3></template
        >

        <template v-slot:contents>
          <span  v-bind:style='checkboxItemClass' v-for="sub in item" :key="sub">
            <input
              type="checkbox"
              v-bind:id="sub"
              v-bind:value="sub"
              v-model="checkedValues"
            />
            <label v-bind:for="sub">{{ sub }}</label>
          </span>
        </template>
      </collapsable>
    </div>
  </div>
</template>

<script>
import collapsable from "./collapsable.vue";
import dat from "../assets/data.json";
export default {
  props:['checkboxCategory','checkboxItem','inactiveItems','checked'],
  name: "ProfileSearchCheckboxes",
  data() {
    return {
      info: dat,
      checkedValues: this.checked, //you can pass in values here and they will be checked on page load
      checkboxCategoryclass: this.checkboxCategory,
      checkboxItemClass: this.checkboxItem,
      inactive: this.inactiveItems,
    };
  },
  computed:{
      emitCheckedValues: function(){
          return this.$emit('updateparentCheckedValues', this.checkedValues)
      }
  },
  components: {
    collapsable,
  },
};
</script>


<style >
.checkboxCategory {
  border: 5px solid grey;
  margin: 5px;
}
.checkboxItem {
  border: 1px solid green;
}
</style>