<template>
  <section class="hero">
    <div class="hero-surface">
      <v-container class="hero-container">
        <div class="hero-content">
          <h1>{{ t.hero.title }}</h1>
          <p>{{ t.hero.description }}</p>
          <div class="cta-group">
            <v-btn class="cta-primary" x-large>{{ t.hero.ctaPrimary }}</v-btn>
            <v-btn class="cta-secondary" outlined x-large>
              <v-icon small class="mr-2">mdi-play</v-icon>
              {{ t.hero.ctaSecondary }}
            </v-btn>
          </div>
        </div>
      </v-container>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FigmaShowcaseHeroSection',
  computed: {
    t() {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 24px 18px 0;
}

.hero-surface {
  border-radius: 16px;
  overflow: hidden;
  background-image: url('../../assets/images/new-landing/BG.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}

.hero-container {
  min-height: 760px;
  position: relative;
  padding-top: 12px;
}

.hero-content {
  margin: 82px auto 0;
  max-width: 860px;
  text-align: center;

  h1 {
    font-size: 56px;
    font-weight: 700;
    line-height: 1.18;
    margin-bottom: 18px;
  }

  p {
    font-size: 18px;
    color: #d7f4f8;
    line-height: 1.7;
    margin-bottom: 28px;
  }
}

.cta-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

.cta-primary {
  background: #fff !important;
  color: #0b2448 !important;
  text-transform: none !important;
  border-radius: 12px !important;
  font-weight: 700;
}

.cta-secondary {
  border-color: #b4f3ff !important;
  color: #fff !important;
  text-transform: none !important;
  border-radius: 12px !important;
}

.hero-phones {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  width: min(100%, 1100px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 26px;
}

.phone {
  object-fit: contain;
  filter: drop-shadow(0 22px 32px rgba(0, 0, 0, 0.28));
}

.phone-left,
.phone-right {
  width: 260px;
  opacity: 0.95;
}

.phone-center {
  width: 310px;
}

@media (max-width: 1263px) {
  .hero-container {
    min-height: 700px;
  }

  .hero-content h1 {
    font-size: 44px;
  }

  .phone-left,
  .phone-right {
    width: 210px;
  }

  .phone-center {
    width: 250px;
  }
}

@media (max-width: 959px) {
  .hero {
    padding: 0 10px 0;
  }

  .hero-surface {
    border-radius: 0 0 18px 18px;
  }

  .hero-container {
    min-height: auto;
    padding-top: calc(72px + env(safe-area-inset-top, 0px));
    padding-bottom: 28px;
  }

  .hero-content {
    margin-top: 16px;

    h1 {
      font-size: 34px;
    }

    p {
      font-size: 15px;
    }
  }

  .cta-group {
    flex-direction: column;

    .v-btn {
      width: 100%;
      max-width: 280px;
    }
  }

  .hero-phones {
    margin-top: 24px;
    position: static;
    transform: none;
    width: 100%;
    gap: 10px;
  }

  .phone-left,
  .phone-right {
    display: none;
  }

  .phone-center {
    width: min(100%, 260px);
  }
}
</style>
