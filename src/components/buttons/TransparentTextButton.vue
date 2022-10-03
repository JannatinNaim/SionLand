<script setup lang="ts">
defineProps<{
  text?: string;
  title?: string;
  keyword?: string;
}>();
</script>

<template>
  <button :title="title" class="text-white text-sm uppercase p-2 px-4">
    <span class="font-light opacity-70" v-if="keyword">
      {{ keyword }}
    </span>
    &nbsp;
    <span class="font-black">
      {{ text }}
    </span>
  </button>
</template>

<style scoped lang="scss">
button {
  border: 1px solid rgba(174, 0, 177, 0.8);
  border-radius: 13px;
  transition: 0.2s ease-out;

  &:hover {
    background: rgba(174, 0, 177, 0.6);
  }
}
</style>
