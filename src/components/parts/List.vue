<script>
import api from '@/resources/base';
import Form from '@/components/parts/Form';
import Notif from '@/event';

export default {
  props: ['route'],

  components: { Form },

  data() {
    return { results: [] };
  },

  methods: {
    remove(id) {
      const i = this.results.findIndex(el => el._id === id);

      if (i > -1) this.results.splice(i, 1);
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

    <div v-for="item in results" :key="item._id">
      <Form :pass="item" :route="route" @remove="remove" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}
</style>
