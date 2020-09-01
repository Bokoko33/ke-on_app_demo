<template>
  <div class="full-modal">
    <div class="full-modal-header">
      <div class="icon-close-wrap" @click="$emit('close')">
        <IconClose />
      </div>
      {{ title }}
    </div>
    <Reserve
      v-if="title === 'コマ予約'"
      :date="date"
      :time="time"
      :dayNum="dayNum"
      :bandIndex="bandIndex"
      :monthIndex="monthIndex"
      @close="$emit('close')"
    />
    <Confirm
      v-if="title === '予約コマ確認'"
      :date="date"
      :time="time"
      :band="band"
      :dayNum="dayNum"
      :bandIndex="bandIndex"
      :monthIndex="monthIndex"
      @close="$emit('close')"
    />
  </div>
</template>

<script>
import IconClose from "../icons/IconClose";
import Reserve from "../parts/Reserve";
import Confirm from "../parts/Confirm";

export default {
  props: {
    modalType: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    band: {
      type: String,
    },
    dayNum: {
      type: Number,
    },
    bandIndex: {
      type: Number,
    },
    monthIndex: {
      type: Number,
    },
  },
  components: {
    IconClose,
    Reserve,
    Confirm,
  },
  computed: {
    title() {
      if (this.modalType === "reserve") return "コマ予約";
      else if (this.modalType === "confirm") return "予約コマ確認";
      else return "ERROR";
    },
  },
};
</script>

<style lang="scss" scoped>
.full-modal {
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: $z-init-modal;
  position: absolute;
}

.full-modal-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
