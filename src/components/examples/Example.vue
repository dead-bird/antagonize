<script>
import JavaScript from '@/components/examples/JavaScript';
import ES6 from '@/components/examples/ES6';
import cURL from '@/components/examples/cURL';
import api from '@/resources/base';

export default {
  components: { JavaScript, ES6, cURL },

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
  <div>
    <div class="container">
      <h2>API Endpoint</h2>
      <pre v-highlightjs><code class="javascript">'{{ base }}'</code></pre>

      <h2>
        <select class="options" name="example" id="example" v-model="selected">
          <option v-for="option in options" v-bind:value="option">
            {{ option }} Example
          </option>
        </select>
      </h2>

      <component :is="selected" :base="base" />

      <h2>Response</h2>
      <pre v-highlightjs><code>{{ response.data }}</code></pre>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.options {
  background-color: transparent;
  border: none;
  color: #e6e6e6;
  margin-left: -7px;
}
</style>
