<script lang="ts" setup>
import TransparentIconTextButton from "../buttons/TransparentIconTextButton.vue";
import { useThemeStore } from "../../stores/theme";

const theme = useThemeStore();
</script>

<template>
  <div :class="theme.theme" class="popup p-2">
    <span class="title font-black uppercase text-center block p-2">Login</span>

    <div class="buttons p-8 py-2 pb-8 gap-2">
      <TransparentIconTextButton text="MetaMask" icon="metamask" />
      <TransparentIconTextButton text="Wallet Connect" icon="wallet-connect" />
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
  border-radius: 50px;
  z-index: 99;
  max-width: 500px;
  transition: 0.3s ease;

  @media (max-width: 768px) {
    top: 55vh;
    transform: translate(-50%, -35vh);
    max-width: 80%;
    min-width: 16rem;
  }

  animation: fadeIn 0.3s;
  animation-fill-mode: forwards;

  font-family: "Ubuntu";

  .title {
    color: white;
  }

  .buttons {
    display: flex;

    & > * {
      width: 50%;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      & > * {
        width: 100%;
      }
    }
  }
}

.light {
  background: linear-gradient(
      86.47deg,
      rgba(255, 255, 255, 0.8) 10.9%,
      rgba(247, 193, 255, 0.8) 109.15%
    ),
    linear-gradient(
      272.63deg,
      rgba(8, 0, 10, 0.8) -46.57%,
      rgba(13, 0, 16, 0.8) 105.64%
    );
  border: 0.5px solid #bc1fdb;

  .title {
    color: #1a1a1a;
  }
}
</style>
