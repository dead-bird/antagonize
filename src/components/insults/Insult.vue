<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      insult: {},
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
  <pre>{{ insult.data }}</pre>
</template>

<style lang="scss" scoped>

</style>
