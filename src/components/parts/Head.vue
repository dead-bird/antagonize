<script>
export default {
};
</script>

<template>
  <header class="head">
    <router-link class="menu-item" to="/">Dash</router-link>
    <router-link class="menu-item" to="/modifiers">Modifiers</router-link>
    <router-link class="menu-item" to="/nouns">Nouns</router-link>
  </header>
</template>

<style scoped>
.head {
  display: flex;
}

.menu-item {
  padding: 5px;
}
</style>
