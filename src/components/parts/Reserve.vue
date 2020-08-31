<template>
  <div class="reserve">
    <form class="reserve-form">
      <div class="reserve-when">
        <p class="reserve-date">{{ date }}</p>
        <p class="reserve-time">{{ time }}</p>
      </div>
      <div class="reserve-band">
        <label class="reserve-band-label" for="bands">予約バンド</label>
        <div class="reserve-band-select-wrap">
          <select class="reserve-band-select" id="bands" ref="bands" v-model="selected">
            <option value>選択してください</option>
            <option
              v-for="(band, index) in user.bands"
              :key="index"
              :value="band.name"
            >{{ band.name }}</option>
          </select>
        </div>
      </div>
      <Button
        class="reserve-button"
        :class="{ disable: selected === '' }"
        :label="'予約する'"
        :color="'sub'"
        @save="saveBand()"
      />
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Button from "./Button";

export default {
  data() {
    return {
      selected: "",
    };
  },
  props: {
    date: {
      type: String,
    },
    time: {
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
    Button,
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
  methods: {
    saveBand() {
      if (this.selected === "") return;

      const answer = confirm("予約を完了します。");
      if (!answer) return;

      //カレンダーに登録
      this.$store.dispatch("setCalendarBand", {
        bandName: this.selected,
        monthIndex: this.monthIndex,
        dayIndex: this.dayNum - 1,
        bandIndex: this.bandIndex,
      });

      //ログに登録
      this.createLog();

      this.$emit("close");
    },
    createLog() {
      const date = new Date();
      this.$store.dispatch("createLog", {
        user: this.user.name,
        content: this.date + this.time + "に「" + this.selected + "」を予約しました。",
        date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.reserve {
  margin-top: 55px;
}

.reserve-form {
  width: 70%;
  margin: auto;
}

.reserve-date {
  font-weight: 600;
}

.reserve-time {
  font-size: 28px;
  margin-top: 5px;
  font-weight: 600;
}

.reserve-band {
  margin-top: 35px;
}

.reserve-band-label {
  display: block;
  font-size: 16px;
}

.reserve-band-select-wrap {
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  &::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-right: solid 2px $color-main;
    border-bottom: solid 2px $color-main;
    transform: rotate(45deg);
    right: 15px;
    top: 18px;
  }
}

.reserve-band-select {
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 0 10px;
  border: none;
  border: solid 1px $color-main;
  border-radius: 8px;
  background-color: white;
  outline: none;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}

.reserve-button {
  margin-top: 100px;
}

.disable {
  opacity: 0.5;
}
</style>
