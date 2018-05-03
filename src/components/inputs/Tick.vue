<script>
export default {};
</script>

<template>
  <div class="delete" @click="$emit('save')">✅</div>
</template>

<style lang="scss" scoped>
.delete {
  display: inline-block;
  user-select: none;
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  padding-top: 1px;
}
</style>
