<script>
import Top from '@/components/parts/Top';
import Notif from '@/components/parts/Notif';

export default {
  components: { Top, Notif },
};
</script>

<template>
  <div id="antagonize">
    <Top />

    <Notif />

    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
body {
  background-color: #222325;
  color: #e6e6e6;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.2;
  font-size: 16px;
  padding: 60px 0;
  padding-top: 0;
}

a {
  color: #e6e6e6;

  &:hover {
    color: #e6e6e6;
    text-decoration: none;
  }
}

.dump {
  position: relative;
  padding: 30px 25px 25px 25px;
  margin: 15px 0;
  // border: 2px dashed tomato;
  background-color: #fff;
  color: coral;
  font-size: 16px;
  overflow: visible;

  &:before {
    content: 'example';
    position: absolute;
    top: -2px;
    left: -2px;
    background-color: tomato;
    padding: 2px 4px;
    font-size: 10px;
    // color: tomato;
    color: #e6e6e6;
  }
}

.hljs {
  padding: 20px;
  font-size: 16px;
  margin-bottom: 30px;
}

h1 {
  font-size: 55px;
  margin-bottom: 0.5em;
}

hr {
  border-color: #e6e6e6;
}

.push-bottom {
  margin-bottom: 45px;
}

button {
  font-size: 10px;
  border-radius: 2.5px;
  line-height: 1;
  background-color: transparent;
  border-color: #e6e6e6;
  color: #e6e6e6;
  padding: 2.5px 5px;
  font-weight: 300;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    outline: 0;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
