<template>
  <footer class="showcase-footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <img src="../../assets/images/Logo-1.png" alt="Surely logo" class="footer-logo">
          <p>{{ t.footer.description }}</p>
        </v-col>
        <v-col cols="6" md="2">
          <h5>{{ t.footer.productTitle }}</h5>
          <nuxt-link
            v-for="(link, i) in footerLinks"
            :key="`p-${i}`"
            :to="localePath(link.to)"
            class="footer-link"
          >
            {{ link.label }}
          </nuxt-link>
        </v-col>
        <v-col cols="6" md="2">
          <h5>{{ t.footer.companyTitle }}</h5>
          <nuxt-link
            v-for="(link, i) in footerLinks"
            :key="`c-${i}`"
            :to="localePath(link.to)"
            class="footer-link"
          >
            {{ link.label }}
          </nuxt-link>
        </v-col>
        <v-col cols="12" md="4">
          <h5>{{ t.footer.newsletterTitle }}</h5>
          <p>{{ t.footer.newsletterSubtitle }}</p>
          <div class="newsletter">
            <input type="text" :placeholder="t.footer.placeholder">
            <button>{{ t.footer.subscribe }}</button>
          </div>
        </v-col>
      </v-row>
      <p class="copyright">{{ t.footer.copyright }}</p>
    </v-container>
  </footer>
</template>

<script>
export default {
  name: 'FigmaShowcaseFooter',
  computed: {
    t () {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    },
    footerLinks () {
      return [
        { to: '/', label: this.t.nav.home },
        { to: '/about', label: this.t.nav.about },
        { to: '/mission-vision', label: this.t.nav.how },
        { to: '/terms-condictions', label: this.$t('footer.links.terms') },
        { to: '/privacy-policy', label: this.$t('footer.links.privacy') }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.showcase-footer {
  margin: 80px 18px 24px;
  border-radius: 16px;
  background: #0f1b4d;
  color: #fff;
  padding: 38px 0 14px;

  .footer-logo {
    width: 156px;
    height: auto;
    margin-bottom: 10px;
  }

  h5 {
    font-size: 16px;
    margin-bottom: 10px;
    color: #d6e5f8;
  }

  p {
    color: #d3dded;
    margin-bottom: 7px;
    font-size: 14px;
  }

  .footer-link {
    display: block;
    color: #d3dded;
    margin-bottom: 7px;
    font-size: 14px;
    text-decoration: none;
  }

  .newsletter {
    margin-top: 12px;
    display: flex;
    gap: 8px;
    flex-direction: column;

    input,
    button {
      border-radius: 999px;
      border: 0;
      padding: 10px 14px;
    }

    input {
      background: #fff;
    }

    button {
      background: #11b8c0;
      color: #fff;
      font-weight: 700;
    }
  }

  .copyright {
    margin-top: 16px;
    text-align: center;
    font-size: 12px;
    color: #99a7c8;
  }
}

@media (max-width: 959px) {
  .showcase-footer {
    margin: 44px 12px 16px;
  }
}
</style>
