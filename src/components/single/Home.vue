<script>
import Insult from '@/components/insults/Insult';

export default {
  components: { Insult },
};
</script>

<template>
  <div class="container">
    <div class="define">
      <h1>antagonize</h1>
      <h4>ænˈtæɡəˌnaɪz</h4>
      verb<br>
      <strong>to make hostile; annoy or irritate.</strong><br>
      "His criticism <em>antagonized</em> his friends"
    </div>

    <Insult />
  </div>
</template>

<style scoped>
.define {
  margin-bottom: 60px;
}
</style>
