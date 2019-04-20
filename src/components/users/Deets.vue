<script>
/* eslint-disable consistent-return */

import Notif from '@/event';

export default {
  methods: {
    exit() {
      this.$store.commit('logout');
      this.$router.push('/');

      Notif.$emit('success', 'chow');
    },
  },

  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<template>
  <div class="user-flex" v-if="user">
    <router-link :to="`/users/${user._id}`" class="profile-image">
      <img :src="user.avatar" :alt="user.username">
    </router-link>

    <div class="profile-deets">
      <router-link :to="`/users/${user._id}`" class="profile-name">Hello, {{ user.username }}</router-link>

      <div class="exit" @click="exit">&larr; Logout</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-flex {
  display: flex;
  align-items: center;
}

.profile-image {
  padding: 2.5px 15px;
  padding-left: 0;
  border-right: 1px solid #e6e6e6;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
}

.profile-deets {
  padding: 2.5px 25px;
  padding-right: 0;
}

.profile-name {
  display: block;
  margin-bottom: 4px;
  text-transform: capitalize;
}

.exit {
  margin-left: -14px;
  cursor: pointer;
  font-size: 12px;
}
</style>
