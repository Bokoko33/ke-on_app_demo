<template>
  <div class="footer">
    <ul class="footer-nav-list">
      <li class="footer-nav-item">
        <router-link to="/calendar">
          <IconCalendar class="footer-nav-icon" :stroke="color('/calendar')" />
          <p class="footer-nav-label" :class="{ color: this.$route.path === '/' }">カレンダー</p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/regular-table">
          <IconTable class="footer-nav-icon" :stroke="color('/regular-table')" />
          <p class="footer-nav-label" :class="{ color: this.$route.path === '/regular-table' }">正規コマ</p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/log">
          <IconLog class="footer-nav-icon" :stroke="color('/log')" />
          <p class="footer-nav-label" :class="{ color: this.$route.path === '/log' }">ログ</p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/my-page">
          <IconUser class="footer-nav-icon" :stroke="color('/my-page')" />
          <p class="footer-nav-label" :class="{ color: this.$route.path === '/my-page' }">マイページ</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconCalendar from "../icons/IconCalendar";
import IconTable from "../icons/IconTable";
import IconLog from "../icons/IconLog";
import IconUser from "../icons/IconUser";

export default {
  components: {
    IconCalendar,
    IconTable,
    IconLog,
    IconUser,
  },
  computed: {
    color: function () {
      return function (_path) {
        if (this.$route.path === _path) return "#4B436A";
        else return "#BFBFBF";
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: $height-global-footer;
  position: fixed;
  background-color: white;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 5px;
  box-shadow: 0 0 6px #e0e0e0;

  z-index: $z-global;
}

.footer-nav-list {
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}

.footer-nav-item {
  margin: auto 20px;
  text-align: center;
}

.footer-nav-icon {
  width: 30px;
  height: auto;
}

.footer-nav-label {
  color: #bfbfbf;
  font-size: 8px;
  margin-top: -5px;
}

.color {
  color: $color-main;
}
</style>
