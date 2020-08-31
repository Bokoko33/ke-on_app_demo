<template>
  <div class="header">
    <p class="header-title">{{ headerTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["カレンダー", "正規コマ", "ログ", "マイページ"],
    };
  },
  computed: {
    //ヘッダーの表示切り替え
    headerTitle: function () {
      if (this.$route.path === "/calendar") return this.titles[0];
      else if (this.$route.path === "/regular-table") return this.titles[1];
      else if (this.$route.path === "/log") return this.titles[2];
      else if (this.$route.path === "/my-page") return this.titles[3];
      else return "Error";
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: $height-global-header;
  box-shadow: 0 0 6px #e0e0e0;

  z-index: $z-global;
}

.header-title {
  font-size: 18px;
  letter-spacing: 0.08em;
}
</style>
