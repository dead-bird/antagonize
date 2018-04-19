<script>
import Modifiers from '@/components/modifiers/Modifiers';
import Nouns from '@/components/nouns/Nouns';

export default {
  components: { Modifiers, Nouns },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-5">
        <Modifiers />
      </div>

      <div class="col-sm-1 text-center"><div class="line"></div></div>

      <div class="col-sm-5">
        <Nouns />
      </div>
    </div>
  </div>
</template>

<style scoped>
.line {
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: #4c4e5b;
}
</style>
