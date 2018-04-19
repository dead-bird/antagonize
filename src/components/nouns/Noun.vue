<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import api from '@/resources/base';

export default {
  props: ['noun'],

  data() {
    return {
      thing: false,
      current: {
        text: '',
        nsfw: null,
      },
      // noun: {},
    };
  },

  methods: {
    edit() {
      this.thing = 'edit';
      this.current.text = this.noun.text;
      this.current.nsfw = this.noun.nsfw;
    },

    cancel() {
      this.thing = false;
      this.noun.text = this.current.text;
      this.noun.nsfw = this.current.nsfw;
      this.$refs.mod.blur();
    },

    save() {
      this.thing = 'save';
      this.$refs.mod.blur();

      api.put(`nouns/${this.noun._id}`, this.noun).then(() => {
        const self = this;

        setTimeout(() => {
          self.thing = false;
        }, 3000);
      });
    },

    remove() {
      api.delete(`nouns/${this.noun._id}`).then(() => {
        this.thing = false;

        // remove from list
      });
    },
  },
};
</script>

<template>
  <div class="row">
    <div class="col-sm-6">
      <input ref="mod" class="noun" type="text"
        :class="thing" v-model="noun.text" @focus="edit"
        @keyup.enter="save" @keyup.esc="cancel">
    </div>

    <div class="col-sm-3">
      <!-- <label class="nsfw-check" for="nsfw">️️⚠️</label> -->
      <input name="nsfw" type="checkbox" v-model="noun.nsfw" @change="save">
    </div>

    <div class="col-sm-3"><div class="delete" @click="remove">X</div></div>
  </div>
</template>

<style scoped>
.noun {
  background-color: transparent;
  color: inherit;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid white;
  padding: 10px;
  transition: border-color .3s ease-out;
}

.noun:active, .noun:focus {
  outline: none;
}

.noun.edit {
  border-color: coral;
}
.noun.save {
  border-color: lightgreen;
}

.nsfw-check {
  display: inline-block;
}

.delete {
  display: inline-block;
  cursor: pointer;
  color: coral;
}
</style>
