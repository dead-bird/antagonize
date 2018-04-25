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
  <div>
    <section class="intro">
      <div class="define">
        <!-- <h1>antagonize</h1> -->
        <h4>ænˈtæɡəˌnaɪz</h4>
        verb<br>
        <strong>to make hostile; annoy or irritate.</strong><br>
        "His criticism <em>antagonized</em> his friends"
      </div>

      <div class="container">
        <div class="col">
          <h1>
            antagonize.
            <span class="desc">An API for getting randomly generated insults.</span>
          </h1>

          <div>hey you. yeah you. you <Insult />.</div>
        </div> 
      </div>   
    </section>

    <div class="container">
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
  </div>
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
  background-color: #222325;
  padding-top: 60px;
  margin-bottom: 60px;
  /* display: flex;
  align-items: center; */
}

.define {
  position: absolute;
  bottom: 60px;
  right: 60px;
  transform: scale(1.5);
  transform-origin: bottom right;
  color: #3d3d3e;
}
</style>
