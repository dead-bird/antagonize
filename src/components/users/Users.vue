<script>
/* eslint-disable consistent-return */

import api from '@/resources/base';
import Notif from '@/event';

export default {
  data() {
    return {
      users: [],
    };
  },

  methods: {
    fetch() {
      api.get('users').then(res => {
        if (!res.data.success) return Notif.$emit('error', res.data.error);

        this.users.push(res.data.users);
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
    {{ users }}
  </div>
</template>

<style lang="scss" scoped>
</style>
