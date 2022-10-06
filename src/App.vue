<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "@/components/SideBar.vue";
import { useThemeStore } from "./stores/theme";

const theme = useThemeStore();
</script>

<template>
  <div class="app">
    <SideBar />
    <RouterView />

    <font-awesome-icon
      v-if="theme.theme === 'dark'"
      class="theme-toggle"
      icon="fa-regular fa-moon"
      @click="theme.toggleTheme"
    />
    <font-awesome-icon
      v-else
      class="theme-toggle"
      icon="fa-solid fa-moon"
      @click="theme.toggleTheme"
    />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;

  main {
    flex: 1 1 0;
  }
}

.theme-toggle {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 0.6rem;
  padding: 0.2rem;
  color: $primary-color;
  border: 1px solid $primary-color;
  opacity: 0.6;

  &:hover {
    cursor: pointer;
  }
}
</style>
