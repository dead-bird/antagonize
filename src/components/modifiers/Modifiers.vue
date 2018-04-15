<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifiers: [],
      blank: {
        text: '',
        nsfw: false,
      },
    };
  },

  methods: {
    async fetch() {
      this.modifiers = await api.get('modifiers');
    },

    add() {
      if (!this.blank.text) return;

      console.log('new');

      this.modifiers.push({
        text: '',
        nsfw: false,
      });

      this.blank = {
        text: '',
        nsfw: false,
      };
    },
  },

  created() {
    this.fetch();
  },
};
</script>

<template>
  <div class="container">
    <h1>All Modifiers</h1>

    <div v-for="modifier in modifiers.data" :key="modifier._id">
      <router-link :to="modifier._id" append>{{ modifier.text }}</router-link>
    </div>

    <hr>

    <input class="new-todo" v-model="blank" @keyup.enter="add">

    <pre>{{ modifiers.data }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
