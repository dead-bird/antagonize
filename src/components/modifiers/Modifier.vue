<script>
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import api from '@/resources/base';

export default {
  props: ['modifier'],

  data() {
    return {
      thing: false,
      current: {
        text: '',
        nsfw: null,
      },
      // modifier: {},
    };
  },

  methods: {
    edit() {
      this.thing = 'edit';
      this.current.text = this.modifier.text;
      this.current.nsfw = this.modifier.nsfw;
    },

    cancel() {
      this.thing = false;
      this.modifier.text = this.current.text;
      this.modifier.nsfw = this.current.nsfw;
      this.$refs.mod.blur();
    },

    save() {
      this.thing = 'save';
      this.$refs.mod.blur();

      api.put(`modifiers/${this.modifier._id}`, this.modifier).then(() => {
        const self = this;

        setTimeout(() => {
          self.thing = false;
        }, 3000);
      });
    },

    remove() {
      api.delete(`modifiers/${this.modifier._id}`).then(() => {
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
      <input ref="mod" class="modifier" type="text"
        :class="thing" v-model="modifier.text" @focus="edit"
        @keyup.enter="save" @keyup.esc="cancel">
    </div>

    <div class="col-sm-3">
      <!-- <label class="nsfw-check" for="nsfw">️️⚠️</label> -->
      <input name="nsfw" type="checkbox" v-model="modifier.nsfw" @change="save">
    </div>

    <div class="col-sm-3"><div class="delete" @click="remove">X</div></div>
  </div>
</template>

<style scoped>
.modifier {
  background-color: transparent;
  color: inherit;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid white;
  padding: 10px;
  transition: border-color .3s ease-out;
}

.modifier:active, .modifier:focus {
  outline: none;
}

.modifier.edit {
  border-color: coral;
}
.modifier.save {
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
