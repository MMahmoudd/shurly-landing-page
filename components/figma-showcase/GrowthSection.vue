<template>
  <section :class="['growth', { 'is-rtl': isRtl }]">
    <v-container class="growth-container">
      <v-row class="growth-row" align="center" no-gutters>
        <v-col cols="12" md="5" class="growth-content">
          <h2>{{ t.growth.title }}</h2>
          <p class="growth-description">{{ t.growth.description }}</p>
          <div class="store-buttons">
            <img src="../../assets/images/l-google-btn.svg" alt="Google Play" loading="lazy" decoding="async" width="168" height="50">
            <img src="../../assets/images/l-apple-btn.svg" alt="App Store" loading="lazy" decoding="async" width="168" height="50">
          </div>
          <!-- <div class="stats">
            <div v-for="(stat, i) in t.growth.stats" :key="`stat-${i}`">
              <p class="stat-label">{{ stat.label }}</p>
              <h4>{{ stat.value }}</h4>
            </div>
          </div> -->
        </v-col>
        <v-col cols="12" md="7" class="growth-media">
          <img
            class="growth-photo"
            src="../../assets/images/new-landing/download-img.svg"
            alt=""
            loading="lazy"
            decoding="async"
            width="900"
            height="680"
          >
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FigmaShowcaseGrowthSection',
  computed: {
    t() {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    },
    isRtl () {
      return this.$i18n.localeProperties?.dir === 'rtl'
    }
  }
}
</script>

<style lang="scss" scoped>
.growth {
  padding: 90px 0 10px;
}

.growth-container {
  max-width: 1240px;
}

.growth-row {
  min-height: 680px;
}

.growth-content {
  padding-inline-end: 24px;
}

h2 {
  font-size: 52px;
  line-height: 1.25;
  margin-bottom: 18px;
  color: #12172f;
}

.growth-description {
  color: #59607a;
  line-height: 1.7;
  font-size: 18px;
  max-width: 560px;
  margin: 0;
}

.store-buttons {
  margin-top: 26px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  img {
    width: 168px;
  }
}

.growth-media {
  display: flex;
  justify-content: flex-end;
  margin-inline-end: calc(50% - 50vw);
}

.growth-photo {
  width: 100%;
  min-height: 680px;
  height: auto;
  object-fit: contain;
  object-position: right center;
}

.growth.is-rtl {
  .growth-row {
    flex-direction: row-reverse;
  }

  .growth-media {
    margin-inline-end: 0;
    margin-inline-start: calc(50% - 50vw);
  }

  .growth-photo {
    object-position: left center;
  }
}

.stats {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0;
  max-width: 560px;

  div {
    border-inline-start: 1px solid #ced3e1;
    padding: 0 20px;
  }

  div:first-child {
    border-inline-start: 0;
    padding-inline-start: 0;
  }

  .stat-label {
    font-size: 24px;
    color: #555d74;
    margin-bottom: 8px;
    line-height: 1.15;
  }

  h4 {
    font-size: 38px;
    color: #11162d;
    line-height: 1.1;
    margin: 0;
  }
}

@media (max-width: 959px) {
  .growth {
    padding: 44px 0 10px;
  }

  .growth-row {
    min-height: auto;
  }

  .growth-content {
    padding-inline-end: 0;
  }

  h2 {
    font-size: 34px;
    margin-bottom: 14px;
  }

  .growth-description {
    font-size: 16px;
  }

  .store-buttons {
    img {
      width: 154px;
    }
  }

  .growth-photo {
    min-height: 420px;
    margin-top: 16px;
    object-fit: contain;
    object-position: center;
  }

  .growth-media {
    margin-inline-end: 0;
  }

  .growth.is-rtl .growth-media {
    margin-inline-start: 0;
  }

  .stats {
    margin-top: 28px;
    grid-template-columns: repeat(3, minmax(0, 1fr));

    .stat-label {
      font-size: 15px;
      margin-bottom: 6px;
    }

    h4 {
      font-size: 28px;
    }
  }
}

@media (max-width: 600px) {
  .growth-photo {
    min-height: 300px;
  }

  .stats {
    grid-template-columns: 1fr;

    div {
      border-inline-start: 0;
      border-top: 1px solid #ced3e1;
      padding: 14px 0 0;
      margin-top: 12px;
    }

    div:first-child {
      border-top: 0;
      margin-top: 0;
      padding-top: 0;
    }
  }
}
</style>
