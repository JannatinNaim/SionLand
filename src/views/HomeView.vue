<script setup lang="ts">
import TextButton from "../components/buttons/TextButton.vue";
</script>

<template>
  <main>
    <section class="hero">
      <div class="live-button">
        <TextButton text="Private Presale is live" />
      </div>

      <div class="branding-logo py-8">
        <img
          src="@/assets/icons/sionland-logo-purple.png"
          alt="SionLand Logo Purple"
        />
        <img
          src="@/assets/icons/sionland-logo-text.png"
          alt="SionLand Logo Text"
        />
      </div>

      <h1 class="catchphrase flex flex-col items-start lg:items-center py-32">
        <div class="sub-heading text-1xl md:text-2xl">
          <span class="text-white font-bold">DECENTRALIZED GEODATA&nbsp;</span>
          <span class="text-white opacity-50 font-thin">FOR</span>
        </div>

        <span class="heading font-bold text-5xl md:text-6xl lg:text-8xl"
          >MULTIVERSE</span
        >
      </h1>

      <a class="ecosystem-link flex items-center justify-center gap-2" href="#">
        <span class="text-white opacity-75">ENTER THE GEO DATA ECOSYSTEM</span>
        <img
          src="@/assets/icons/right-triangle-icon.svg"
          alt="Right Triangle Icon"
        />
      </a>
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
  height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.1)),
    url("../assets/images/backgrounds/home-hero-background.png") no-repeat
      center;
}

.live-button {
  margin-left: auto;
  width: fit-content;

  @media (max-width: 768px) {
    & {
      margin: auto;
    }
  }
}

.branding-logo {
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
  }

  @media (max-width: 768px) {
    img {
      height: 6rem;
    }
  }
}

.catchphrase {
  font-family: "Ubuntu", sans-serif;

  .heading {
    background: linear-gradient(91.11deg, #dd00c7 -2.41%, #5a00cd 125.3%);
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .sub-heading {
    letter-spacing: 0.6rem;
  }
}

.ecosystem-link {
  span {
    letter-spacing: 0.6rem;
  }
}
</style>
