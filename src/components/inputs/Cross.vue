<script>
export default {
};
</script>

<template>
  <div class="delete" @click="$emit('remove')">❌</div>
</template>

<style scoped>
.delete {
  display: inline-block;
  user-select: none;
  font-size: 18px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  padding-top: 6px;
}
</style>
