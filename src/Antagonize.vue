<script>
import Head from '@/components/parts/Head';

export default {
  components: { Head },
};
</script>

<template>
  <div id="antagonize">
    <Head />

    <router-view/>
  </div>
</template>

<style>
@import 'styles/main.scss';
</style>
