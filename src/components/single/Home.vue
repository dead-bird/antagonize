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
  <div>
    <section>
      <div class="container">
        <div class="col">
          <Words />

          <Insult />
        </div>
      </div>

      <Shark />
    </section>


    <section class="ocean">
      <div class="container">
        <Example />
      </div>

      <Define />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.ocean {
  padding-top: 60px;
  background-color: #22313f;
}
</style>
