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

<style lang="scss" scoped>
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

  &:hover,
  &:active,
  &:focus {
    outline: none;
    border-color: white;
  }

  &.edit {
    border-color: coral;
  }
  &.save {
    border-color: lightgreen;
  }
}
</style>
