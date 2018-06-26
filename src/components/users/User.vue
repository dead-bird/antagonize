<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="user">
      <div><img class="profile-image" :src="user.avatar" :alt="user.username"></div>

      <h1>{{ user.username }}</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user {
  padding-top: 60px;
  text-align: center;
}

.profile-image {
  width: 200px;
  border-radius: 50%;
  margin-bottom: 30px;
}
</style>
