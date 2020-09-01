<template>
  <div class="confirm">
    <div class="confirm-when">
      <p class="confirm-date">{{ date }}</p>
      <p class="confirm-time">{{ time }}</p>
    </div>
    <div class="confirm-band">
      <label class="confirm-band-label" for="bands">予約バンド</label>
      <p class="confirm-band-name">{{ band }}</p>
    </div>
    <p class="confirm-delete" @click="deleteReserve()">予約を削除する</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
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
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    deleteReserve() {
      const answer = confirm("本当に削除しますか？");
      if (!answer) return;
      this.$store.dispatch("deleteCalendarBand", {
        monthIndex: this.monthIndex,
        dayIndex: this.dayNum - 1,
        bandIndex: this.bandIndex,
      });

      this.createLog();

      this.$emit("close");
    },
    createLog() {
      const date = new Date();
      this.$store.dispatch("createLog", {
        user: this.user.name,
        content: this.date + this.time + "の「" + this.band + "」を削除しました。",
        date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.confirm {
  margin: auto;
  margin-top: 55px;
  width: 70%;
}

.confirm-date {
  font-weight: 600;
}

.confirm-time {
  font-size: 28px;
  margin-top: 5px;
  font-weight: 600;
}

.confirm-band {
  margin-top: 35px;
}

.confirm-band-label {
  display: block;
  font-size: 16px;
}

.confirm-band-name {
  font-size: 30px;
  font-weight: 600;
}

.confirm-delete {
  margin-top: 100px;
  text-align: center;
  color: $color-red;
}

.disable {
  opacity: 0.5;
}
</style>
