<script>
import api from '@/resources/base';
import Notif from '@/event';
import Detail from '@/components/inputs/Detail';
// import Check from '@/components/inputs/Check';
// import Tick from '@/components/inputs/Tick';
// import TextInput from '@/components/inputs/Text';

export default {
  props: ['route', 'pass'],

  components: { Detail },
  // components: { Check, TextInput, Tick },

  data() {
    return {
      mode: false, // save, edit, cancel, delete
      backup: {},
      item: this.pass,
    };
  },

  methods: {
    edit() {
      this.backup = Object.assign({}, this.item);
      this.mode = 'edit';
      this.$refs.text.readOnly = false;
    },

    nsfw() {
      this.item.nsfw = !this.item.nsfw;
    },

    cancel() {
      this.mode = 'cancel';
      this.item = this.backup;
      this.reset();
    },

    save() {
      if (!this.item.text) return;

      this.mode = 'save';

      api
        .put(this.path, this.item)
        .then(() => {
          this.reset();
        })
        .catch(err => {
          Notif.$emit('error', err.response.data);
        });
    },

    confirm() {
      console.log('cf');

      this.mode = 'delete';
    },

    remove() {
      console.log('remove');
      this.reset(0);

      //   api.delete(this.path).then(() => {
      //     console.log('deleted - need to $emit to tell parent to remove from list');
      //     this.reset(0);
      //   });
    },

    reset(dur = 2000) {
      const self = this;

      this.$refs.text.readOnly = true;

      setTimeout(() => {
        console.log('reset');

        self.mode = false;
        self.backup = {};
      }, dur);
    },
  },

  computed: {
    path() {
      return `${this.route}/${this.item._id}`;
    },
  },
};
</script>

<template>
  <div class="row align-items-center push-bottom form" :class="`state-${mode}`">
    <div class="col-sm-8">
      <input
        class="text"
        ref="text"
        type="text"
        v-model="item.text"
        @keyup.esc="cancel()"
        @dblclick="edit"
        readonly>

        <Detail :item="item" />
    </div>

    <div class="col-sm-2 text-center">
      <div class="nsfw" :class="{checked: item.nsfw}" @click="mode === 'edit' ? nsfw() : null">️️⚠️</div>
    </div>

    <div class="col-sm-2 text-center">
      <div class="action" v-if="mode === 'edit'" @click="mode === 'edit' ? save() : null">save</div>

      <div class="action" v-else-if="mode === 'delete'" @click="remove()">confirm</div>

      <div class="action delete" v-else @click="confirm()">x</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form {
  position: relative;
}

.text {
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
  display: inline-block;
  user-select: none;
  font-size: 32px;
  line-height: 1;
  margin-bottom: 0;
  opacity: 0.1;
  transition: 0.3s opacity;
  padding-top: 6px;

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
