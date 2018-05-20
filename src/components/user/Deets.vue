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
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },

    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<template>
  <div class="user" v-if="loggedIn">
    <div class="container">
      <div class="profile-deets">
        <div class="profile-name">{{ user.username }}</div>
        <div class="exit" @click="exit">Logout</div>
      </div>

      <div class="profile-image">
        <img src="https://i.imgur.com/i9y13NP.jpg" alt="memes">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  padding: 10px;
}

.profile-image {
  float: right;
  padding: 2.5px 7.5px;
  border-right: 1px solid white;

  img {
    width: 38px;
    height: 38px;
  }
}

.profile-deets {
  float: right;
  padding: 2.5px 7.5px;
}

.profile-name {
  margin-bottom: 4px;
  text-transform: capitalize;
}

.exit {
  cursor: pointer;
  font-size: 12px;
}
</style>
