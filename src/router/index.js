import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/single/Home';

import Login from '@/components/auth/Login';
import Manage from '@/components/single/Manage';

import User from '@/components/user/User';

import Lost from '@/components/single/Lost';

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
      path: '/user/:id',
      component: User,
    },
    {
      path: '*',
      component: Lost,
    },
  ],
});
