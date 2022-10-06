<script lang="ts" setup>
import { useThemeStore } from "../../stores/theme";

const theme = useThemeStore();

defineProps<{
  keyword?: string;
  text?: string;
  value?: string;
}>();
</script>

<template>
  <div :class="theme.theme" class="land-stat">
    <div class="text font-bold">
      <span class="uppercase opacity-75">{{ keyword }}</span>
      <span class="uppercase opacity-75">{{ text }}</span>
    </div>

    <span class="count uppercase text-8xl">
      {{ value || 0 }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.land-stat {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .text {
    display: flex;
    flex-direction: column;
    font-family: "Ubuntu";
    color: white;
  }

  .count {
    font-family: "Ailenrons", sans-serif;
    letter-spacing: -0.265em;
    color: white;
  }
}

.light {
  .text {
    color: #141414;
  }

  .count {
    color: #141414;
  }
}
</style>
