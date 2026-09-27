<template>
  <section class="hero">
    <div class="hero-surface">
      <v-container class="hero-container">
        <header class="hero-nav">
          <nuxt-link :to="localePath('/')" class="brand">
            <img src="../../assets/images/Logo-1.png" alt="Surely logo">
          </nuxt-link>
          <nav class="menu">
            <a href="#">{{ t.nav.home }}</a>
            <a href="#">{{ t.nav.about }}</a>
            <a href="#">{{ t.nav.features }}</a>
            <a href="#">{{ t.nav.how }}</a>
            <a href="#">{{ t.nav.resources }}</a>
          </nav>
        </header>

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

        <div class="hero-phones">
          <img src="../../assets/images/fullMobile.svg" alt="phone left" class="phone phone-left">
          <img src="../../assets/images/mobile.svg" alt="phone center" class="phone phone-center">
          <img src="../../assets/images/rightPhone.svg" alt="phone right" class="phone phone-right">
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
  background: linear-gradient(145deg, #1bbdc4 0%, #0f4d88 48%, #0d1d4b 100%);
  color: #fff;
}

.hero-container {
  min-height: 760px;
  position: relative;
  padding-top: 26px;
}

.hero-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .brand img {
    width: 168px;
    height: auto;
  }

  .menu {
    display: flex;
    gap: 30px;

    a {
      color: #d8f8ff;
      text-decoration: none;
      font-size: 14px;
    }
  }
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
    padding: 16px 12px 0;
  }

  .hero-container {
    min-height: auto;
    padding-bottom: 28px;
  }

  .hero-nav .menu {
    display: none;
  }

  .hero-content {
    margin-top: 40px;

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
