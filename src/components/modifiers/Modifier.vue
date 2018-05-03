<script>
import api from '@/resources/base';
import Check from '@/components/inputs/Check';
import Cross from '@/components/inputs/Cross';
import TextInput from '@/components/inputs/Text';

export default {
  components: { Check, Cross, TextInput },

  props: ['modifier'],

  data() {
    return {
      current: {
        text: '',
        nsfw: null,
      },
      // modifier: {},
    };
  },

  methods: {
    edit() {
      this.current.text = this.modifier.text;
      this.current.nsfw = this.modifier.nsfw;
    },

    change(event) {
      this.modifier.text = event;
    },

    cancel() {
      this.modifier.text = this.current.text;
      this.modifier.nsfw = this.current.nsfw;
    },

    save() {
      api.put(`modifiers/${this.modifier._id}`, this.modifier).then(() => {
        console.log('save');
      });
    },

    remove() {
      api.delete(`modifiers/${this.modifier._id}`).then(() => {
        console.log('del');
        // remove from list
      });
    },

    nsfw() {
      this.modifier.nsfw = !this.modifier.nsfw;
      this.save(); // bad?
    },
  },
};
</script>

<template>
  <div class="row align-items-center">
    <div class="col-sm-8">
      <TextInput :text="modifier.text" @edit="edit" @change="change" @save="save" @cancel="cancel" />
    </div>

    <div class="col-sm-2 text-center">
      <Check :nsfw="modifier.nsfw" v-on:nsfw="nsfw" />
    </div>

    <div class="col-sm-2 text-center">
      <Cross v-on:remove="remove" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
