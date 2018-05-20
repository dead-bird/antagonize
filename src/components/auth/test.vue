<script>
import Notif from '@/event';

export default {
  methods: {
    fetch() {
      console.log('test');

      Notif.$emit('error', 'message');
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
