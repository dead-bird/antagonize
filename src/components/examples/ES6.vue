<script>
export default {
  props: ['base'],

  data() {
    return {
      sourcecode: `fetch('${this.base}').then(res => res.text);`,
    };
  },
};
</script>

<template>
  <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>
</template>

<style lang="scss" scoped>
</style>
