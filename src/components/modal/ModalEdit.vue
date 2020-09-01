<template>
  <div class="modal">
    <div class="modal-header">
      <div class="icon-arrow-wrap" @click="$emit('close')">
        <IconLeft class="icon-arrow" />
      </div>
      {{ title }}
    </div>
    <EditName v-if="title === 'ニックネーム編集'" @close="$emit('close')" />
    <EditBand v-if="title === '所属バンド編集'" :bandObj="bandObj" @close="$emit('close')" />
  </div>
</template>

<script>
import IconLeft from "../icons/IconLeft";
import EditName from "../parts/EditName";
import EditBand from "../parts/EditBand";

export default {
  props: {
    modalType: {
      type: String,
    },
    bandObj: {
      type: Object,
    },
  },
  components: {
    IconLeft,
    EditName,
    EditBand,
  },
  computed: {
    title() {
      if (this.modalType === "name") return "ニックネーム編集";
      else if (this.modalType === "band") return "所属バンド編集";
      else return "ERROR";
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: white;
  z-index: $z-edit-modal;
}
.modal-header {
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: $height-global-header;
  box-shadow: 0 0 6px #e0e0e0;
}

.icon-arrow-wrap {
  position: absolute;
  left: 15px;
  width: 30px;
  height: 30px;
}

.icon-arrow {
  width: 100%;
  height: auto;
}
</style>