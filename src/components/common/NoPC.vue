<template>
  <div class="no-pc">
    <h1 class="no-pc-title">このアプリはモバイル専用です</h1>
    <p class="no-pc-text">恐れ入りますが、スマートフォン、タブレット等でご利用ください。</p>
  </div>
</template>

<style lang="scss" scoped>
.no-pc {
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: $z-no-pc;
  position: absolute;
  top: 0;
  left: 0;

  display: none;
  @include device-pc {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}

.no-pc-title {
  font-size: 36px;
}
</style>