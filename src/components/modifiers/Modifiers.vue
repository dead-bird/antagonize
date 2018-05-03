<script>
import api from '@/resources/base';
// import Modifier from '@/components/modifiers/Modifier';
import Form from '@/components/inputs/Form';

export default {
  components: { Form },

  data() {
    return {
      modifiers: [],
    };
  },

  methods: {
    async fetch() {
      this.modifiers = await api.get('modifiers');
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div>
    <h1>Modifiers</h1>

    <!-- <Form route="modifiers" /> -->
  
    <div v-for="mod in modifiers.data" :key="mod._id">
      <Form :item="mod" route="modifiers" class="push-bottom"  />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
