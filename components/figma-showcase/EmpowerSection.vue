<template>
  <section class="empower">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="preview-screen">
            <img
              src="../../assets/images/new-landing/download-sec-img.svg"
              alt="screen preview"
              loading="lazy"
              decoding="async"
              width="680"
              height="680"
            >
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <h2>{{ t.empower.title }}</h2>
          <p>{{ t.empower.description }}</p>
          <div class="store-buttons">
            <img src="../../assets/images/l-google-btn.svg" alt="Google Play" loading="lazy" decoding="async" width="180" height="54">
            <img src="../../assets/images/l-apple-btn.svg" alt="App Store" loading="lazy" decoding="async" width="180" height="54">
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'FigmaShowcaseEmpowerSection',
  computed: {
    t() {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    }
  }
}
</script>

<style lang="scss" scoped>
.empower {
  padding: 90px 0 10px;
}

.preview-screen {
  border-radius: 20px;
  // background: #2ec8cd;
  padding: 24px;
  text-align: center;

  img {
    width: 100%;
    // max-width: 340px;
  }
}

h2 {
  font-size: 44px;
  margin-bottom: 20px;
}

p {
  color: #59607a;
  line-height: 1.8;
  font-size: 17px;
}

.store-buttons {
  margin-top: 28px;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;

  img {
    width: 180px;
  }
}

@media (max-width: 959px) {
  .empower {
    padding: 44px 0 6px;
  }

  h2 {
    font-size: 30px;
  }
}
</style>
