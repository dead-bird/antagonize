<script>
import Vue from 'vue';
import Notif from '@/event';

export default new Vue({
  methods: {
    nudge(type, message) {
      console.log('notif: ', type, message);
    },
  },

  mounted() {
    // Notif.$on('error', this.nudge('error', payLoad));

    Notif.$on('error', payLoad => {
      console.log('notif: ', payLoad);
    });
  },
});
</script>

<template>
  <div class="notif-bar">
    <div class="notif">
      <div class="container">
        message
      </div>
    </div>
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
  padding: 15px 0;
  margin-bottom: 10px;
  background-color: paleturquoise;
  color: white;
  font-size: 26px;
}
</style>
