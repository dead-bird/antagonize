<script>
import api from '@/resources/base';
import Modifier from '@/components/modifiers/Modifier';
import Check from '@/components/inputs/Check';

export default {
  components: { Modifier, Check },

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

      api.post('modifiers', this.blank).then(res => {
        this.modifiers.data.push(res.data);

        this.blank = { text: '', nsfw: false };
      });
    },

    nsfw() {
      this.blank.nsfw = !this.blank.nsfw;
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

    <form v-on:submit.prevent="add()" class="push-bottom">
      <div class="row justify-content-center">
        <div class="col-sm-6 form-group">
          <label for="new">Add Modifier</label>
          <input class="form-control" name="new" v-model="blank.text" type="text">
        </div>

        <div class="col-sm-3">
          <Check :nsfw="blank.nsfw" v-on:nsfw="nsfw" />
        </div>

        <div class="col-sm-3 form-group">
          <button type="submit">Save</button>
        </div>
      </div>
    </form>

    <div v-for="mod in modifiers.data" :key="mod._id">
      <Modifier :modifier="mod" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
