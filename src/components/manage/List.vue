<script>
/* eslint-disable no-param-reassign  */

import Form from '@/components/manage/Form';
import api from '@/resources/base';
import Notif from '@/event';

export default {
  props: ['route'],

  components: { Form },

  data() {
    return { results: [], addNew: false };
  },

  methods: {
    remove(id) {
      const i = this.results.findIndex(el => el._id === id);

      if (i > -1) this.results.splice(i, 1);
    },

    add(item) {
      this.addNew = false;
      this.results.push(item);
    },
  },

  computed: {
    singular() {
      return this.route.replace('s', '');
    },
  },

  created() {
    api
      .get(this.route)
      .then(res => {
        this.results = res.data;
      })
      .catch(err => {
        Notif.$emit('error', err.response.data);
      });
  },
};
</script>

<template>
  <div>
    <h1>{{ route }}</h1>

    <transition-group name="list">
      <div v-for="item in results" :key="item._id" class="list-item">
        <Form :pass="item" :route="route" @remove="remove" class="push-bottom"/>
      </div>

      <div key="new" class="list-item">
        <button class="btn" @click="addNew = !addNew">
          <template v-if="!addNew">Add {{ singular }}</template>
          <template v-else>Cancel</template>
        </button>

        <Form v-if="addNew" state="edit" :route="route" @remove="remove" @add="add"/>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}

.list-item {
  transition: all 0.4s;
  position: relative;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
