<template>
  <div class="first">
    <h1 class="first-title">軽音コマ管理アプリ</h1>
    <p
      class="first-attention"
    >＊これは現在開発中のアプリのデモンストレーションです。アプリ内での編集は一時的にアプリ内に適用されますが、ブラウザをリロードすると全てリセットされます。</p>
    <router-link class="first-link" to="/calendar">始める</router-link>
  </div>
</template>

<style lang="scss" scoped>
.first {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  z-index: $z-first;
  text-align: center;
  padding: 0 10%;
}

.first-title {
  font-size: 24px;
  color: $color-main;
  margin-top: 40vw;
}

.first-attention {
  font-size: 14px;
  margin-top: 60px;
}

.first-link {
  display: block;
  margin-top: 160px;
  font-size: 18px;
  color: $color-sub;
}
</style>