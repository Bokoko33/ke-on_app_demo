<template>
  <div class="header">
    <!-- <p class="header-title" v-if="this.$route.path === '/'">
      コマ予約
    </p>
    <p class="header-title" v-else-if="this.$route.path === '/regular-table'">
      正規コマ
    </p>
    <p class="header-title" v-else-if="this.$route.path === '/log'">
      ログ
    </p>
    <p class="header-title" v-else-if="this.$route.path === '/my-page'">
      マイページ
    </p> -->
    <p class="header-title">{{ headerTitle }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: ["コマ予約", "正規コマ", "ログ", "マイページ"],
    };
  },
  computed: {
    //ヘッダーの表示切り替え
    headerTitle: function() {
      if (this.$route.path === "/") return this.titles[0];
      else if (this.$route.path === "/regular-table") return this.titles[1];
      else if (this.$route.path === "/log") return this.titles[2];
      else if (this.$route.path === "/my-page") return this.titles[3];
      else return "Error";
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
}

.header-title {
  font-size: 18px;
  letter-spacing: 0.08em;
}
</style>
