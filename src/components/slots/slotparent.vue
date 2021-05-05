<template>
<div>
  <h1>When the component renders, will be replaced by “Your Profile”. Slots can contain any template code, including HTML:</h1>
<navigationlink >
  Your Profile
</navigationlink>
<br>

Or even other components:
<navigationlink >
  Add a Font Awesome icon 
  <span class="fa fa-user"></span>
  Your Profile
</navigationlink>
<br>

If navigationlink‘s template did not contain a slot element, any content provided between its opening and closing tag would be discarded.
<navigationlink >
  Use a component 
  <br>
  <span>imagin i imported another component here cause I dont feel like actually doing it</span>
  Your Profile
</navigationlink>
</div>

</template>

<script>
import navigationlink from './navigationlink.vue'
export default {
  name: "slotparent",
  data() {
    return {
      show: false
    };
  },
  components:{
    navigationlink
  }
}
</script>


<style lang="scss" scoped>

</style>