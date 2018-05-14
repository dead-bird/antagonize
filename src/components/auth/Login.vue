<script>
// import api from '@/resources/base';

export default {
  data() {
    return {
      user: {},
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
            >
          </div>

          <button class="btn">Login</button>
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
  position: relative;
  margin-bottom: 60px;
}

input {
  width: 100%;
  height: 40px;
  display: block;
  border: none;
  border-bottom: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  font-size: 28px;

  &:focus {
    outline: none;
  }
}

label {
  position: absolute;
  top: 10px;
  margin-bottom: 0;
  transition: all .2s;
  pointer-events: none;

  &.edit, &.change {
    transform: translateY(-32px);
    font-size: 14px;
  }
}

.btn {
  float: right;
  padding-left: 30px;
  padding-right: 30px;
  border: 1px solid white;
  // border-radius: 0;
  background-color: transparent;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: #222325;
  }
}
</style>
