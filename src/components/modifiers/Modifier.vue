<script>
import axios from 'axios';

export default {
  data() {
    return {
      modifiers: [],
    };
  },

  created() {
    this.api();
  },

  methods: {
    api() {
      const p = this.$route.params;
      const api = process.env.API;
      console.log(`${api}modifiers/${p.id}`);

      axios.get(`${api}modifiers/${p.id}`).then((res) => {
        this.modifiers = res;
        console.log(res);
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>

<template>
  <div>
    <h1>Modifier: {{ $route.params.id }}</h1>

    <pre>{{modifiers}}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
