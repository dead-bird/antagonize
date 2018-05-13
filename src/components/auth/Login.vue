<script>
// import api from '@/resources/base';

export default {
  methods: {
    async fetch() {
      // this.user = await api.post('users/auth', {username: 'dave', password: 'test'});
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="login">
          <div class="form-group">
            <label for="username">Username</label>
            <input id="username" type="text">
          </div>

          <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  padding-top: 120px;
}

.form-group {
  margin-bottom: 30px;
}

input {
  width: 100%;
  height: 36px;
  display: block;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  color: #fff;

  &:focus {
    outline: none;
  }
}
</style>
