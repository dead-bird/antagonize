<script>
import Words from '@/components/parts/Words';
import Insult from '@/components/insults/Insult';
import Example from '@/components/examples/Example';
import Define from '@/components/parts/Define';

import Test from '@/components/auth/test';

export default {
  components: { Words, Insult, Example, Define, Test },
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

    <!-- <Test /> -->

    <Define />
  </section>
</template>

<style lang="scss" scoped>
</style>
