<template>
  <div class="regular">
    <ol class="time-bar">
      <li class="time-bar-item" v-for="(time, index) in times" :key="index">{{ time }}</li>
    </ol>
    <ul class="regular-table">
      <li class="day-list" v-for="(band, index) in bandData" :key="index">
        <small
          :class="{
            sunday: index == 0,
            saturday: index == 6,
            'has-border-short': index != 6
          }"
        >{{ band.day }}</small>
        <ul class="band-list" :class="{ 'has-border-right': index != 6 }">
          <li
            class="band-list-item"
            v-for="(bandName, index) in band.bands"
            :key="index"
          >{{ filteredBandName(bandName) }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: ["9:00", "11:00", "13:00", "15:00", "17:00", "18:30", "20:00"],

      bandData: [
        {
          day: "日",
          bands: ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
        },
        {
          day: "月",
          bands: ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
        },
        {
          day: "火",
          bands: ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
        },
        {
          day: "水",
          bands: ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
        },
        {
          day: "木",
          bands: ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
        },
        {
          day: "金",
          bands: ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "Snit Nit", "おつも"],
        },
        {
          day: "土",
          bands: ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
        },
      ],
    };
  },
  computed: {
    filteredBandName() {
      return function (bandName) {
        if (bandName === "") return "（空）";
        else if (bandName === "_") return "ー";
        else return bandName;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.regular {
  padding-top: $height-global-header;
  display: flex;
  overflow: auto;
}

.time-bar {
  width: 42px;
  /* （ヘッダー + フッター）を引く */
  height: calc(100vh - (#{$height-global-header} + #{$height-global-footer}));
  display: block;
  position: fixed;
  left: 0;
  background-color: white;
  list-style: none;
  text-align: center;
  padding: 40px 0 30px;
  z-index: $z-bar;
}

.time-bar-item {
  width: 100%;
  height: calc(100% / 6);
  font-size: 8px;
}

.regular-table {
  height: calc(100vh - (#{$height-global-header} + #{$height-global-footer}));
  padding-left: 42px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  list-style: none;
}

.day-list {
  width: 180px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
}

.sunday {
  color: $color-red;
}

.saturday {
  color: $color-blue;
}

.day-list small {
  width: 100%;
  height: 40px;
  padding-top: 7px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.has-border-short::after {
  content: "";
  border-right: solid 0.5px $color-gray_2;
  height: 40%;
  position: absolute;
  right: 0;
}

.band-list {
  width: 100%;
  height: calc(100% - 40px);
  /* 余白の合計は30 */
  margin-top: 7px;
  padding-bottom: 23px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  align-content: flex-start;
}

.has-border-right {
  border-right: solid 1px $color-gray_2;
}

.band-list-item {
  width: 50%;
  height: calc(100% / 6);
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  text-align: center;
  overflow: hidden;
  border-top: solid 1px $color-gray_2;
  position: relative;
}

.band-list-item:nth-last-child(-n + 2) {
  border-bottom: solid 1px $color-gray_2;
}

.band-list-item:nth-child(2n + 1)::after {
  content: "";
  border-right: solid 0.5px $color-gray_2;
  height: 80%;
  position: absolute;
  right: 0;
}
</style>
