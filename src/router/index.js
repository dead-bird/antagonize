import Vue from 'vue';
import Router from 'vue-router';

import Manage from '@/components/manage/Manage';
import Lost from '@/components/single/Lost';
import Home from '@/components/single/Home';
import Login from '@/components/auth/Login';
import User from '@/components/users/User';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/manage',
      component: Manage,
    },
    {
      path: '/users/:id',
      component: User,
    },
    {
      path: '*',
      component: Lost,
    },
  ],
});
