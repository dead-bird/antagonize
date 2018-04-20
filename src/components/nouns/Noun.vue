<script>
import api from '@/resources/base';
import Check from '@/components/inputs/Check';
import Cross from '@/components/inputs/Cross';
import TextInput from '@/components/inputs/Text';

export default {
  components: { Check, Cross, TextInput },

  props: ['noun'],

  data() {
    return {
      current: {
        text: '',
        nsfw: null,
      },
      // noun: {},
    };
  },

  methods: {
    edit() {
      this.current.text = this.noun.text;
      this.current.nsfw = this.noun.nsfw;
    },

    cancel() {
      this.noun.text = this.current.text;
      this.noun.nsfw = this.current.nsfw;
    },

    save() {
      api.put(`nouns/${this.noun._id}`, this.noun).then(() => {
        console.log('save');
      });
    },

    remove() {
      api.delete(`nouns/${this.noun._id}`).then(() => {
        console.log('del');
        // remove from list
      });
    },

    nsfw() {
      this.noun.nsfw = !this.noun.nsfw;
      this.save(); // bad?
    },
  },
};
</script>

<template>
  <div class="row align-items-center">
    <div class="col-sm-8">
      <TextInput :text="noun.text" v-on:edit="edit" v-on:save="save" v-on:cancel="cancel" />
    </div>

    <div class="col-sm-2 text-center">
      <Check :nsfw="noun.nsfw" v-on:nsfw="nsfw" />
    </div>

    <div class="col-sm-2 text-center">
      <Cross v-on:remove="remove" />
    </div>
  </div>
</template>

<style scoped>
</style>
