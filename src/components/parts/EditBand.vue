<template>
  <div class="edit-band">
    <div class="edit-band-name">
      <small class="edit-band-label">バンド名</small>
      <input class="edit-band-name-box" type="text" ref="editBandName" :value="currentName" />
    </div>
    <div class="edit-band-member">
      <small class="edit-band-label">メンバー</small>
      <ul class="edit-band-member-list">
        <li class="edit-band-member-list-item" @touchstart="openMemberAdd">
          <IconPlus class="icon-plus" />メンバーを追加する
        </li>
        <li
          class="edit-band-member-list-item"
          v-for="(member, index) in currentMember"
          :key="index"
        >
          <div class="edit-band-member-icon"></div>
          <p class="dit-band-member-name">{{ member.name }}</p>
        </li>
      </ul>
    </div>
    <Button :label="'保存する'" :color="'main'" @save="saveBandInfo()" />
    <p class="edit-band-leave" @touchstart="leaveBand()">バンドを脱退する</p>
    <ModalMemberAdd
      v-if="openModal"
      :currentMember="currentMember"
      :originMember="bandObj.member"
      @close="closeMemberAdd()"
      @done="updateCurrentMember($event)"
    />
  </div>
</template>

<script>
import Button from "./Button";
import IconPlus from "../icons/IconPlus";
import ModalMemberAdd from "../modal/ModalMemberAdd";

export default {
  data() {
    return {
      currentName: "",
      currentMember: [],
      openModal: false,
    };
  },
  props: {
    bandObj: {
      type: Object, //編集するバンド
    },
  },
  components: {
    Button,
    IconPlus,
    ModalMemberAdd,
  },
  mounted() {
    this.currentName = this.bandObj.name;
    this.currentMember = this.bandObj.member;
  },
  methods: {
    openMemberAdd() {
      this.openModal = true;
    },
    closeMemberAdd() {
      this.openModal = false;
    },
    updateCurrentMember($event) {
      this.currentMember = this.bandObj.member.concat($event);
      this.openModal = false;
    },
    saveBandInfo() {
      const bandName = this.$refs.editBandName;
      if (!bandName.value.length) return;

      this.$store.dispatch("setBandInfo", {
        id: this.bandObj.id,
        bandName: bandName.value,
        member: this.currentMember,
      });
      this.$emit("close");
    },
    leaveBand() {
      const answer = confirm("本当に脱退しますか？");
      if (!answer) return;

      this.$store.dispatch("leaveBand", this.bandObj.id);
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-band {
  padding: $height-global-header 20px 0;
}

.edit-band-name {
  margin-top: 70px;
}

.edit-band-label {
  display: block;
  font-size: 10px;
  color: $color-gray_1;
}

.edit-band-name-box {
  width: 100%;
  height: 40px;
  border-bottom: solid 1px $color-main;
  margin-top: 10px;
}

.edit-band-member {
  margin: 50px 0 60px;
}

.edit-band-member-list-item {
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.icon-plus {
  width: 20px;
  margin: 0 5px;
}

.edit-band-member-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: $color-main;
  margin-right: 10px;
}

.edit-band-leave {
  margin-top: 36px;
  text-align: center;
  color: $color-red;
}
</style>
