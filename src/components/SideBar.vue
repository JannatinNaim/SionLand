<script lang="ts" setup>
import { ref } from "vue";
import SideBarMenuCategory from "./side-bar/SideBarMenuCategory.vue";

const isExpanded = ref(false);

const toggleMenu = () => (isExpanded.value = !isExpanded.value);

const links = [
  { label: "Lands", to: "/" },
  { label: "Air Balloons", to: "/" },
  { label: "Oracle", to: "/" },
];
</script>

<template>
  <aside
    class="flex flex-col overflow-hidden"
    :class="`${isExpanded && 'is-expanded'}`"
    @mouseenter="toggleMenu"
    @mouseleave="toggleMenu"
  >
    <div v-if="!isExpanded" class="logo">
      <img src="../assets/icons/sionland-logo.png" alt="SionLand Logo" />
    </div>
    <div v-else class="logo-expanded">
      <img
        class="logo-icon"
        src="../assets/icons/sionland-logo.png"
        alt="SionLand Logo"
      />
      <img
        class="logo-text"
        src="@/assets/icons/sionland-logo-text.png"
        alt="SionLand Text Logo"
      />
    </div>

    <div v-if="isExpanded" class="divider"></div>

    <div class="menu">
      <SideBarMenuCategory
        :isExpanded="isExpanded"
        title="Sion Lands"
        icon="globe"
        :links="links"
      />

      <SideBarMenuCategory
        :isExpanded="isExpanded"
        title="Docs"
        icon="document"
        :links="[links[2]]"
      />
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  background: linear-gradient(188.3deg, #0d0b0e 54.16%, #7c00c6 202.38%);
  width: calc(3rem + 32px);
  padding: 1rem;
  min-height: 100vh;

  color: white;

  transition: 0.2s ease-out;

  border: 2px solid;
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(
    83.38deg,
    rgba(188, 31, 219, 0) -5.28%,
    #100764 185.93%
  );

  @media (max-width: 768px) {
    position: fixed;
    z-index: 99;
  }

  .logo {
    margin-bottom: 1.5rem;

    img {
      width: 3rem;
    }
  }

  .logo-expanded {
    padding: 1.5rem;

    display: flex;

    .logo-icon {
      flex: 1;
    }

    .logo-text {
      flex: 3;
    }

    img {
      width: 1rem;
    }
  }

  &.is-expanded {
    width: 17rem;

    .menu {
      padding-left: 1.5rem;
    }
  }

  .divider {
    transition: 0.2s ease-out;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 50),
      rgba(0, 0, 0, 0)
    );
    margin-bottom: 1.5rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    padding-left: 0.2rem;
  }
}
</style>
