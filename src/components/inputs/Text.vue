<script>
export default {
  props: ['text'],

  data() {
    return {
      mode: false,
      thing: this.text,
    };
  },

  methods: {
    edit() {
      this.mode = 'edit';
      this.$emit('edit');
    },

    cancel() {
      this.mode = false;
      this.$refs.textInput.blur();
      this.$emit('cancel');
    },

    change() {
      this.$emit('change', this.thing);
    },

    save() {
      this.mode = 'save';
      this.$refs.textInput.blur();
      this.$emit('save', this.thing);
    },

    remove() {
      this.mode = false;
      this.$emit('remove');
    },
  },
};
</script>

<template>
  <input
    ref="textInput"
    type="text"
    :class="mode"
    v-model="thing"
    @keyup="change"
    @focus="edit"
    @keyup.enter="save"
    @keyup.esc="cancel">
</template>

<style scoped>
input {
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

input:hover, input:active, input:focus {
  outline: none;
  border-color: white;
}

input.edit {
  border-color: coral;
}
input.save {
  border-color: lightgreen;
}
</style>
