<script>
import Words from '@/components/parts/Words';
import Insult from '@/components/insults/Insult';
import Example from '@/components/examples/Example';
import Define from '@/components/parts/Define';

export default {
  components: { Words, Insult, Example, Define },
};
</script>

<template>
  <section>
    <div class="container">
      <div class="col">
        <Words />

        <Insult />
      </div>

      <Example />
    </div>

    <Define />
  </section>
</template>

<style scoped>

</style>
