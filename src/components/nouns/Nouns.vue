<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      nouns: [],
    };
  },

  methods: {
    async fetch() {
      this.nouns = await api.get('nouns');
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div class="container">
    <h1>All Nouns</h1>

    <div v-for="noun in nouns.data" :key="noun._id">
      <router-link :to="noun._id" append>{{ noun.text }}</router-link>
    </div>

    <pre>{{ nouns.data }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
