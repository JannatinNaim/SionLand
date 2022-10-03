<script lang="ts" setup>
defineProps<{
  keyword?: string;
  text?: string;
  value?: string;
}>();
</script>

<template>
  <div class="land-stat">
    <div class="text">
      <span class="text-white uppercase opacity-75">{{ keyword }}</span>
      <span class="text-white uppercase opacity-75">{{ text }}</span>
    </div>

    <span class="count text-white uppercase text-8xl">
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
  }

  .count {
    font-family: "Ailenrons", sans-serif;
    letter-spacing: -0.265em;
  }
}
</style>
