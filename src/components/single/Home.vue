<script>
import Insult from '@/components/insults/Insult';
import api from '@/resources/base';

export default {
  components: { Insult },

  data() {
    return {
      base: `${process.env.API}insult`,
      options: ['ES6', 'JavaScript', 'cURL'],
      selected: 'ES6',
      response: {
        data: {
          text: 'actual twat',
          modifier: 'actual',
          noun: 'twat',
          nsfw: true,
        },
      },
    };
  },

  methods: {
    async fetch() {
      this.response = await api.get('insult');
    },
  },

  created() {
    this.fetch();
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
    <pre>{{ base }}</pre>

    <h2>Example</h2>
    <select name="example" id="example" v-model="selected">
      <option v-for="option in options" v-bind:value="option">
        {{ option }}
      </option>
    </select>

<pre v-if="selected === 'cURL'"><code>curl -s -H "Accept: application/json" {{ base }}</code></pre>

<pre v-if="selected === 'JavaScript'"><code>fetch('{{ base }}').then(function (res) {
  return res.json();
});</code></pre>

<pre v-if="selected === 'ES6'"><code>fetch('{{ base }}').then(res => res.json());</code></pre>

    <h2>Response</h2>
    <pre><code>{{ response.data }}</code></pre>
  </div>
</template>

<style scoped>
.define {
  margin-bottom: 60px;
}
</style>
