<template>
  <button
    :class="{ purpul: color === 'main', orange: color === 'sub' }"
    @click.prevent="$emit('save')"
  >{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  width: 250px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 25px;
  margin: 0 auto;
  color: white;
  font-size: 16px;
}

.purpul {
  background-color: $color-main;
}

.orange {
  background-color: $color-sub;
}
</style>
