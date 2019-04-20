<script>
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */

import FormInput from '@/components/auth/FormInput';
import api from '@/resources/base';
import Notif from '@/event';

export default {
  components: { FormInput },

  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },

  methods: {
    login() {
      api
        .post('users/login', this.user)
        .then(res => {
          Notif.$emit('success', `Welcome back, ${res.data.username}`);
          this.$store.commit('login', res.data);
          this.$router.push('/manage');
        })
        .catch(err => {
          Notif.$emit('error', err.response.data || 'an error occured');
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
        <form @submit="login" class="login">
          <FormInput :val="user.username" handle="username" @setValue="user.username = $event"/>

          <FormInput
            :val="user.password"
            handle="password"
            type="password"
            @setValue="user.password = $event"
          />

          <button type="submit" class="btn">Login</button>
        </form>
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
