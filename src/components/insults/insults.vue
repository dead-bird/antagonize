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
      <div class="col-sm-6">
        <Modifiers />
      </div>

      <div class="col-sm-6">
        <Nouns />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
