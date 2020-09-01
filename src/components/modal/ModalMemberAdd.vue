<template>
  <div class="modal">
    <div class="modal-header">
      <div class="icon-arrow-wrap" @click="$emit('close')">
        <IconLeft class="icon-arrow" />
      </div>
      <p>メンバーを追加</p>
      <p class="icon-done" @click="$emit('done', selectedList)">完了</p>
    </div>
    <div class="modal-tab">
      <input class="modal-tab-search" type="text" placeholder="名前で検索" />
      <div class="modal-selected">
        <small class="modal-selected-label">選択中</small>
        <ul class="modal-selected-list">
          <li class="modal-selected-item" v-for="(user, index) in selectedList" :key="index">
            <SelectedUser :user="user" @remove="removeList(user)" />
          </li>
        </ul>
      </div>
    </div>
    <ul class="modal-member-list">
      <li class="modal-member-item" v-for="(user, index) in filteredUsers" :key="index">
        <MemberListItem :user="user" :selected="selected(user)" @handleList="handleList($event, user)" />
      </li>
    </ul>
  </div>
</template>

<script>
import IconLeft from "../icons/IconLeft";
import MemberListItem from "../parts/MemberListItem";
import SelectedUser from "../parts/SelectedUser";

import { mapState } from "vuex";

export default {
  data() {
    return {
      selectedList: []
    };
  },
  props: {
    currentMember: {
      type: Array
    },
    originMember: {
      type: Array
    }
  },
  components: {
    IconLeft,
    MemberListItem,
    SelectedUser
  },

  computed: {
    ...mapState({
      usersAll: state => state.usersAll
    }),
    filteredUsers() {
      //バンドに所属していないユーザーにフィルタリング

      //originMemberからidだけを抜き出す
      const idListMember = this.originMember.map(e => e.id);

      //このバンドに所属していないユーザーのみにフィルタリング
      const newList = this.usersAll.filter(e => idListMember.indexOf(e.id) == -1);

      return newList;
    },
    selected() {
      //selectedListに入っているかどうかで選択中かを判断（バツボタンでも消せるように）
      return function(user) {
        const idListMember = this.selectedList.map(e => e.id);
        return idListMember.indexOf(user.id) != -1;
      };
    }
  },
  created() {
    this.selectedList = [];
    const idListMember = this.originMember.map(e => e.id);
    this.selectedList = this.currentMember.filter(e => idListMember.indexOf(e.id) == -1);
    console.log(this.currentMember);
    console.log(this.selectedList);
  },
  methods: {
    //MemberListItemから返ってきた値に応じてリストに追加したり消したり
    handleList($event, user) {
      if ($event) {
        this.selectedList.push(user);
      } else {
        this.selectedList = this.selectedList.filter(e => e.id != user.id);
      }
    },
    removeList(user) {
      this.selectedList = this.selectedList.filter(e => e.id != user.id);
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: white;
  z-index: $z-member-add-modal;
}
.modal-header {
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: $height-global-header;
  box-shadow: 0 0 6px $color-shadow;
  z-index: $z-member-add-modal + 20;
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

.icon-done {
  position: absolute;
  right: 15px;
  width: 30px;
  font-size: 14px;
  color: $color-sub;
}

.modal-tab {
  position: fixed;
  width: 100%;
  height: 220px;
  padding: $height-global-header 20px 14px;
  background-color: $color-gray_4;
  box-shadow: 0 0 6px $color-shadow;
  z-index: $z-member-add-modal + 10;
}

.modal-tab-search {
  width: 100%;
  height: 40px;
  margin-top: 16px;
  border-radius: 5px;
  padding-left: 40px;
  background-color: $color-gray_3;
  background-image: url("~@/assets/images/svg/search.svg");
  background-repeat: no-repeat;
  background-position: left 10px center;
}

.modal-selected {
  margin: 5px 0 0 10px;
}

.modal-selected-label {
  font-size: 10px;
}

.modal-selected-list {
  display: flex;
  margin-top: 6px;
}

.modal-member-list {
  width: 100%;
  padding-top: $height-global-header + 180px;
}
</style>
