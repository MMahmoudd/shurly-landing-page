<template>
  <div class="privacy-page">
    <v-container>
      <div class="privacy-card">
        <h1>{{ policy.title }}</h1>
        <p class="intro">{{ policy.intro }}</p>

        <section class="updates">
          <h2>{{ policy.updates.title }}</h2>
          <p>{{ policy.updates.content }}</p>
          <p class="last-review">{{ policy.updates.lastReview }}</p>
        </section>

        <section
          v-for="(section, index) in policy.sections"
          :key="`privacy-${index}`"
          class="policy-section"
        >
          <h2>{{ section.title }}</h2>
          <p v-if="section.paragraph">{{ section.paragraph }}</p>
          <ul v-if="section.bullets && section.bullets.length">
            <li v-for="(item, itemIndex) in section.bullets" :key="`privacy-item-${index}-${itemIndex}`">
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
  name: 'PrivacyPolicyPage',
  layout: 'figma-landing',
  computed: {
    policy () {
      const locale = this.$i18n.locale
      return this.$i18n.messages[locale].privacyPolicy
    }
  }
}
</script>

<style lang="scss">
.privacy-page {
  margin: 32px 0 0;
  color: #10142a;

  .privacy-card {
    border: 1px solid rgba(16, 20, 42, 0.12);
    border-radius: 16px;
    background: #f8fafd;
    padding: 28px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 14px;
    color: #0f1b4d;
    line-height: 1.35;
  }

  .intro {
    font-size: 17px;
    line-height: 1.9;
    margin-bottom: 24px;
  }

  .updates,
  .policy-section {
    padding: 20px 0;
    border-top: 1px solid rgba(16, 20, 42, 0.12);
  }

  h2 {
    font-size: 26px;
    margin-bottom: 12px;
    color: #10142a;
  }

  p {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 10px;
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

  .last-review {
    color: #63708f;
    margin-bottom: 0;
  }

  [dir="rtl"] & {
    ul {
      padding-inline-start: 0;
      padding-inline-end: 18px;
    }
  }

  @media (max-width: 959px) {
    margin: 16px 0 0;

    .privacy-card {
      padding: 18px 14px;
    }

    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 22px;
    }

    .intro,
    p,
    ul li {
      font-size: 15px;
    }
  }
}
</style>
