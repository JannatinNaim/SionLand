<script setup lang="ts">
import MetaMaskLogo from "@/assets/icons/metamask-logo.png";
import WalletConnectLogo from "@/assets/icons/wallet-connect-logo.png";

type iconType = "metamask" | "wallet-connect";
defineProps<{
  icon: iconType;
  iconAlt?: string;
  text?: string;
  title?: string;
}>();

const getIcon = (type: iconType) => {
  switch (type) {
    case "metamask":
      return MetaMaskLogo;
    case "wallet-connect":
      return WalletConnectLogo;
  }
};
</script>

<template>
  <button :title="title" class="text-white text-sm uppercase p-6">
    <img :src="getIcon(icon)" :alt="iconAlt" />

    <span class="text font-black">
      {{ text }}
    </span>
  </button>
</template>

<style scoped lang="scss">
button {
  border: 1px solid rgba(174, 0, 177, 0.8);
  border-radius: 13px;
  transition: 0.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  img {
    height: 6rem;
    display: block;
  }

  &:hover {
    background: rgba(174, 0, 177, 0.6);
    box-shadow: 0px 0px 23px #bc1fdb;
  }

  .text {
    font-size: 14px;
  }
}
</style>
