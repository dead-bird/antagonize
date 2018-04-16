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

      this.modifiers.data.push({
        text: this.blank.text,
        nsfw: this.blank.nsfw,
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

    <!-- <div v-for="modifier in modifiers.data" :key="modifier._id">
      <router-link :to="modifier._id" append>{{ modifier.text }}</router-link>
    </div> -->

    <hr>

    <div class="form-group">
      <label for="new">Add Modifier</label>
      <input class="form-control" name="new" v-model="blank.text" type="text">
    </div>

    <div class="form-group">
      <label for="nsfw">NSFW</label>
      <input class="form-control" name="nsfw" v-model="blank.nsfw" type="radio">
    </div>

    <button :click="add()" class="btn">Save</button>

    <pre>{{ modifiers.data }}</pre>
  </div>
</template>

<style lang="scss" scoped>

</style>
