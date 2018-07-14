<script>
import api from '@/resources/base';
import Notif from '@/event';

export default {
  props: ['route'],

  data() {
    return {
      mode: false,
      item: {},
      time: null,
    };
  },

  methods: {
    edit() {
      clearTimeout(this.time);

      this.mode = 'edit';
    },

    cancel() {
      this.mode = 'cancel';
      this.item = {};
      this.reset();
    },

    save() {
      if (!this.item.text || this.mode !== 'edit') return;

      this.mode = 'save';
      this.$emit('add', this.item);

      api
        .put(this.path, this.item)
        .then(() => {
          this.reset();
        })
        .catch(err => {
          this.$emit('remove', this.item);
          Notif.$emit('error', err.response.data);
        });
    },

    reset(dur = 2000) {
      const self = this;

      this.time = setTimeout(() => {
        self.mode = false;
      }, dur);
    },
  },
};
</script>

<template>
  <div class="row align-items-center push-bottom form" :class="`state-${mode}`">
    <div class="col">
      <input
        type="text"
        v-model="item.text"
        @keyup.esc="reset()"
        @dblclick="edit">
    </div>

    <div class="col-auto text-center">
      <button class="nsfw" :class="{checked: item.nsfw}" @click="item.nsfw = !item.nsfw">
        nsfw
      </button>
    </div>

    <div class="col-auto text-center">
      <button v-if="mode === 'edit'" @click="save">save</button>

      <button v-else-if="mode === 'cancel'" @click="reset">confirm</button>

      <button class="delete" v-else @click="mode = 'cancel'">cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  position: relative;
}

input {
  width: 100%;
  display: block;
  background-color: transparent;
  color: inherit;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid transparent;
  padding: 10px;
  transition: border-color 0.3s ease-out;
  user-select: none;
  cursor: initial;

  &:hover,
  &:active,
  &:focus {
    outline: none;
    // border-color: white;
  }

  .state-edit & {
    user-select: all;
    border-color: lightblue;
  }
  .state-cancel & {
    border-color: coral;
  }
  .state-delete & {
    border-color: tomato;
  }
  .state-save & {
    border-color: lightgreen;
  }
}

.nsfw {
  cursor: initial;
  user-select: none;
  opacity: 0.1;
  transition: 0.3s opacity;

  &.checked {
    opacity: 1;
  }

  .state-edit & {
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
}

.action {
  display: inline-block;
  user-select: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  padding-top: 1px;

  &.delete {
    opacity: 0;
    transition: opacity 0.2s;

    .form:hover & {
      opacity: 1;
    }
  }
}
</style>
