<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      insult: {
        data: {},
      },
    };
  },

  methods: {
    async fetch() {
      this.insult = await api.get('insult');
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <h1>you {{ insult.data.text }}</h1>
</template>

<style lang="scss" scoped>

</style>
