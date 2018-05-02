<script>
import api from '@/resources/base';
import Check from '@/components/inputs/Check';
import Tick from '@/components/inputs/Tick';
import TextInput from '@/components/inputs/Text';

export default {
  props: ['route'],

  components: { Check, TextInput, Tick },

  data() {
    return {
      thing: {
        text: '',
        nsfw: false,
      },
    };
  },

  change(event) {
    this.thing.text = event;
  },

  add() {
    if (!this.thing.text) return;

    api.post(this.route, this.thing).then(res => {
      this.modifiers.data.push(res.data);

      this.cancel();
    });
  },

  cancel() {
    this.thing = { text: '', nsfw: false };
  },

  nsfw() {
    this.thing.nsfw = !this.thing.nsfw;
  },
};
</script>

<template>
  <div class="row align-items-center push-bottom">
    <div class="col-sm-8">
      <TextInput :text="thing.text" @change="change" @cancel="cancel" />
    </div>

    <div class="col-sm-2 text-center">
      <Check :nsfw="thing.nsfw" v-on:nsfw="nsfw" />
    </div>

    <div class="col-sm-2 text-center">
      <Tick @save="add" />
    </div>
  </div>
</template>

<style scoped>
.nsfw {
  display: inline-block;
  user-select: none;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  opacity: 0.1;
  transition: 0.3s opacity;
  padding-top: 6px;
}

.nsfw:hover,
.nsfw.checked {
  opacity: 1;
}
</style>
