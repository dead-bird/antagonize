<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifier: {},
    };
  },

  methods: {
    async fetch() {
      this.modifier = await api.get(`modifiers/${this.$route.params.id}`);
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div class="container">
    <h1>Modifier: {{ $route.params.id }}</h1>

    <h2>{{ modifier.data.text }}</h2>

    <pre>{{ modifier.data }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
