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

        this.users.push(res.data.users[0]);
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
    <div v-for="user in users" :key="user._id">
      <router-link :to="`/users/${user._id}`">
        {{ user.username }}
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
