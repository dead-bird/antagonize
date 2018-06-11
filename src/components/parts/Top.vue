<script>
import Deets from '@/components/users/Deets';

export default {
  components: { Deets },

  computed: {
    loggedIn() {
      return this.$store.state.auth.loggedIn;
    },
  },
};
</script>

<template>
  <div class="top">
    <div class="container" v-if="loggedIn">
      <div class="row align-items-center">
        <div class="col">
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/manage">Manage</router-link>
          <router-link class="nav-item" to="/users">Users</router-link>
        </div>

        <div class="col-auto">
          <Deets />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  width: 100%;
  position: relative;
  padding: 10px;
  margin-bottom: 30px;
}

.nav-item {
  display: inline-block;
  padding: 2.5px 5px;
}
</style>
