<script>
export default {
  props: ['nsfw'],
};
</script>

<template>
  <div class="nsfw" :class="nsfw ? 'checked' : ''" @click="$emit('nsfw')">️️⚠️</div>
</template>

<style lang="scss" scoped>
.nsfw {
  display: inline-block;
  user-select: none;
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  margin-bottom: 0;
  opacity: 0.1;
  transition: 0.3s opacity;
  padding-top: 6px;

  &:hover,
  &.checked {
    opacity: 1;
  }
}
</style>
