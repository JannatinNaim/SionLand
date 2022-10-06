<script setup lang="ts">
import { useThemeStore } from "../../stores/theme";
const theme = useThemeStore();

defineProps<{
  text?: string;
  title?: string;
  handleClick?: (e: any) => void;
}>();
</script>

<template>
  <button
    :title="title"
    :class="theme.theme"
    class="text-xs md:text-sm uppercase font-black p-1 px-3 md:p-2 md:px-4"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
button {
  border: 1px solid #bc1fdb;
  border-radius: 13px;

  &:hover {
    box-shadow: 0px 0px 23px #bc1fdb;
    background: linear-gradient(
      92.64deg,
      rgba(174, 0, 177, 0.6) 1.1%,
      rgba(65, 9, 112, 0.6) 184.57%
    );
  }
}

.dark {
  color: white;
}

.light {
  color: #141414;

  &:hover {
    color: white;
  }
}
</style>
