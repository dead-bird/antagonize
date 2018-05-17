export default {
  state: {
    user: {},
    loggedIn: false,
  },

  mutations: {
    login(state, user) {
      state.loggedIn = true;
      state.user = user;

      localStorage.setItem('user', JSON.stringify(user));
    },

    logout(state) {
      state.loggedIn = false;
      state.user = {};

      localStorage.removeItem('user');
    },
  },
};
