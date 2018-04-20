<script>
import api from '@/resources/base';
import Modifier from '@/components/modifiers/Modifier';
import Check from '@/components/inputs/Check';
import Tick from '@/components/inputs/Tick';
import TextInput from '@/components/inputs/Text';

export default {
  components: { Modifier, Check, TextInput, Tick },

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

    change(event) {
      this.blank.text = event;
    },

    add() {
      if (!this.blank.text) return;

      api.post('modifiers', this.blank).then(res => {
        this.modifiers.data.push(res.data);

        this.cancel();
      });
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
    <h1>Modifiers</h1>

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
  
    <div v-for="mod in modifiers.data" :key="mod._id">
      <Modifier :modifier="mod" class="push-bottom" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
