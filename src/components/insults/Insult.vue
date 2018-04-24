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

    setInterval(this.next, 5000);
  },
};
</script>

<template>
  <div class="insult">
    <transition-group name="up" class="wrap">
      <span v-for="modifier in modifiers.data" v-if="modifier._id === m" :key="modifier._id">
        {{ modifier.text }}
      </span>
    </transition-group>

    <transition-group name="down" class="wrap">
      <span v-for="noun in nouns.data" v-show="noun._id === n" :key="noun._id">
        {{ noun.text }}
      </span>
    </transition-group>
  </div>
</template>

<style scoped>
.insult {
  display: inline-block;
}

.wrap {
  display: inline-block;
  position: relative;
  transition: width .3s;
  width: auto;
  margin: 0;
}

.up-enter-active, .up-leave-active {
  transition: all .5s;
}
.up-enter, .up-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateY(-100px);
}

.down-enter-active, .down-leave-active {
  transition: all .5s;
}
.down-enter, .down-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateY(100px);
}
</style>
