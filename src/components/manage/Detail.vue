<script>
export default {
  props: ['item'],

  computed: {
    author() {
      return this.item.author ? this.item.author.username : 'admin';
    },
  },
};
</script>

<template>
  <div class="detail">
    <span>added</span>
    <span>by</span>
    <span>{{ author }}</span>
    <span>on</span>
    <span>{{ item.date | moment("MM/DD/YY") }}.</span>
  </div>
</template>

<style lang="scss" scoped>
.detail {
  position: absolute;
  left: 15px;
  bottom: 0;
  font-size: 12px;
  pointer-events: none;

  .state-edit & {
    pointer-events: initial;
  }

  span {
    display: inline-block;
    transition-property: all;
    transition-duration: 0.3s;
    opacity: 0;

    @for $i from 1 through 10 {
      &:nth-of-type(#{$i}) {
        transition-delay: 0.05s * $i;
      }
    }

    .state-edit & {
      opacity: 1;
      transform: translateY(20px);
    }
  }
}
</style>
