/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */

import api from '@/resources/base';

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

    auth(state) {
      const user = JSON.parse(localStorage.getItem('user'));

      if (!user) return false;

      state.loggedIn = true;

      api
        .post('users/auth', { token: user.token })
        .then(res => {
          state.user = res.data;
          state.user.token = user.token;
        })
        .catch(err => {
          console.error(err);

          state.user = {};
          state.loggedIn = false;
          localStorage.removeItem('user');
        });
    },
  },
};
