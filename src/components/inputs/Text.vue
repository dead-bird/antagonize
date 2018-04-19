<script>
export default {
  props: ['text'],

  data() {
    return {
      thing: false,
    };
  },

  methods: {
    edit() {
      this.thing = 'edit';

      this.$emit('edit');
    },

    cancel() {
      this.thing = false;
      this.$refs.input.blur();

      this.$emit('cancel');
    },

    save() {
      this.thing = 'save';
      this.$refs.input.blur();

      this.$emit('save');
    },

    remove() {
      this.thing = false;

      this.$emit('remove');
    },
  },
};
</script>

<template>
  <div>
<!-- <input
    ref="input"
    type="text"
    :class="thing"
    v-model="text"
    @focus="edit"
    @keyup.enter="save"
    @keyup.esc="cancel"> -->
    <pre>{{ text }}</pre>
  </div>
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
