<template>
  <div class="log">
    <LogItem v-for="(log, index) in $store.state.logs" :key="index" :log="log" />
  </div>
</template>

<script>
import LogItem from "../parts/LogItem";
export default {
  components: {
    LogItem
  }
};
</script>

<style scoped>
.log {
  list-style: none;
  padding: 80px 20px 20px;
}
</style>
