import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/single/Home';
import Lost from '@/components/single/Lost';
import Modifiers from '@/components/modifiers/Modifiers';
import Modifier from '@/components/modifiers/Modifier';
import Nouns from '@/components/nouns/Nouns';
import Noun from '@/components/nouns/Noun';
import Insults from '@/components/insults/Insults';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/insults',
      component: Insults,
    },

    {
      path: '/modifiers',
      component: Modifiers,
    },
    {
      path: '/modifiers/:id',
      component: Modifier,
    },

    {
      path: '/nouns',
      component: Nouns,
    },
    {
      path: '/nouns/:id',
      component: Noun,
    },

    {
      path: '*',
      component: Lost,
    },
  ],
});
