<script>
import Insult from '@/components/insults/Insult';
import Example from '@/components/examples/Example';
import Define from '@/components/parts/Define';

export default {
  components: { Insult, Example, Define },
};
</script>

<template>
  <section class="intro">
    <div class="container">
      <div class="col">
        <h1>
          antagonize.
          <span class="desc">an API for getting randomly generated insults.</span>
        </h1>

        <div class="insult">hey you. yeah you. you <Insult />.</div>
      </div>

      <Example />

      <Define />
    </div>
  </section>
</template>

<style scoped>
h1 {
  display: inline-block;
  font-size: 130px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 30px;
  margin-left: -10px;
  position: relative;
}

.desc {
  position: absolute;
  right: 10px;
  bottom: -10px;
  font-size: 16px;
}

.intro {
  min-height: 100vh;
  padding: 60px 0;
  /* display: flex;
  align-items: center; */
}

.insult {
  margin-bottom: 60px;
}
</style>
