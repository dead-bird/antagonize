<script>
import api from '@/resources/base';

export default {
  data() {
    return {
      modifiers: {},

      nouns: {},

      start: false,

      m: '',
      n: '',
    };
  },

  methods: {
    fetch() {
      api
        .get('modifiers')
        .then(modifiers => {
          this.modifiers = modifiers.data;
        })
        .catch(err => {
          console.error(err.response.data);
        });

      api
        .get('nouns')
        .then(nouns => {
          this.nouns = nouns.data;
        })
        .catch(err => {
          console.error(err.response.data);
        });
    },

    next() {
      this.start = true;

      let rand = Math.floor(Math.random() * this.modifiers.length);
      this.m = this.modifiers[rand]._id;

      rand = Math.floor(Math.random() * this.nouns.length);
      this.n = this.nouns[rand]._id;
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
    hey you. yeah you. you

    <transition-group name="up" class="wrap">
      <span v-for="modifier in modifiers" v-if="start && modifier._id === m" :key="modifier._id">
        {{ modifier.text }}
      </span>
      <span v-if="!start" key="start">dumb</span>
    </transition-group>

    <transition-group name="down" class="wrap">
      <span v-for="noun in nouns" v-show="start && noun._id === n" :key="noun._id">
        {{ noun.text }}
      </span>
      <span v-if="!start" key="start">bastard</span>
    </transition-group>.
  </div>
</template>

<style lang="scss" scoped>
.insult {
  font-size: 32px;
  margin-bottom: 15vh;

  @media (min-width: 1200px) {
    margin-bottom: 10vh;
  }
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
