<script lang="ts" setup>
import { ref } from "vue";
import SideBarMenuCategory from "./side-bar/SideBarMenuCategory.vue";

const isExpanded = ref(false);

const toggleMenu = () => (isExpanded.value = !isExpanded.value);

const links = [
  { label: "Lands", to: "/lands" },
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
    <RouterLink to="/">
      <div v-if="!isExpanded" class="logo">
        <img src="../assets/icons/sionland-logo.png" alt="SionLand Logo" />
      </div>
      <div v-else class="logo-expanded">
        <img
          class="logo-icon"
          src="../assets/icons/sionland-logo.png"
          alt="SionLand Logo"
        />
        <span class="logo-text uppercase">SionLand</span>
      </div>
    </RouterLink>

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

    <div class="footer-branding">
      <img
        class="brand-logo"
        src="@/assets/icons/sionland-logo.png"
        alt="SionLand Logo"
      />

      <p v-if="isExpanded" class="text uppercase text-white">
        Decentralized <br />
        GeoData <br />
        For Multiverse
      </p>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
aside {
  position: relative;
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
    //padding: 1.5rem;
    padding-bottom: 1.5rem;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    .logo-icon {
      flex: 2;
    }

    .logo-text {
      flex: 1;
      font-size: 2.2rem;
      font-family: "Ailenrons";
    }

    img {
      width: 1rem;
    }
  }

  &.is-expanded {
    width: 17rem;
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

.footer-branding {
  position: absolute;
  bottom: 0;
  width: 100%;

  .brand-logo {
    position: absolute;
    bottom: 7rem;
    left: -9rem;
    opacity: 0.4;
    width: 18rem;

    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    animation-name: spin;
    animation-duration: 15000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .text {
    padding-bottom: 1rem;
    padding-left: 2rem;

    font-weight: 700;
    font-size: 14px;
    line-height: 13px;
    letter-spacing: 0.115em;
  }
}
</style>
