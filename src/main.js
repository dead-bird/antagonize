// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';
import Moment from 'vue-moment';
import Antagonize from './Antagonize';
import router from './router';

Vue.use(VueHighlightJS);
Vue.use(Moment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#antagonize',
  router,
  components: { Antagonize },
  template: '<Antagonize />',
});
