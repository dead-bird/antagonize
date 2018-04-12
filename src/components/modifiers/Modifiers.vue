<script>
import api from '@/resources/index';

export default {
  data() {
    return {
      modifiers: [],
    };
  },

  methods: {
    fetch() {
      api.get('modifiers').then((res) => {
        this.modifiers = res.data;
      }).catch((error) => {
        this.modifiers = `an error has occured: ${error}`;
      });
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

    <pre>{{ modifiers }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
