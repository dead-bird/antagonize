<template>
  <div class="sharky-con">
    

    <div class="sharky container">
      <img src="@/assets/sharky.svg" alt="">
    </div>

    <div class="waves"></div>
  </div>
</template>

<style lang="scss" scoped>
.sharky-con {
  position: relative;
  height: 300px;
  overflow: hidden;
  margin-bottom: -1px;
}

.container {
  position: relative;
}

.sharky {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  z-index: 1;
  padding: 0;
  text-align: right;

  img {
    transform: rotate(10deg);
    width: 200px;
  }
}

.waves {
  width: 100%;
  height: 28px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-image: url('../../assets/wave.svg');
}
</style>
