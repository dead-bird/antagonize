<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifiers: [],
    };
  },

  methods: {
    async fetch() {
      this.modifiers = await api.get('modifiers');
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div class="container">
    <h1>All Modifiers</h1>

    <div v-for="modifier in modifiers.data" :key="modifier._id">
      <router-link :to="modifier._id" append>{{ modifier.text }}</router-link>
    </div>

    <pre>{{ modifiers.data }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
