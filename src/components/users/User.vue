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
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-7">
          <div class="row">
            <div class="col-auto">
              <img class="profile-image" :src="user.avatar" :alt="user.username">
            </div>

            <div class="col">
              <form>
                <div class="form-group">
                  <label for="username">Username</label>
                  <input id="username" class="form-control" type="text" v-model="user.username">
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input id="email" class="form-control" type="text" v-model="user.email">
                </div>

                <div class="form-group">
                  <label for="password">Password</label>
                  <input id="password" class="form-control" type="text" v-model="user.password">
                </div>

                <button>Save</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- <pre class="dump">{{user}}</pre> -->
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
  margin-top: 20px;
}

.form-group {
  text-align: left;
  margin-bottom: 20px;

  // &:last-child {
  // margin-bottom: 0;
  // }
}

.form-control {
  background-color: transparent;
  color: #e6e6e6;

  &:focus {
    outline: 0;
    box-shadow: none;
  }
}

button {
  float: right;
  padding: 10px 20px;
  font-size: 14px;
}
</style>
