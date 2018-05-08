<script>
import api from '@/resources/base';
import Form from '@/components/inputs/Form';

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
      this.results = await api.get(this.route);
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
  
    <div v-for="item in results.data" :key="item._id">
      <Form :pass="item" :route="route" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}
</style>
