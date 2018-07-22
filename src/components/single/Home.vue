<script>
import Words from '@/components/parts/Words';
import Insult from '@/components/insults/Insult';
import Example from '@/components/examples/Example';
import Define from '@/components/parts/Define';
import Shark from '@/components/parts/Shark';

export default {
  components: { Words, Insult, Example, Define, Shark },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="col">
        <Words />

        <Insult />
      </div>
    </div>

      <Shark />

    <div class="container">
      <Example />
    </div>

    <Define />
  </section>
</template>

<style lang="scss" scoped>
</style>
