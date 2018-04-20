<script>
import api from '@/resources/base';
import Noun from '@/components/nouns/Noun';

export default {
  components: { Noun },

  data() {
    return {
      nouns: [],
      blank: {
        text: '',
        nsfw: false,
      },
    };
  },

  methods: {
    async fetch() {
      this.nouns = await api.get('nouns');
    },

    add() {
      if (!this.blank.text) return;

      api.post('nouns', this.blank).then(res => {
        this.nouns.data.push(res.data);

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
    <h1>Nouns</h1>

    <form v-on:submit.prevent="add()" class="push-bottom">
      <div class="row justify-content-center">
        <div class="col-sm-6 form-group">
          <label for="new">Add noun</label>
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

    <div v-for="mod in nouns.data" :key="mod._id">
      <Noun :noun="mod" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
