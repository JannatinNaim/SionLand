<script setup lang="ts">
defineProps<{
  text?: string;
  title?: string;
  handleClick?: (e: any) => void;
}>();
</script>

<template>
  <button
    :title="title"
    class="text-white text-sm uppercase font-black p-2 px-4"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
button {
  background: linear-gradient(
    92.64deg,
    rgba(174, 0, 177, 0.6) 1.1%,
    rgba(65, 9, 112, 0.6) 184.57%
  ) !important;
  border: 1px solid #ffffff;
  border-radius: 13px;
}
</style>
