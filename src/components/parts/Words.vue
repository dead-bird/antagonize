<script>
export default {};
</script>

<template>
  <h1>
    antagonize.
    <span class="desc">an API for getting randomly generated insults.</span>
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  font-size: 14.75vw;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 10vh;
  margin-left: -10px;
  position: relative;

  @media (min-width: 1000px) {
    font-size: 130px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 7.5vh;
  }
}

.desc {
  position: absolute;
  right: 8px;
  bottom: -6px;
  font-size: 0.115em;
  letter-spacing: 0.04em;
}
</style>
