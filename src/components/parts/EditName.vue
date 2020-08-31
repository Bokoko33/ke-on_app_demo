<template>
  <div class="edit-name">
    <div class="edit-name-content">
      <small class="edit-name-label">ニックネーム</small>
      <input
        class="edit-name-box"
        type="text"
        ref="editName"
        :value="this.$store.state.user.nickname"
      />
    </div>
    <Button :label="'保存する'" :color="'main'" @save="saveNickName()" />
  </div>
</template>

<script>
import Button from "../parts/Button";

export default {
  components: {
    Button,
  },
  methods: {
    saveNickName() {
      const editName = this.$refs.editName;
      if (!editName.value.length) return;

      this.$store.dispatch("setNickName", editName.value);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-name-content {
  padding: $height-global-header 20px 0;
  margin-bottom: 200px;
}

.edit-name-label {
  display: block;
  margin-top: 70px;
  font-size: 10px;
  color: $color-gray_1;
}

.edit-name-box {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px $color-main;
  margin-top: 10px;
}
</style>
