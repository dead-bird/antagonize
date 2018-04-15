<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      noun: {},
    };
  },

  methods: {
    async fetch() {
      this.noun = await api.get(`nouns/${this.$route.params.id}`);
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div>
    <h1>Noun: {{ $route.params.id }}</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>
