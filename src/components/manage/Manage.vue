<script>
import List from '@/components/manage/List';

export default {
  components: { List },

  beforeCreate() {
    if (!this.$store.state.auth.loggedIn) this.$router.push('/login');
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md col-lg-4">
        <List route="modifiers"/>
      </div>

      <div class="col-auto text-center">
        <div class="line"></div>
      </div>

      <div class="col-md col-lg-4">
        <List route="nouns"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: #4c4e5b;
}
</style>
