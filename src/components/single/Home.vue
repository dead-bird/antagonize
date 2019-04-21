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
  <div>
    <section>
      <div class="container">
        <div class="col">
          <Words/>

          <Insult/>
        </div>
      </div>
    </section>

    <section class="ocean">
      <div class="container">
        <Example/>

        <Define/>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.ocean {
  padding-top: 60px;
  // background-color: #22313f;
}
</style>
