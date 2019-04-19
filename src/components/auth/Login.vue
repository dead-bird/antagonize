<script>
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

import api from '@/resources/base';
import Notif from '@/event';

export default {
  data() {
    return {
      user: { username: '', password: '' },
    };
  },

  methods: {
    edit(el) {
      this.$refs[el].classList.add('edit');
    },

    blur(el) {
      this.$refs[el].classList.remove('edit');
    },

    change(el) {
      this.$refs[el].classList.add('change');
    },

    login() {
      api
        .post('users/login', this.user)
        .then(res => {
          Notif.$emit('success', `Welcome back, ${res.data.username}`);
          this.$store.commit('login', res.data);
          this.$router.push('/manage');
        })
        .catch(err => {
          let msg = 'an error occured';

          if (err.response) msg = err.response.data;

          Notif.$emit('error', msg);
        });
    },
  },

  beforeCreate() {
    if (this.$store.state.auth.loggedIn) {
      this.$router.push('/manage');
    }
  },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-5">
        <div class="login">
          <div class="form-group">
            <label ref="username" for="username">Username</label>
            <input
              id="username"
              type="text"
              @focus="edit('username')"
              @blur="blur('username')"
              @change="change('username')"
              v-model="user.username"
            >
          </div>

          <div class="form-group">
            <label ref="password" for="password">Password</label>
            <input
              id="password"
              type="password"
              @focus="edit('password')"
              @blur="blur('password')"
              @change="change('password')"
              v-model="user.password"
            >
          </div>

          <button class="btn" @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  padding-top: 160px;
}

.form-group {
  position: relative;
  margin-bottom: 60px;
}

input {
  width: 100%;
  height: 40px;
  display: block;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  background-color: transparent;
  color: #e6e6e6;
  font-size: 28px;

  &:focus {
    outline: none;
  }
}

label {
  position: absolute;
  top: 10px;
  margin-bottom: 0;
  transition: all 0.2s;
  pointer-events: none;

  &.edit,
  &.change {
    transform: translateY(-32px);
    font-size: 14px;
  }
}
</style>
