<script>
// import api from '@/resources/base';
// import Check from '@/components/inputs/Check';
// import Tick from '@/components/inputs/Tick';
// import TextInput from '@/components/inputs/Text';

export default {
  props: ['route', 'item'],

  // components: { Check, TextInput, Tick },

  data() {
    return {
      mode: false,
      // item: {
      //   text: '',
      //   nsfw: false,
      // },
    };
  },

  methods: {
    save() {
      console.log('save');

      if (!this.item.text) return;

      // api.post(this.route, this.item).then(res => {
      // this.modifiers.data.push(res.data); // emit event probably

      this.cancel();
      // });
    },

    cancel() {
      // this.item = { text: '', nsfw: false };
    },

    nsfw() {
      this.item.nsfw = !this.item.nsfw;
    },
  },
};
</script>

<template>
  <div class="row align-items-center push-bottom">
    <div class="col-sm-8">
      <input
        class="text"
        ref="textInput"
        type="text"
        v-model="item.text"
        @keyup.esc="cancel()">
    </div>

    <div class="col-sm-2 text-center">
      <div class="nsfw" :class="item.nsfw ? 'checked' : ''" @click="nsfw()">️️⚠️</div>
    </div>

    <div class="col-sm-2 text-center">
      <div class="save" @click="save()">save</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

.nsfw {
  display: inline-block;
  user-select: none;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  opacity: 0.1;
  transition: 0.3s opacity;
  padding-top: 6px;

  &:hover,
  &.checked {
    opacity: 1;
  }
}

.save {
  display: inline-block;
  user-select: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  padding-top: 1px;
}
</style>
