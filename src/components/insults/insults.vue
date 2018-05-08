<script>
import List from '@/components/parts/List';

export default {
  components: { List },
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-sm-4">
        <List route="modifiers" />
      </div>

      <div class="col-sm-1 text-center"><div class="line"></div></div>

      <div class="col-sm-4">
        <List route="nouns" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  width: 1px;
  height: 100%;
  display: inline-block;
  background-color: #4c4e5b;
}
</style>
