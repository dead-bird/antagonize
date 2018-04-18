<script>
import api from '@/resources/base';

export default {
  props: ['modifier'],

  data() {
    return {
      // modifier: {},
    };
  },

  methods: {
    save() {
      console.log(this.modifier._id);
      console.log(this.modifier.nsfw);

      // api.put(`modifier/${modifier.id}`)
    },
  },
};
</script>

<template>
  <div>
    <input class="modifier" type="text" :value="modifier.text" @keyup.enter="save">

    <!-- <label class="nsfw-check" for="nsfw">️️⚠️</label> -->
    <input name="nsfw" type="checkbox" :value="modifier.nsfw">
    <pre>{{ modifier }}</pre>
  </div>
</template>

<style scoped>
.modifier {
  background-color: transparent;
  color: inherit;
  border: none;
  font-size: 22px;
  border-bottom: 1px solid white;
  padding: 10px;
}

.modifier:active, .modifier:focus, .modifier.edit {
  outline: none;
  border-color: coral;
}

.nsfw-check {
  display: inline-block;
}
</style>
