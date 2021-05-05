<template>
  <div>
    <a href="url" class="nav-link">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "navigationlink",
  data() {
    return {
      show: false,
    };
  },
};
</script>


<style lang="scss" scoped>
</style>