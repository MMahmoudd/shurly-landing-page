<template>
  <div class="delete-account-page">
    <v-container>
      <div class="delete-account-card">
        <h1>{{ content.title }}</h1>
        <ol class="steps">
          <li
            v-for="(step, index) in content.steps"
            :key="`delete-step-${index}`"
          >
            {{ step }}
          </li>
        </ol>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DeleteAccountPage',
  layout: 'figma-landing',
  computed: {
    content () {
      const locale = this.$i18n.locale
      return this.$i18n.messages[locale].deleteAccount
    }
  }
}
</script>

<style lang="scss">
.delete-account-page {
  margin: 32px 0 0;
  color: #10142a;

  .delete-account-card {
    border: 1px solid rgba(16, 20, 42, 0.12);
    border-radius: 16px;
    background: #f8fafd;
    padding: 28px;
  }

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
    color: #0f1b4d;
    line-height: 1.35;
  }

  .steps {
    margin: 0;
    padding-inline-start: 22px;

    li {
      font-size: 17px;
      line-height: 1.9;
      margin-bottom: 12px;
      color: #414a67;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  [dir="rtl"] & {
    .steps {
      padding-inline-start: 0;
      padding-inline-end: 22px;
    }
  }

  @media (max-width: 959px) {
    margin: 16px 0 0;

    .delete-account-card {
      padding: 18px 14px;
    }

    h1 {
      font-size: 30px;
      margin-bottom: 18px;
    }

    .steps li {
      font-size: 15px;
    }
  }
}
</style>
