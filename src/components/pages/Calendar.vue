<template>
  <div class="cal">
    <div class="cal-header">
      <div class="cal-header-arrow" @click="setLastMonth()">
        <IconLeft v-if="month != 4" class="arrow-icon" />
      </div>
      <p class="selected-month">{{ year }}年{{ month }}月</p>
      <div class="cal-header-arrow" @click="setNextMonth()">
        <IconRight v-if="month != 3" class="arrow-icon" />
      </div>
    </div>
    <table id="cal-main">
      <thead>
        <th v-for="(dayname, index) in weekdays" :key="index">{{ dayname }}</th>
      </thead>
      <tbody>
        <tr v-for="(weekData, index) in calData" :key="index">
          <td
            class="cal-day"
            v-for="(dayNum, index) in weekData"
            :key="index"
            @click="dateClick(dayNum)"
          >
            <p
              class="day-num"
              :class="[
                {
                  'cal-today': isToday(dayNum),
                  sunday: index % 7 == 0,
                  saturday: index % 7 == 6,
                  'has-myband':hasMyBand(dayNum)
                },
                checkDayState(dayNum)
              ]"
              @click="openDayModal(year, month, dayNum, index)"
            >{{ dayNum }}</p>
          </td>
        </tr>
      </tbody>
    </table>
    <CalendarDayModal
      @close="closeDayModal"
      v-if="isOpenDayModal"
      :dateArray="modalHeaderDate"
      :bands="modalBands"
    />
  </div>
</template>

<script>
import IconLeft from "../icons/IconLeft";
import IconRight from "../icons/IconRight";
import CalendarDayModal from "../modal/CalendarDayModal";
import { mapState } from "vuex";

export default {
  components: {
    IconLeft,
    IconRight,
    CalendarDayModal,
  },
  data() {
    return {
      weekdays: ["日", "月", "火", "水", "木", "金", "土"],
      year: 0,
      month: 0,
      day: -1, //選択するまで非表示
      today: "",

      isOpenDayModal: false,
      modalHeaderDate: [4], //年、月、日、曜日の列（num,num,num,str）
      modalBands: [],

      //日付の色分けクラス
      hasSpace: "hasSpace",
      full: "full",
    };
  },
  created() {
    const date = new Date();
    let y = date.getFullYear();
    let m = ("0" + (date.getMonth() + 1)).slice(-2);
    let d = ("0" + date.getDate()).slice(-2);

    this.year = y;
    this.month = Number(m);
    this.today = y + "-" + m + "-" + d;
  },
  methods: {
    setLastMonth: function () {
      if (this.month == 1) {
        this.year--;
        this.month = 12;
      } else {
        this.month--;
      }
      this.day = -1;
    },
    setNextMonth: function () {
      if (this.month == 12) {
        this.year++;
        this.month = 1;
      } else {
        this.month++;
      }
      this.day = -1;
    },
    dateClick: function (dayNum) {
      if (dayNum !== "") {
        this.day = dayNum;
      }
    },
    isToday: function (day) {
      let date = this.year + "-" + ("0" + this.month).slice(-2) + "-" + ("0" + day).slice(-2);
      // console.log(date);
      // console.log(this.today);

      if (this.today === date) {
        return true;
      }
      return false;
    },

    openDayModal(year, month, day, index) {
      this.modalHeaderDate = [year, month, day, this.weekdays[index % 7]];
      //数字のないところはクリックしても反応しない
      if (day !== "") {
        this.modalBands = this.calBands[this.monthIndex()].data[day - 1];
        this.isOpenDayModal = true;
      }
    },
    closeDayModal() {
      this.isOpenDayModal = false;
    },
    monthIndex() {
      //4月〜12月を0〜11に
      let monthIndex = this.month;
      if (monthIndex <= 3) monthIndex += 8;
      else monthIndex -= 4;

      return monthIndex;
    },
  },

  computed: {
    ...mapState({
      calBands: (state) => state.calendar,
      myBands: (state) => state.user.bands,
    }),
    calData: function () {
      // console.log(this.year + "-" + this.month + "のデータ作成");
      let calData = [];
      let firstWeekDay = new Date(this.year, this.month - 1, 1).getDay();
      let lastDay = new Date(this.year, this.month, 0).getDate();
      let dayNum = 1;

      while (dayNum <= lastDay) {
        let weekData = [];

        for (let i = 0; i < 7; i++) {
          // 1日より前は空文字
          if (calData.length === 0 && i < firstWeekDay) {
            weekData[i] = "";
            // 最終日以降も空文字
          } else if (lastDay < dayNum) {
            weekData[i] = "";
          } else {
            weekData[i] = dayNum;
            dayNum++;
          }
        }

        calData.push(weekData);
      }
      return calData;
    },
    checkDayState() {
      return function (dayNum) {
        if (dayNum === "") return; //何もない日はスルー

        const dayBands = this.calBands[this.monthIndex()].data[dayNum - 1];

        let hasSpace = false;
        let hasMyBand = false;

        for (let i = 0; i < dayBands.length; i++) {
          for (let j = 0; j < Object.keys(this.myBands).length; j++) {
            if (dayBands[i] === this.myBands[j].name) hasMyBand = true;
          }
          if (dayBands[i] === "") hasSpace = true;
        }

        if (hasSpace && !hasMyBand) return "has-space";
        else if (hasSpace && hasMyBand) return "has-space has-myband";
        else if (!hasSpace && hasMyBand) return "full has-myband";
        else return "full";
      };
    },
    hasMyBand() {
      return function (dayNum) {
        if (dayNum === "") return; //何もない日はスルー
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.cal {
  padding-top: $height-global-header;
}

.cal-header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.cal-header-arrow {
  width: 24px;
}

.arrow-icon {
  width: 100%;
  height: auto;
}

.selected-month {
  font-size: 18px;
  transform: translateY(-3px);
}

#cal-main {
  width: 96%;
  table-layout: fixed;
  margin: auto;
}
#cal-main th {
  text-align: center;
  vertical-align: middle;
  font-size: 12px;
  font-weight: 400;
}

#cal-main th:first-child {
  color: $color-red;
}

#cal-main th:last-child {
  color: $color-blue;
}

#cal-main tr {
  height: 10.8vh;
}

.cal-day {
  width: 100%;
}

.day-num {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  border-radius: 50%;
  font-size: 12px;
  position: relative;
}

.sunday {
  color: $color-red;
}

.saturday {
  color: $color-blue;
}

.cal-today {
  position: relative;
  font-weight: 600;
  &::after {
    content: "";
    border-bottom: solid 2px $color-main;
    border-radius: 1px;
    width: 16px;
    position: absolute;
    bottom: 7px;
  }
}

.full {
  background-color: $color-gray_3;
}

.has-myband {
  position: relative;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: $color-main;
    position: absolute;
    top: 2px;
    right: 2px;
  }
}

.has-space {
  background-color: white;
}
</style>
