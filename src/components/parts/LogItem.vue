<template>
  <div class="log-item">
    <div class="log-user">
      <div class="log-user-icon"></div>
      <span class="log-user-name">{{ log.user }}</span>
    </div>
    <p class="log-text">{{ log.content }}</p>
    <small class="log-date">{{ log.date }}</small>
  </div>
</template>

<script>
export default {
  props: {
    log: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.log-item {
  padding: 12px 10px;
  border-bottom: solid 1px #afafaf;
  overflow: hidden;
  margin-bottom: 10px;
}

.log-user {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
}

.log-user-icon {
  width: 26px;
  height: 26px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 18px;
  background-color: $color-main;
}

.log-user-name {
  font-size: 12px;
}

.log-text {
  font-size: 14px;
  margin-bottom: 10px;
}

.log-date {
  float: right;
  font-size: 10px;
  color: #afafaf;
}
</style>
