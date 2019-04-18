<script>
import api from '@/resources/base';
import Notif from '@/event';
import Detail from '@/components/manage/Detail';

export default {
  props: ['route', 'pass'],

  components: { Detail },

  data() {
    return {
      mode: false, // save, edit, cancel, delete
      backup: {},
      item: this.pass,
      time: null,
      readOnly: true,
      config: {
        headers: {
          Authorization: `Bearer ${this.$store.state.auth.user.token}`,
        },
      },
    };
  },

  methods: {
    edit() {
      clearTimeout(this.time);

      this.backup = Object.assign({}, this.item);
      this.mode = 'edit';
      this.readOnly = false;
    },

    nsfw() {
      if (this.mode === 'edit') this.item.nsfw = !this.item.nsfw;
    },

    cancel() {
      this.mode = 'cancel';
      this.item = this.backup;
      this.reset();
    },

    save() {
      if (!this.item.text || this.mode !== 'edit') return;

      this.mode = 'save';

      api
        .put(this.path, this.item, this.config)
        .then(() => {
          this.reset();
        })
        .catch(err => {
          Notif.$emit('error', err.response.data);
        });
    },

    remove() {
      console.log(this.config);

      api
        .delete(this.path, this.config)
        .then(() => {
          this.reset(0);
          this.$emit('remove', this.item._id);
        })
        .catch(err => {
          this.reset();
          Notif.$emit('error', err.response.data);
        });
    },

    reset(dur = 2000) {
      const self = this;

      this.readOnly = true;

      this.time = setTimeout(() => {
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
    <div class="col">
      <input
        type="text"
        v-model="item.text"
        @keyup.esc="cancel()"
        @dblclick="edit"
        :readonly="readOnly"
      >

      <Detail :item="item"/>
    </div>

    <div class="col-auto text-center">
      <button class="nsfw" :class="{checked: item.nsfw}" @click="nsfw">nsfw</button>
    </div>

    <div class="col-auto text-center">
      <button v-if="mode === 'edit'" @click="save">save</button>

      <button v-else-if="mode === 'delete'" @click="remove">confirm</button>

      <button class="delete" v-else @click="mode = 'delete'">remove</button>
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
