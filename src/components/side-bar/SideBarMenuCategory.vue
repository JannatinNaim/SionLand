<script lang="ts" setup>
import { ref, toRefs, watch } from "vue";

import GlobeIcon from "../../assets/icons/globe-icon.png";
import DocumentIcon from "../../assets/icons/document-icon.png";

type iconType = "globe" | "document";
const props = defineProps<{
  isExpanded: boolean;
  icon: iconType;
  iconAlt?: string;
  title?: string;
  links?: { label: string; to: string }[];
}>();

const { isExpanded } = toRefs(props);

const getIcon = (type: iconType) => {
  switch (type) {
    case "globe":
      return GlobeIcon;
    case "document":
      return DocumentIcon;
  }
};

const isToggled = ref(false);
const toggleClick = () => (isToggled.value = !isToggled.value);

watch(isExpanded, () => {
  if (!isExpanded.value) {
    isToggled.value = false;
  }
});
</script>

<template>
  <div class="menu-section" @click="toggleClick">
    <div class="menu-section-icon">
      <img :src="getIcon(icon)" :alt="iconAlt" />
    </div>

    <div class="menu-section-list" v-if="isExpanded">
      <div class="menu-section-list-toggle">
        <span class="text uppercase list-title">{{ title }}</span>
        <img
          :class="`${isToggled && 'is-toggled'} toggle-icon`"
          src="@/assets/icons/left-triangle-icon-filled.svg"
          alt="Toggle Icon"
        />
      </div>
    </div>
  </div>

  <nav :class="`${isToggled && 'expand'} collapsed menu-items`">
    <template v-for="(link, index) in links" :key="index">
      <RouterLink class="menu-item" :to="link.to">{{ link.label }}</RouterLink>
    </template>
  </nav>
</template>

<style lang="scss" scoped>
.menu-section {
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: 0.2s ease-out;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }

  &-icon {
    border: 1px solid #ffffff55;
    border-radius: 12px;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 1.4rem;
    }
  }

  &-list {
    width: 100%;
    &-toggle {
      padding: 0.4rem;
      padding-right: 1rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: space-between;

      background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))
          padding-box,
        linear-gradient(to right, rgba(0, 0, 0, 0.1), #ffffff55) border-box;
      border-radius: 12px;
      border: 1px solid transparent;

      img {
        height: 1rem;
      }

      .toggle-icon {
        transition: 0.2s ease-out;
      }
    }
  }

  .is-toggled {
    transform: rotate(-90deg);
  }
}

.menu-items {
  transition: 0.2s ease-out;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .menu-item {
    padding-left: 4rem;
    transition: 0.2s ease-out;
    border-radius: 1rem;

    &:hover {
      background: linear-gradient(
        270.08deg,
        #470256 0%,
        rgba(71, 2, 86, 0) 99.87%
      );
      font-weight: bold;
      padding-left: 4.2rem;
    }
  }
}

.collapsed {
  height: 0px;
  overflow: hidden;
  transition: 0.2s ease-out;
}
.expand {
  //height: 100%;
  height: fit-content;
  transition: 0.2s ease-out;
}
</style>
