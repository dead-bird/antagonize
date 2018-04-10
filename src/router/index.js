import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Modifiers from '@/components/modifiers/Modifiers';
import Modifier from '@/components/modifiers/Modifier';
import Nouns from '@/components/nouns/Nouns';
import Noun from '@/components/nouns/Noun';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/modifiers',
      component: Modifiers,
      children: {
        path: ':id',
        component: Modifier
      }
    },
    {
      path: '/nouns',
      component: Nouns,
      children: {
        path: ':id',
        component: Noun
      }
    }
  ]
})
