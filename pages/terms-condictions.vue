<template>
  <div class="terms-page">
    <v-container>
      <div class="terms-card">
        <h1>{{ terms.title }}</h1>
        <p class="intro">{{ terms.intro }}</p>

        <section v-for="(section, index) in terms.sections" :key="`section-${index}`" class="terms-section">
          <h2>{{ section.title }}</h2>
          <p v-if="section.paragraph">{{ section.paragraph }}</p>
          <ul v-if="section.bullets && section.bullets.length">
            <li v-for="(item, itemIndex) in section.bullets" :key="`item-${index}-${itemIndex}`">
              {{ item }}
            </li>
          </ul>
        </section>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'TermsCondictionsPage',
  layout: 'figma-landing',
  computed: {
    terms() {
      const locale = this.$i18n.locale
      return this.$i18n.messages[locale].termsCondictions
    }
  }
}
</script>

<style lang="scss">
.terms-page {
  margin: 32px 0 0;
  color: #10142a;

  .terms-card {
    border: 1px solid rgba(16, 20, 42, 0.12);
    border-radius: 16px;
    background: #f8fafd;
    padding: 28px;
  }

  h1 {
    font-size: 44px;
    margin-bottom: 14px;
    color: #0f1b4d;
  }

  .intro {
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 24px;
  }

  .terms-section {
    padding: 20px 0;
    border-top: 1px solid rgba(16, 20, 42, 0.12);

    h2 {
      font-size: 28px;
      margin-bottom: 12px;
      color: #10142a;
    }

    p {
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 0;
      color: #414a67;
    }

    ul {
      margin: 0;
      padding-inline-start: 18px;

      li {
        font-size: 16px;
        line-height: 1.8;
        margin-bottom: 6px;
        color: #414a67;
      }
    }
  }

  .source {
    margin-top: 24px;
    font-size: 14px;
    color: #63708f;

    a {
      color: #0f1b4d;
      word-break: break-word;
    }
  }

  [dir="rtl"] & {
    .terms-section ul {
      padding-inline-start: 0;
      padding-inline-end: 18px;
    }
  }

  @media (max-width: 959px) {
    margin: 16px 0 0;

    .terms-card {
      padding: 18px 14px;
    }

    h1 {
      font-size: 32px;
    }

    .intro,
    .terms-section p,
    .terms-section ul li {
      font-size: 15px;
    }

    .terms-section h2 {
      font-size: 24px;
    }
  }
}
</style>
