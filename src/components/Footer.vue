<template>
  <div class="footer">
    <ul class="footer-nav-list">
      <li class="footer-nav-item">
        <router-link to="/">
          <img
            class="footer-nav-icon"
            src="../assets/icon_calendar.svg"
            alt="calendar-icon"
          />
          <p
            class="footer-nav-label"
            :class="{ color: this.$route.path === '/' }"
          >
            コマ予約
          </p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/regular-table">
          <img
            class="footer-nav-icon"
            src="../assets/icon_table.svg"
            alt="table-icon"
          />
          <p
            class="footer-nav-label"
            :class="{ color: this.$route.path === '/regular-table' }"
          >
            正規コマ
          </p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/log">
          <img
            class="footer-nav-icon"
            src="../assets/icon_log.svg"
            alt="log-icon"
          />
          <p
            class="footer-nav-label"
            :class="{ color: this.$route.path === '/log' }"
          >
            ログ
          </p>
        </router-link>
      </li>
      <li class="footer-nav-item">
        <router-link to="/my-page">
          <img
            class="footer-nav-icon"
            src="../assets/icon_user.svg"
            alt="user-icon"
          />
          <p
            class="footer-nav-label"
            :class="{ color: this.$route.path === '/my-page' }"
          >
            マイページ
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 18px;
}

.footer-nav-list {
  list-style: none;
  display: flex;
  align-items: center;
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
  color: #4b436a;
}
</style>
