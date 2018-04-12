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
      const p = this.$route.params;

      api.get(`modifiers/${p.id}`).then((res) => {
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
    <h1>Modifier: {{ $route.params.id }}</h1>

    <pre>{{ modifiers }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
