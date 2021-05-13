
<template>
  <div>
    <simpleCssModal>
      <template v-slot:header>
        {{ greenChecked }}
        {{ redChecked }}
        <br />
        <button v-on:click="switchViewGreen">find</button>
        <button v-on:click="switchViewRed">exclude</button>
      </template>

      <template v-slot:body>
        <div v-if="seen" key='if'>
          {{ greenChecked }}
          <div
            class="GreencheckboxCategoryclass"
            v-for="(item, key) in info"
            :key="key"
          >
            <collapsable>
              <template v-slot:title
                ><h3>{{ key }}</h3></template
              >

              <template v-slot:contents>
                <span
                  class="GreencheckboxItemClass"
                  v-for="sub in item"
                  :key="sub"
                >
                  <input
                    type="checkbox"
                    v-bind:id="sub"
                    v-bind:value="sub"
                    v-model="greenChecked"
                    :disabled="redChecked.indexOf(sub) > -1"
                  />
                  <label v-bind:for="sub">{{ sub }}</label>
                </span>
              </template>
            </collapsable>
          </div>
        </div>

        <div v-else key='else'>
          {{ redChecked }}
          <div
            class="RedcheckboxCategoryclass"
            v-for="(item, key) in info"
            :key="key"
          >
            <collapsable>
              <template v-slot:title
                ><h3>{{ key }}</h3></template
              >

              <template v-slot:contents>
                <span
                  class="RedcheckboxItemClass"
                  v-for="sub in item"
                  :key="sub"
                >
                  <input
                    type="checkbox"
                    v-bind:id="sub"
                    v-bind:value="sub"
                    v-model="redChecked"
                     :disabled="greenChecked.indexOf(sub) > -1"
                  />
                  <label v-bind:for="sub">{{ sub }}</label>
                </span>
              </template>
            </collapsable>
          </div>
        </div>
      </template>
    </simpleCssModal>
  </div>
</template>

<script>
import simpleCssModal from "../simpleCssModal.vue";
import collapsable from "../collapsable.vue";
import dat from "../../assets/data.json";

export default {
  name: "search",
  components: {
    simpleCssModal,
    collapsable,
  },
  data() {
    return {
      seen: true,

      redChecked: [],
      greenChecked: [],
      info: dat,
    };
  },
  methods: {
    switchViewGreen: function () {
      this.seen = true;
    },
    switchViewRed: function () {
      this.seen = false;
    },
  },
};
</script>


<style lang="scss" scoped>
.GreencheckboxCategoryclass {
  border: 1px solid green;
  margin: 2px;
}
.GreencheckboxItemClass {
  border: 1px solid green;
}
.RedcheckboxCategoryclass {
  border: 1px solid red;
  margin: 2px;
}
.RedcheckboxItemClass {
  border: 1px solid red;
}
</style>


