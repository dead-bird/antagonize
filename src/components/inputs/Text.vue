<script>
export default {
  props: ['text'],

  data() {
    return {
      mode: false,
    };
  },

  methods: {
    edit() {
      this.mode = 'edit';
      this.$emit('edit');
    },

    cancel() {
      this.mode = false;
      this.$refs.text.blur();
      this.$emit('cancel');
    },

    save() {
      this.mode = 'save';
      this.$refs.text.blur();
      this.$emit('save');
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
    ref="text"
    type="text"
    :class="mode"
    v-model="text"
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
