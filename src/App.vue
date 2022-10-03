<script setup lang="ts">
import { RouterView } from "vue-router";
import SideBar from "@/components/SideBar.vue";
</script>

<template>
  <div class="app">
    <SideBar />
    <RouterView />
  </div>
</template>

<style lang="scss">
.app {
  display: flex;

  main {
    flex: 1 1 0;
  }
}
</style>
