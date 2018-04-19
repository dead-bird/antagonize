<script>
import api from '@/resources/base';
import Modifier from '@/components/modifiers/Modifier';

export default {
  components: { Modifier },

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

      api.post('modifiers', this.blank).then((res) => {
        this.modifiers.data.push(res.data);

        this.blank = { text: '', nsfw: false };
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
    <h1>Modifiers</h1>

    <form v-on:submit.prevent="add()">
      <div class="row justify-content-center">
        <div class="col-sm-6 form-group">
          <label for="new">Add Modifier</label>
          <input class="form-control" name="new" v-model="blank.text" type="text">
        </div>

        <div class="col-sm-3 form-group">
          <label for="nsfw">NSFW</label>
          <input class="form-control" name="nsfw" v-model="blank.nsfw" type="checkbox">
        </div>

        <div class="col-sm-3 form-group">
          <button type="submit">Save</button>
        </div>
      </div>
    </form>

    <hr>

    <div v-for="mod in modifiers.data" :key="mod._id">
      <Modifier :modifier="mod" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
