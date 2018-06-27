<script>
import api from '@/resources/base';
import Form from '@/components/inputs/Form';
import Notif from '@/event';

export default {
  props: ['route'],

  components: { Form },

  data() {
    return {
      results: [],
    };
  },

  methods: {
    async fetch() {
      api
        .get(this.route)
        .then(res => {
          this.results = res.data;
        })
        .catch(err => {
          Notif.$emit('error', err.response.data);
        });
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div>
    <h1>{{ route }}</h1>
  
    <div v-for="item in results" :key="item._id">
      <Form :pass="item" :route="route" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}
</style>
