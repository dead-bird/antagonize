<template>
  <div class="sharky-con">
    

    <!-- <div class="container"> -->
      <img class="sharky" src="@/assets/sharky.svg" alt="">
    <!-- </div> -->

    <div class="waves"></div>
  </div>
</template>

<style lang="scss" scoped>
.sharky-con {
  position: relative;
  height: 300px;
  margin-bottom: 60px;
  overflow: hidden;
}

.container {
  position: relative;
}

.sharky {
  position: absolute;
  bottom: -40px;
  right: 0;
  width: 200px;
  transform: rotate(10deg);
  z-index: 1;
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
