<script>
import Insult from '@/components/insults/Insult';

export default {
  components: { Insult },

  data() {
    return {
      api: `${process.env.API}insult`,
    };
  },
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

    <h2>API Endpoint</h2>
    <pre>{{ api }}</pre>
    Example

    <pre>
fetch('{{ api }}').then(function (res) {
  return res.json();
});</pre>

    ES6
    <pre>fetch('{{ api }}').then(res => res.json());</pre>

    Response
    <pre>
{
  text: "actual twat",
  modifier: "actual",
  noun: "twat",
  nsfw: true
}</pre>
  </div>
</template>

<style scoped>
.define {
  margin-bottom: 60px;
}
</style>
