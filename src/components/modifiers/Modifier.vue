<script>
import api from '@/resources/base';
import Check from '@/components/inputs/Check';
import Cross from '@/components/inputs/Cross';

export default {
  components: { Check, Cross },

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
      <input ref="mod" class="modifier" type="text"
        :class="thing" v-model="modifier.text" @focus="edit"
        @keyup.enter="save" @keyup.esc="cancel">
    </div>

    <div class="col-sm-2 text-center">
      <Check :nsfw="modifier.nsfw" v-on:nsfw="nsfw" />
    </div>

    <div class="col-sm-2 text-center">
      <Cross v-on:remove="remove" />
    </div>
  </div>
</template>

<style scoped>
.modifier {
  width: 100%;
  display: block;
  background-color: transparent;
  color: inherit;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid transparent;
  padding: 10px;
  transition: border-color .3s ease-out;
}

.modifier:hover, .modifier:active, .modifier:focus {
  outline: none;
  border-color: white;
}

.modifier.edit {
  border-color: coral;
}
.modifier.save {
  border-color: lightgreen;
}
</style>
