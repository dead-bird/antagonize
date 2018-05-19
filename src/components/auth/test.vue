<script>
import api from '@/resources/base';

export default {
  methods: {
    fetch() {
      const user = JSON.parse(localStorage.getItem('user'));

      api.post('users/auth', { token: user.token }).then(res => {
        console.log(res);
      });
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
