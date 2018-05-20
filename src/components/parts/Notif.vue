<script>
import Notif from '@/event';

export default {
  methods: {
    nudge(type, message) {
      this.notifs.push({ type, message });

      const self = this;

      setTimeout(() => {
        self.kill();
      }, 3000);
    },

    kill() {
      this.notifs.splice(0, 1);
    },
  },

  data() {
    return {
      notifs: [],
    };
  },

  created() {
    Notif.$on('error', payLoad => this.nudge('error', payLoad));

    Notif.$on('success', payLoad => this.nudge('success', payLoad));
  },
};
</script>

<template>
  <div class="notif-bar">

    <transition-group name="list">
      <div class="notif" :class="notif.type" v-for="notif in notifs" :key="notif.message">
        <div class="container">
          {{ notif.message }}
        </div>
      </div>
    </transition-group>
  </div>
</template>

<style lang="scss">
.notif-bar {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.notif {
  width: 100%;
  padding: 12px 0;
  margin-bottom: 10px;
  background-color: paleturquoise;
  color: white;
  font-size: 22px;

  &.error {
    background-color: tomato;
  }
  &.success {
    background-color: blueviolet;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
