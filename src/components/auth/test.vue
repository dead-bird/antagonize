<script>
import api from '@/resources/base';

export default {
  methods: {
    async fetch() {
      console.log('fetch');
      this.user = await api.post('users/auth', {username: 'dave', password: 'test'});
    },
  },
};
</script>

<template>
  <div class="container">
    <hr>
    <h1>test</h1>
    <button @click="fetch">fetch</button>
    <hr>
  </div>
</template>

<style lang="scss" scoped>

</style>
