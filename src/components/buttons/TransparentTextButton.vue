<script setup lang="ts">
import { useThemeStore } from "../../stores/theme";

const theme = useThemeStore();

defineProps<{
  text?: string;
  title?: string;
  keyword?: string;
}>();
</script>

<template>
  <button
    :class="theme.theme"
    :title="title"
    class="text-sm uppercase p-2 px-4"
  >
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
  color: white !important;

  &:hover {
    background: rgba(174, 0, 177, 0.6);
  }
}

button.light {
  background: rgba(29, 0, 34, 0.8);
  border: 0.5px solid rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);

  &:hover {
    background: #bc1fdb;
    border: 0.5px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0px 0px 24px rgba(188, 31, 219, 0.5);
  }
}
</style>
