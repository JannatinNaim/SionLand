<script setup lang="ts">
import GlobeIcon from "@/assets/icons/globe-icon.png";

type iconType = "globe";
defineProps<{
  text?: string;
  title?: string;
  icon: iconType;
  iconAlt?: string;
  handleClick?: (e: any) => void;
}>();

const getButtonIcon = (type: iconType) => {
  switch (type) {
    case "globe":
      return GlobeIcon;
  }
};
</script>

<template>
  <button
    :title="title"
    class="text-white text-sm uppercase font-black p-2 px-6"
    @click="handleClick"
  >
    <img :src="getButtonIcon(icon)" :alt="iconAlt" />
    <span>
      {{ text }}
    </span>
  </button>
</template>

<style scoped lang="scss">
button {
  border: 1px solid #bc1fdb;
  border-radius: 13px;

  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease-out;

  &:hover {
    box-shadow: 0px 0px 23px #bc1fdb;
    background: linear-gradient(
      92.64deg,
      rgba(174, 0, 177, 0.6) 1.1%,
      rgba(65, 9, 112, 0.6) 184.57%
    );
  }
}
</style>
