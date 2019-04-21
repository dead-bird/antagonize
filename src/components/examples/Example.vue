<script>
import JavaScript from '@/components/examples/JavaScript';
import ES6 from '@/components/examples/ES6';
import cURL from '@/components/examples/cURL';

export default {
  components: { JavaScript, ES6, cURL },

  data() {
    return {
      base: `${process.env.API}insult`,

      options: ['ES6', 'JavaScript', 'cURL'],

      selected: 'ES6',

      response: {
        text: 'actual twat',
        modifier: 'actual',
        noun: 'twat',
        nsfw: true,
      },
    };
  },
};
</script>

<template>
  <div>
    <h2>API Endpoint</h2>
    <pre v-highlightjs><code class="javascript">'{{ base }}'</code></pre>

    <div class="row align-items-center">
      <div class="col">
        <h2>Example</h2>
      </div>

      <div class="col-auto">
        <button
          v-for="o in options"
          :key="o"
          @click="selected = o"
          :class="{active: selected === o}"
        >{{ o }}</button>
      </div>
    </div>

    <component :is="selected" :base="base"/>

    <h2>Response</h2>
    <pre v-highlightjs><code>{{ response }}</code></pre>
  </div>
</template>

<style lang="scss" scoped>
.options {
  background-color: transparent;
  border: none;
  color: #e6e6e6;
  margin-left: -7px;
}

button {
  margin-right: 15px;
  padding: 5px 10px;

  &:last-of-type {
    margin-right: 0;
  }
}

.active {
  border-color: palegreen;
}
</style>
