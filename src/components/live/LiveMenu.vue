<script lang="ts" setup>
import TransparentTextButton from "../buttons/TransparentTextButton.vue";
import { useThemeStore } from "../../stores/theme";

const theme = useThemeStore();
</script>

<template>
  <div :class="theme.theme" class="popup p-2">
    <span class="heading font-light uppercase text-center block p-2"
      >Please Select</span
    >

    <div class="buttons px-4 py-2 pb-8 gap-2">
      <TransparentTextButton text="Founder" />
      <TransparentTextButton text="Team" />
      <TransparentTextButton text="Advisor" />
      <TransparentTextButton text="Influencer" />
      <TransparentTextButton text="Legendary Platinum" />
      <TransparentTextButton text="Legendary Gold" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    272.63deg,
    rgba(8, 0, 10, 0.8) -46.57%,
    rgba(13, 0, 16, 0.8) 105.64%
  );
  border: 0.5px solid #ffffff;
  backdrop-filter: blur(6px);
  border-radius: 30px;
  z-index: 99;
  min-width: 300px;
  transition: 0.3s ease;

  animation: fadeIn 0.3s;
  animation-fill-mode: forwards;

  .heading {
    font-family: "Ubuntu";
    color: white;
  }

  .buttons {
    display: flex;
    flex-direction: column;
  }
}

.light {
  background: linear-gradient(
    86.47deg,
    rgba(255, 255, 255, 0.8) 10.9%,
    rgba(247, 193, 255, 0.8) 109.15%
  );
  border: 1px solid #bc1fdb;
  backdrop-filter: blur(6px);

  .heading {
    color: #141414;
    font-weight: bold;
  }
}
</style>
