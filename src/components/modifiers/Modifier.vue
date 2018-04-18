<script>
export default {
  props: ['modifier'],

  data() {
    return {
      // modifier: {},
    };
  },
};
</script>

<template>
  <div>
    <input type="text" :value="modifier.text">
    <pre>{{ modifier }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
