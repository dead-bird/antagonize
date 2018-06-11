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
  <div>
    <div class="profile-deets">
      <router-link :to="`/users/${user._id}`" class="profile-name">
        {{ user.username }}
      </router-link>

      <div class="exit" @click="exit">Logout</div>
    </div>

    <router-link :to="`/users/${user._id}`" class="profile-image">
      <img src="https://i.imgur.com/i9y13NP.jpg" alt="memes">
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.profile-image {
  display: block;
  float: right;
  padding: 2.5px 7.5px;
  border-right: 1px solid #e6e6e6;

  img {
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }
}

.profile-deets {
  float: right;
  padding: 2.5px 7.5px;
}

.profile-name {
  display: block;
  margin-bottom: 4px;
  text-transform: capitalize;
}

.exit {
  cursor: pointer;
  font-size: 12px;
}
</style>
