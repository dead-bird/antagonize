<script>
import api from '@/resources/base';
import Noun from '@/components/nouns/Noun';
import Check from '@/components/inputs/Check';
import Tick from '@/components/inputs/Tick';
import TextInput from '@/components/inputs/Text';

export default {
  components: { Noun, Check, TextInput, Tick },

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

        this.cancel();
      });
    },

    change(event) {
      this.blank.text = event;
    },

    cancel() {
      this.blank = { text: '', nsfw: false };
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
    <h1>Nouns</h1>

    <div class="row align-items-center push-bottom">
      <div class="col-sm-8">
        <TextInput :text="blank.text" @change="change" @cancel="cancel" />
      </div>

      <div class="col-sm-2 text-center">
        <Check :nsfw="blank.nsfw" v-on:nsfw="nsfw" />
      </div>

      <div class="col-sm-2 text-center">
        <Tick @save="add" />
      </div>
    </div>

    <div v-for="mod in nouns.data" :key="mod._id">
      <Noun :noun="mod" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
