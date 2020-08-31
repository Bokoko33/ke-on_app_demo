<template>
  <div class="selected-user">
    <div class="selected-icon" @touchstart="$emit('remove')">
      <div class="icon-close-wrap">
        <IconClose class="icon-close" />
      </div>
      <div class="selected-icon-main"></div>
    </div>
    <p class="selected-name">{{ user.name }}</p>
  </div>
</template>

<script>
import IconClose from "../icons/IconClose";

export default {
  props: {
    user: {
      type: Object,
    },
  },
  components: {
    IconClose,
  },
};
</script>

<style lang="scss" scoped>
.selected-user {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
}

.selected-icon {
  position: relative;
  width: 36px;
  height: 36px;
}

.selected-icon-main {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: $color-main;
}

.selected-name {
  font-size: 10px;
  width: 60px;
  text-align: center;
  margin-top: 5px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}

.icon-close-wrap {
  width: 20px;
  height: 20px;
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-close {
  position: relative;
  width: 50%;
  height: auto;
  top: 0;
  left: 0;
}
</style>