import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "軽音太郎",
      nickname: "けいおん太郎",
      grade: 4,
      bands: [
        {
          id: 1,
          name: "AGOHIGE",
          member: [
            { id: 1, name: "ユーザー1" },
            { id: 2, name: "ユーザー2" },
            { id: 3, name: "ユーザー3" }
          ]
        },
        {
          id: 2,
          name: "SnitNit",
          member: [
            { id: 4, name: "ユーザー4" },
            { id: 5, name: "ユーザー5" },
            { id: 6, name: "ユーザー6" }
          ]
        }
      ]
    },
    calendar: [
      {
        id: "2020_04",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンド"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"]
        ]
      },
      {
        id: "2020_05",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""]
        ]
      },
      {
        id: "2020_06",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""]
        ]
      },
      {
        id: "2020_07",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"]
        ]
      },
      {
        id: "2020_08",
        data: [
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""]
        ]
      },
      {
        id: "2020_09",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""]
        ]
      },
      {
        id: "2020_10",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""]
        ]
      },
      {
        id: "2020_11",
        data: [
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""]
        ]
      },
      {
        id: "2020_12",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"]
        ]
      },
      {
        id: "2021_01",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""]
        ]
      },
      {
        id: "2021_02",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""]
        ]
      },
      {
        id: "2021_03",
        data: [
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "マルハチ", "", "えんぷてい", "バンドしよ"],
          ["_", "_", "_", "_", "_", "_", "_", "_", "scarlet umber", "髭男", "SnitNit", "おつも"],
          ["KABE-BOON", "", "Yeli", "", "", "", "はるはる", "", "かまぼこ", "Hakubi", "かしま", ""],
          ["よん", "", "未定", "", "bremen", "", "Man 2 Bithcers", "", "AGOHIGE", "", "somewhat", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "牛タンタン", "", "Tempora r y", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "flower children", "PR4YERs", "こんぺいとう", ""],
          ["_", "_", "_", "_", "_", "_", "_", "_", "LAMP IN TERREN", "", "Esprimo", ""]
        ]
      }
    ],
    logs: [{ user: "ユーザー名", content: "テスト", date: "2020/7/10" }],
    usersAll: [
      { id: 1, name: "ユーザー1" },
      { id: 2, name: "ユーザー2" },
      { id: 3, name: "ユーザー3" },
      { id: 4, name: "ユーザー4" },
      { id: 5, name: "ユーザー5" },
      { id: 6, name: "ユーザー6" },
      { id: 7, name: "ユーザー7" },
      { id: 8, name: "ユーザー8" },
      { id: 9, name: "ユーザー9" }
    ]
  },
  mutations: {
    setUserInfo(state, user) {
      state.user = user;
    },
    setNickName(state, name) {
      state.user.nickname = name;
    },
    setCalendarBand(state, { bandName, monthIndex, dayIndex, bandIndex }) {
      state.calendar[monthIndex].data[dayIndex][bandIndex] = bandName;
    },
    deleteCalendarBand(state, { monthIndex, dayIndex, bandIndex }) {
      state.calendar[monthIndex].data[dayIndex][bandIndex] = "";
    },
    createLog(state, { user, content, date }) {
      const log = { user: user, content: content, date: date };
      state.logs.unshift(log);
    },
    setBandInfo(state, { id, bandName, member }) {
      const band = state.user.bands.find(e => e.id == id);
      band.name = bandName;
      band.member = member;
    },
    leaveBand(state, id) {
      state.user.bands = state.user.bands.filter(e => e.id != id);
    }
  },
  actions: {
    // async getUserInfo(context) {
    //   const url = "";
    //   const res = await axios.get(url);

    //   context.commit("setUserInfo", res);
    // },
    setNickName(context, name) {
      context.commit("setNickName", name);
    },
    setCalendarBand(context, { bandName, monthIndex, dayIndex, bandIndex }) {
      context.commit("setCalendarBand", {
        bandName: bandName,
        monthIndex: monthIndex,
        dayIndex: dayIndex,
        bandIndex: bandIndex
      });
    },
    deleteCalendarBand(context, { monthIndex, dayIndex, bandIndex }) {
      context.commit("deleteCalendarBand", {
        monthIndex: monthIndex,
        dayIndex: dayIndex,
        bandIndex: bandIndex
      });
    },
    createLog(context, { user, content, date }) {
      context.commit("createLog", { user, content, date });
    },
    setBandInfo(context, { id, bandName, member }) {
      context.commit("setBandInfo", { id: id, bandName: bandName, member: member });
    },
    leaveBand(context, id) {
      context.commit("leaveBand", id);
    }
  },
  modules: {}
});
