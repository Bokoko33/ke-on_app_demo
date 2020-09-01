<template>
  <div class="member-list-item" @click="switchSelected()">
    <div class="member-icon"></div>
    {{ user.name }}
    <IconCheck class="icon-check" v-if="selected" />
  </div>
</template>

<script>
import IconCheck from "../icons/IconCheck";
export default {
  props: {
    user: {
      type: Object,
    },
    selected: {
      type: Boolean,
    },
    handleList: {
      type: Function,
    },
  },
  components: {
    IconCheck,
  },
  methods: {
    switchSelected() {
      //選択中→リストに入れる、ではなくリストに入っている→選択中、とするのでとりあえずpropの逆の値を返す
      this.$emit("handleList", !this.selected);
    },
  },
};
</script>

<style lang="scss" scoped>
.member-list-item {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: solid 1px $color-gray_2;
  padding: 16px 0;
  font-size: 16px;
  background-color: white;
}

.member-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $color-main;
  margin: 0 10px 0 20px;
}

.icon-check {
  position: absolute;
  right: 20px;
}
</style>