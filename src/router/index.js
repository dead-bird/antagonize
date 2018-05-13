import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/single/Home';
import Lost from '@/components/single/Lost';
import Manage from '@/components/single/Manage';
import Login from '@/components/auth/Login';

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
      path: '*',
      component: Lost,
    },
  ],
});
