<template>
  <div class="my-page">
    <div class="my-page-top">
      <div class="my-image"></div>
      <p class="my-grade">{{ grade }}回生</p>
      <p class="my-name">{{ name }}</p>
    </div>
    <div class="my-page-details">
      <div class="my-nickname">
        <small class="my-nickname-label">ニックネーム</small>
        <p class="my-nickname-text" @click="openEditModal('name', -1)">
          {{ nickname }}
          <IconRight class="icon-arrow" />
        </p>
      </div>
      <div class="my-bands">
        <small class="my-bands-label">
          所属バンド
          <div class="icon-plus-wrap" @click="sorryNofunction()">
            <IconPlus class="icon-plus" />
          </div>
        </small>
        <ul class="my-bands-list">
          <li class="my-band" v-for="(band, index) in bands" :key="index">
            <p class="my-band-name" @click="openEditModal('band', index)">
              {{ band.name }}
              <IconRight class="icon-arrow" />
            </p>
          </li>
        </ul>
      </div>
    </div>
    <ModalEdit
      v-if="isOpenEditModal"
      :modalType="editModalType"
      @close="closeEditModal"
      :bandObj="bands[editBandIndex]"
    />
  </div>
</template>

<script>
import IconRight from "../icons/IconRight";
import IconPlus from "../icons/IconPlus";
import ModalEdit from "../modal/ModalEdit";

import { mapState } from "vuex";

export default {
  data() {
    return {
      isOpenEditModal: false,
      editModalType: "",
      editBandIndex: "", //バンド編集のみ使用
    };
  },
  components: {
    IconRight,
    IconPlus,
    ModalEdit,
  },
  computed: {
    ...mapState({
      grade: (state) => state.user.grade,
      name: (state) => state.user.name,
      nickname: (state) => state.user.nickname,
      bands: (state) => state.user.bands,
    }),
  },
  // mounted() {
  //   this.$store.dispatch("getUserInfo");
  // },
  methods: {
    openEditModal(type, index) {
      this.editModalType = type;
      this.editBandIndex = index;
      this.isOpenEditModal = true;
    },
    closeEditModal() {
      this.isOpenEditModal = false;
    },
    sorryNofunction() {
      alert("この機能はまだ実装できていません！！申し訳ありません！！");
    },
  },
};
</script>

<style lang="scss" scoped>
.my-page {
  padding-top: 60px;
}

.my-page-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 50px;
  font-size: 18px;
}

.my-image {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
  border-radius: 50%;
  background-color: $color-main;
}

.my-grade {
  margin-bottom: 5px;
}

.my-page-details {
  width: 100%;
  padding-left: 20px;
}

.my-nickname-label,
.my-bands-label {
  height: 30px;
  font-size: 10px;
  color: $color-gray_1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.my-nickname-text,
.my-band-name {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.my-nickname,
.my-band {
  border-bottom: solid 1px $color-gray_2;
}

.my-bands {
  position: relative;
}

.icon-arrow,
.icon-plus {
  width: 20px;
  margin-right: 20px;
}

.my-nickname {
  margin-bottom: 50px;
}
</style>
