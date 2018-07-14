import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/single/Home';

import Login from '@/components/auth/Login';
import Manage from '@/components/manage/Manage';

import Users from '@/components/users/Users';
import User from '@/components/users/User';

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
      path: '/users',
      component: Users,
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
