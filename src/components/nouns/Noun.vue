<script>
import api from '@/resources/base';
import Check from '@/components/inputs/Check';
import Cross from '@/components/inputs/Cross';
import Text from '@/components/inputs/Text';

export default {
  components: { Check, Cross, Text },

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
      <input ref="mod" class="noun" type="text"
        :class="thing" v-model="noun.text" @focus="edit"
        @keyup.enter="save" @keyup.esc="cancel">
        <!-- <Text :text="noun.text" v-on:edit="edit" v-on:save="save" v-on:cancel="cancel" /> -->
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
.noun {
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

.noun:hover, .noun:active, .noun:focus {
  outline: none;
  border-color: white;
}

.noun.edit {
  border-color: coral;
}
.noun.save {
  border-color: lightgreen;
}
</style>
