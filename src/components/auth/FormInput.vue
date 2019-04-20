<script>
export default {
  props: ['handle', 'val', 'type'],

  data() {
    return { mode: '', value: '' };
  },

  methods: {
    setMode({ type }) {
      this.mode = this.value.length ? 'input' : type;

      if (type === 'input') {
        this.$emit('setValue', this.value);
      }
    },
  },

  created() {
    this.value = this.val;
  },
};
</script>

<template>
  <div class="form-group" :class="`mode-${mode}`">
    <label :for="handle">{{ handle }}</label>

    <input
      :id="handle"
      v-model="value"
      @blur="setMode"
      @focus="setMode"
      @input="setMode"
      :type="type || 'text'"
    >
  </div>
</template>

<style lang="scss" scoped>
.form-group {
  position: relative;
  margin-bottom: 60px;
}

input {
  width: 100%;
  height: 40px;
  display: block;
  border: none;
  border-bottom: 1px solid #e6e6e6;
  background-color: transparent;
  color: #e6e6e6;
  font-size: 24px;

  &:focus {
    outline: none;
  }
}

label {
  position: absolute;
  top: 10px;
  margin-bottom: 0;
  transition: all 0.2s;
  pointer-events: none;
  text-transform: capitalize;

  .mode-focus &,
  .mode-input & {
    transform: translateY(-32px);
    font-size: 14px;
  }
}
</style>
