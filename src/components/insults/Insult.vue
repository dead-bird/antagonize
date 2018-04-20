<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifiers: {
        data: {},
      },

      nouns: {
        data: {},
      },

      m: 0,
      n: 0,
    };
  },

  methods: {
    async fetch() {
      this.modifiers = await api.get('modifiers');
      this.nouns = await api.get('nouns');
    },

    next() {
      this.m = Math.floor(Math.random() * this.modifiers.data.length);
      this.n = Math.floor(Math.random() * this.nouns.data.length);
    },
  },

  created() {
    this.fetch();

    setInterval(this.next, 5000);
  },
};
</script>

<template>
  <h1>you {{ modifiers.data[m].text }} {{ nouns.data[n].text }}</h1>
</template>

<style lang="scss" scoped>

</style>
