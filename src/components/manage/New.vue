<script>
import api from '@/resources/base';
import Notif from '@/event';

export default {
  props: ['route'],

  data() {
    return {
      mode: false,
      item: { nsfw: false },
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
      this.reset();
    },

    save() {
      if (!this.item.text) return;

      this.mode = 'save';

      this.item.author = this.$store.state.auth.user._id;

      api
        .post(this.route, this.item)
        .then(res => {
          this.$emit('add', res.data);
          this.reset(0);
        })
        .catch(err => {
          this.$emit('remove', this.item);
          Notif.$emit('error', err.response.data);
        });
    },

    reset(dur = 2000) {
      const self = this;

      this.time = setTimeout(() => {
        self.item = { nsfw: false };
        self.mode = false;
      }, dur);
    },
  },
};
</script>

<template>
  <div class="row align-items-center push-bottom form" :class="`state-${mode}`">
    <template v-if="mode">
      <div class="col">
        <input
          type="text"
          v-model="item.text"
          @keyup.esc="reset(0)"
          @dblclick="edit"
          autofocus>
      </div>

      <div class="col-auto text-center">
        <button class="nsfw" :class="{checked: item.nsfw}" @click="item.nsfw = !item.nsfw">
          nsfw
        </button>
      </div>

      <div class="col-auto text-center">
        <button v-if="mode === 'edit'" @click="save">confirm</button>
      </div>
    </template>

    <template v-else>
      <div class="col"></div>
      <div class="col-auto"><button @click="edit">new</button></div>
    </template>
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
