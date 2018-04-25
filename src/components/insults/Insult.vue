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

      start: false,

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
      this.start = true;

      let rand = Math.floor(Math.random() * this.modifiers.data.length);
      this.m = this.modifiers.data[rand]._id;

      rand = Math.floor(Math.random() * this.nouns.data.length);
      this.n = this.nouns.data[rand]._id;
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
      <span v-for="modifier in modifiers.data" v-if="start && modifier._id === m" :key="modifier._id">
        {{ modifier.text }}
      </span>
      <span v-if="!start" key="start">dumb</span>
    </transition-group>

    <transition-group name="down" class="wrap">
      <span v-for="noun in nouns.data" v-show="start && noun._id === n" :key="noun._id">
        {{ noun.text }}
      </span>
      <span v-if="!start" key="start">bastard</span>
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
  transition: width 0.3s;
  width: auto;
  margin: 0;
}

.up-enter-active {
  transition: all 0.5s, opacity 1s 0.2s;
}

.up-leave-active {
  transition: all 0.5s, opacity 1s 0.5s;
}

.up-enter,
.up-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateY(-15px) rotateX(60deg);
}

.down-enter-active {
  transition: all 0.5s, opacity 1s 0.2s;
}

.down-leave-active {
  transition: all 0.5s, opacity 1s 0.5s;
}

.down-enter,
.down-leave-to {
  opacity: 0;
  position: absolute;
  top: 0;
  transform: translateY(15px) rotateX(-60deg);
}
</style>
