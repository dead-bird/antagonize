<script>
export default {
  props: ['base'],

  data() {
    return {
      sourcecode: `curl -s -H "Accept: application/json" ${this.base}`,
    };
  },
};
</script>

<template>
  <pre v-highlightjs="sourcecode"><code class="php"></code></pre>
</template>

<style scoped>

</style>
