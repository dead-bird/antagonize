<script>
import api from '@/resources/index';

export default {
  data() {
    return {
      modifier: {},
    };
  },

  methods: {
    fetch() {
      api.get(`modifiers/${this.$route.params.id}`).then((res) => {
        this.modifier = res.data;
      }).catch((error) => {
        this.modifier = `an error has occured: ${error}`;
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

    <h2>{{ modifier.text }}</h2>

    <pre>{{ modifier }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
