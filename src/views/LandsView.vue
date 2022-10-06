<script setup lang="ts">
import { ref } from "vue";
import IconButton from "../components/buttons/IconButton.vue";
import TransparentTextButton from "../components/buttons/TransparentTextButton.vue";
import LandStat from "../components/lands/LandStat.vue";
import LoginMenu from "../components/lands/LoginMenu.vue";
import { useThemeStore } from "../stores/theme";

const theme = useThemeStore();

const showLoginMenu = ref(false);
const handleLoginButtonClick = () =>
  (showLoginMenu.value = !showLoginMenu.value);
</script>

<template>
  <main :class="theme.theme">
    <section class="hero">
      <div class="login-button">
        <IconButton
          icon="globe"
          text="Login"
          :handleClick="handleLoginButtonClick"
        />

        <div
          v-if="showLoginMenu"
          @click="handleLoginButtonClick"
          class="background-blur"
        ></div>
        <LoginMenu v-if="showLoginMenu" />
      </div>

      <div class="branding">
        <span class="branding-text uppercase opacity-75">Welcome To</span>

        <div class="branding-logo">
          <img
            v-if="theme.theme === 'dark'"
            class="logo-icon"
            src="../assets/icons/sionland-logo.png"
            alt="SionLand Logo"
          />
          <img
            v-else
            class="logo-icon"
            src="../assets/icons/sionland-logo-purple.png"
            alt="SionLand Logo"
          />
          <span class="logo-text uppercase">SionLand</span>
        </div>
      </div>

      <div class="sion-links-showcase">
        <img
          v-if="theme.theme === 'dark'"
          src="@/assets/icons/large-globe-icon-transparent.png"
          alt="Globe Icon"
        />
        <img
          v-else
          src="@/assets/icons/large-globe-icon-transparent-purple.png"
          alt="Globe Icon"
        />

        <div class="page-links">
          <TransparentTextButton text="Sion Lands" keyword="explore" />
          <TransparentTextButton text="Air Balloons" keyword="explore" />
        </div>
      </div>

      <span class="general-statistics">General Statistics</span>

      <div class="sion-land-stats">
        <div class="land-stat-bar"></div>

        <div class="stats-cards">
          <LandStat keyword="total" text="auctions" value="05" />
          <LandStat keyword="total" text="auctions" value="05" />
          <LandStat keyword="total" text="auctions" value="05" />
          <LandStat keyword="total" text="auctions" value="05" />
        </div>

        <div class="land-stat-bar-alt land-stat-bar"></div>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  position: relative;

  @media (max-width: 768px) {
    //padding-left: 3.5rem;
  }
}
.hero {
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.6)),
    url("../assets/images/backgrounds/lands-hero-background.png") no-repeat
      center;
  background-size: cover;
}

.login-button {
  margin-left: auto;
  width: fit-content;
  padding-right: 2rem;
  padding-top: 2rem;

  @media (max-width: 768px) {
    & {
      margin: auto;
      padding-right: 0;
    }
  }
}

.branding {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  padding-bottom: 6rem;

  &-text {
    color: white;
  }

  &-logo {
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
      color: white;
    }

    img {
      width: 4rem;
    }
  }
}

.sion-links-showcase {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;

  .page-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.general-statistics {
  display: block;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-family: "Ubuntu";
  font-size: 1.2rem;
  color: #958686;
}

.sion-land-stats {
  display: flex;
  justify-content: center;
  align-items: center;

  .land-stat-bar {
    //width: 10rem;
    width: 16%;
    background: linear-gradient(
      92.64deg,
      rgba(188, 31, 219, 0.5) 1.1%,
      rgba(201, 0, 240, 0) 184.57%
    );
    height: 2.5rem;

    &-alt {
      background: linear-gradient(
        92.64deg,
        rgba(188, 31, 219, 0.5) 1.1%,
        rgba(201, 0, 240, 0) 184.57%
      );
    }
  }

  .stats-cards {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;

    @media (max-width: 1048px) {
      & {
        padding: 2%;
      }
      & > * {
        width: 46%;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}
.background-blur {
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: 0.3s ease;
  animation: fadeIn 0.3s;
  animation-fill-mode: forwards;
  z-index: 99;
}

.light {
  .hero {
    background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.9),
        rgba(255, 255, 255, 0.9)
      ),
      url("../assets/images/backgrounds/lands-hero-background.png") no-repeat
        center;
  }

  .branding {
    &-text {
      color: #141414;
    }

    &-logo {
      .logo-text {
        color: #141414;
      }
    }
  }

  .general-statistics {
    color: #505050;
  }
}
</style>
