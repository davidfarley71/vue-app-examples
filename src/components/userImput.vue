<template>
  <header>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>

    <h1>Text input</h1>
    <p>{{ inputmessage }}</p>
    <input v-model="inputmessage" />
    <h2>If you want whitespace from user input to be trimmed automatically, you can add the trim modifier to your v-model-managed inputs:</h2>
    <p>{{ trimMsg }}</p>
    <input v-model.trim="trimMsg">
    <h2>If you want user input to be automatically typecast as a Number, you can add the number modifier to your v-model managed inputs:</h2>
    <p>{{ age }}</p>
    <input v-model.number="age" type="number" />
    <br />
    <h2>this button passes an argument of hi to the method</h2>
    <button v-on:click="say('hi')">Say hi</button>
    <br />

    <h2>this input fires when the enter key is used</h2>
    <input v-model="enterkeyvalue" v-on:keyup.enter="enterkey" />
    <h2>this input value will alert when the pagedown key is used</h2>
    <input v-model="pageDownValue" v-on:keyup.page-down="onPageDown" />
    <h2>press alt then enter to show this alert</h2>
    <input v-model="alterEnter" v-on:keyup.alt.13="altEnter" />
    <br />

    <h2>this will fire even if Alt or Shift is also pressed</h2>
    <button v-on:click.ctrl="onClick">anykey+click</button>
    <h2>this will only fire when Ctrl and no other keys are pressed</h2>
    <button v-on:click.ctrl.exact="onCtrlClick">Only control + click</button>
    <h2>this will only fire when no system modifiers are pressed</h2>
    <button v-on:click.exact="onClickExact">click only</button>
    <br />
    <h2>check box with boolean data value</h2>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

     <h2>
      bind the value of the checkbox to something other than true or false
    </h2>
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    <div>{{toggle}}</div>
    <p>The true-value and false-value attributes don’t affect the input’s value attribute, because browsers don’t include unchecked boxes in form submissions. To guarantee that one of two values is submitted in a form (i.e. “yes” or “no”), use radio inputs instead.</p>
    <p>you can do this with radio buttons and select options too</p>
    
    <h2>Multiple checkboxes, bound to the same Array:</h2>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>

   
    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <br />
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <br />
    <span>Picked: {{ picked }}</span>
    <h2>Select</h2>
    <p>
      If the initial value of your v-model expression does not match any of the
      options, the select element will render in an “unselected” state. On iOS,
      this will prevent the user from being able to select the first item,
      because iOS does not fire a change event in this case. It is therefore
      recommended to provide a disabled option with an empty value, as
      demonstrated in the example.
    </p>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <h2>Multiple select (bound to Array):</h2>
    <select v-model="selectMultiple" multiple>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <br />
    <span>Selected: {{ selectMultiple }}</span>
    <h2>Dynamic options rendered with v-for:</h2>
    <select v-model="dynamicselected">
      <option
        v-for="option in options"
        v-bind:key="option.value"
        v-bind:value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ dynamicselected }}</span>
  </header>
</template>

<script>
export default {
  name: "userImput",
  data() {
    return {
      message: "Hello Vue.js!",
      trimMsg: 'test                  asdf',
      age: 19,
      inputmessage: "Hello Vue!",
      enterkeyvalue: "change me and hit enter",
      pageDownValue: "select this alert and page down",
      alterEnter: "select me then press alt+enter",
      checked: false,
      checkedNames: [],
      picked: "",
      selected: "",
      selectMultiple: [],
      dynamicselected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      toggle:''
    };
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
    say: function (message) {
      alert(message);
    },
    enterkey: function () {
      alert(this.enterkeyvalue);
    },
    onPageDown: function () {
      alert(this.pageDownValue);
    },
    altEnter: function () {
      alert(this.alterEnter);
    },
    onClick: function () {
      alert(
        "this alert will fire when you click the button, even if other keys are presseed"
      );
    },
    onCtrlClick: function () {
      alert(
        "this alert will fire when you click the button while holding control. If other keys are pressed it wont work"
      );
    },
    onClickExact: function () {
      alert(
        "this alert will fire when you click the button, if you hold other keys, it wont work"
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
