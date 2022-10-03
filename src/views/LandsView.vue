<script setup lang="ts">
import IconButton from "../components/buttons/IconButton.vue";
import TextButton from "../components/buttons/TextButton.vue";
import TransparentTextButton from "../components/buttons/TransparentTextButton.vue";
import LandStat from "../components/lands/LandStat.vue";
</script>

<template>
  <main>
    <section class="hero">
      <div class="login-button">
        <IconButton icon="globe" text="Login" />
      </div>

      <div class="branding">
        <span class="branding-text text-white uppercase opacity-75"
          >Welcome To</span
        >

        <div class="branding-logo">
          <img
            src="@/assets/icons/sionland-logo-text.png"
            alt="SionLand Logo Text"
            class="logo-text"
          />
        </div>
      </div>

      <div class="sion-links-showcase">
        <img
          src="@/assets/icons/large-globe-icon-transparent.png"
          alt="Globe Icon"
        />

        <div class="page-links">
          <TransparentTextButton text="Sion Lands" keyword="explore" />
          <TransparentTextButton text="Air Balloons" keyword="explore" />
        </div>
      </div>

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
  @media (max-width: 768px) {
    padding-left: 5rem;
  }
}
.hero {
  min-height: 100vh;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
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
  }

  &-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 14rem;

    .logo-icon {
      width: 3.6rem;
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
</style>
