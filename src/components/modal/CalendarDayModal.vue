<template>
  <transition name="modal" appear>
    <div class="modal-overlay" @touchstart.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-header">{{ headerDate }}</div>
        <div class="modal-tabel">
          <ul class="modal-time-bar">
            <li class="modal-time-bar-item" v-for="(time, index) in times" :key="index">{{ time }}</li>
          </ul>
          <ul class="modal-band-list">
            <li class="modal-band-item" v-for="(band, index) in bands" :key="index">
              <div
                v-if="band === ''"
                class="modal-band-empty"
                @touchstart="openFullModal('reserve', index)"
              >
                <IconPlus class="icon-plus" />
              </div>
              <div class="modal-band-none" v-else-if="band === '_'">ー</div>
              <div
                v-else-if="isMyBand(band)"
                class="modal-band-mine"
                @touchstart="openFullModal('confirm', index)"
              >
                {{ band }}
                <div class="icon-edit-wrap">
                  <IconEdit class="icon-edit" />
                </div>
              </div>
              <div class="modal-band-others" v-else>{{ band }}</div>
            </li>
          </ul>
        </div>
      </div>
      <FullModal
        v-if="isOpenFullModal"
        @close="closeFullModal"
        :modalType="fullModalType"
        :date="headerDate"
        :dayNum="dateArray[2]"
        :bandIndex="bandIndex"
        :monthIndex="monthIndex()"
        :band="bands[bandIndex]"
        :time="fullModalTime"
      ></FullModal>
    </div>
  </transition>
</template>

<script>
import IconPlus from "../icons/IconPlus";
import IconEdit from "../icons/IconEdit";
import FullModal from "./FullModal";

export default {
  data() {
    return {
      times: ["9:00", "11:00", "13:00", "15:00", "17:00", "18:30", "20:00"],
      isOpenFullModal: false,
      fullModalType: "",
      fullModalTime: "",
      bandIndex: 0, //その日のうちどのコマか
    };
  },
  props: {
    dateArray: {
      type: Array,
    },
    bands: {
      type: Array,
    },
  },
  components: {
    IconPlus,
    IconEdit,
    FullModal,
  },
  computed: {
    headerDate() {
      //日時配列がそれぞれnumberなのでくっつけて文字列に
      return (
        this.dateArray[0] + "年" + this.dateArray[1] + "月" + this.dateArray[2] + "日" + "（" + this.dateArray[3] + "）"
      );
    },
    isMyBand() {
      //自分のバンドと照合し、そのコマが自分のバンドであるか
      return function (band) {
        const bandList = this.$store.state.user.bands;
        for (let i = 0; i < Object.keys(bandList).length; i++) {
          if (bandList[i].name === band) return true;
        }
        return false;
      };
    },
  },
  methods: {
    openFullModal(type, index) {
      this.fullModalType = type; //予約か確認か
      this.bandIndex = index; //コマのインデックス番号

      let newIndex = Math.floor(index / 2); //時間はインデックス番号/2
      const timeString = this.times[newIndex] + "〜" + this.times[newIndex + 1];

      this.fullModalTime = timeString;
      this.isOpenFullModal = true;
    },
    closeFullModal() {
      this.isOpenFullModal = false;
    },
    monthIndex() {
      //4月〜12月を0〜11に
      let monthIndex = this.dateArray[1];
      if (monthIndex <= 3) monthIndex += 8;
      else monthIndex -= 4;

      return monthIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
$header-height: 65px;
$padding-bottom: 40px;

.modal-overlay {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: fixed;
  z-index: $z-cal-modal;
  top: 0;
  left: 0;
  background-color: rgba(#000000, 0.3);
}

.modal-window {
  width: 100%;
  height: 85%;
  border-radius: 20px;
  margin-top: 5%;
  background-color: white;
}

.modal-header {
  width: 100%;
  height: $header-height;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  padding-top: 2%;
}

.modal-tabel {
  position: relative;
  width: 100%;
  height: calc(100% - #{$header-height});
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: $padding-bottom;
}

.modal-time-bar {
  position: absolute;
  left: 0;
  width: 40px;
  height: calc(100% - #{$padding-bottom});
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding-left: 10px;
}

.modal-time-bar-item {
  width: 100%;
  height: calc(100% / 6);
  min-height: calc(100% / 6);
  font-size: 10px;
}

.modal-band-list {
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 2%;
  padding: 0 10px;
}

.modal-band-item {
  width: 50%;
  height: calc(100% / 6);
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: solid 1px $color-gray_2;
  font-size: 12px;
  text-align: center;
  padding: 0 10px;
  letter-spacing: 0.08em;
  position: relative;
  &:nth-last-child(-n + 2) {
    border-bottom: solid 1px $color-gray_2;
  }
  &:nth-child(2n + 1) {
    &::after {
      content: "";
      border-right: solid 1px $color-gray_2;
      height: 70%;
      position: absolute;
      right: 0;
    }
  }
}
.modal-band-empty,
.modal-band-none,
.modal-band-mine,
.modal-band-others {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-band-mine {
  font-weight: 600;
}

.icon-plus {
  width: 20px;
}
.icon-edit-wrap {
  width: 20px;
  min-width: 20px;
  height: 20px;
  background-color: $color-main;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  top: 10px;
}
.icon-edit {
  width: 12px;
}

// アニメーション
.modal-enter-active {
  transition: opacity 0.3s;
}

.modal-leave-active {
  transition: opacity 0;
}

.modal-window {
  transition: opacity 0.3s, transform 0.1s;
}
</style>
