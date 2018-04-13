<script>
import api from '@/resources/index';

export default {
  data() {
    return {
      insult: {},
    };
  },

  methods: {
    fetch() {
      api.get('insult').then((res) => {
        this.insult = res.data;
      }).catch((error) => {
        this.insult = `an error has occured: ${error}`;
      });
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <pre>{{ insult }}</pre>
</template>

<style lang="scss" scoped>

</style>
