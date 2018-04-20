<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifiers: {
        data: {},
      },

      nouns: {
        data: {},
      },

      m: '',
      n: '',
    };
  },

  methods: {
    async fetch() {
      this.modifiers = await api.get('modifiers');
      this.nouns = await api.get('nouns');
    },

    next() {
      this.m = this.modifiers.data[Math.floor(Math.random() * this.modifiers.data.length)]._id;
      this.n = this.nouns.data[Math.floor(Math.random() * this.nouns.data.length)]._id;
    },
  },

  created() {
    this.fetch();

    setInterval(this.next, 1000);
  },
};
</script>

<template>
  <h1>
    you
    <transition-group name="fade">
      <span v-for="modifier in modifiers.data" v-if="modifier._id === m" :key="modifier._id">
        {{ modifier.text }}
      </span>
    </transition-group>

    <transition-group name="fade">
      <span v-for="noun in nouns.data" v-show="noun._id === n" :key="noun._id">
        {{ noun.text }}
      </span>
    </transition-group>
  </h1>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
