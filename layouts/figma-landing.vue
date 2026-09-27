<template>
  <v-app :class="['figma-landing-layout', { 'is-home': isHomePage }]">
    <FigmaNavbar />
    <v-main>
      <Nuxt />
    </v-main>
    <ShowcaseFooter />
  </v-app>
</template>

<script>
import FigmaNavbar from '~/components/figma-showcase/FigmaNavbar.vue'
import ShowcaseFooter from '~/components/figma-showcase/ShowcaseFooter.vue'

export default {
  name: 'FigmaLandingLayout',
  components: {
    FigmaNavbar,
    ShowcaseFooter
  },
  computed: {
    isHomePage () {
      const normalize = (path) => {
        const cleaned = (path || '').replace(/\/+$/, '')
        return cleaned || '/'
      }

      return normalize(this.$route.path) === normalize(this.localePath('/'))
    }
  },
  head() {
    const localeCode = this.$i18n?.locale || 'en'
    const localeDir = this.$i18n?.localeProperties?.dir || 'ltr'

    return {
      htmlAttrs: {
        lang: localeCode,
        dir: localeDir
      }
    }
  }
}
</script>

<style lang="scss">
.figma-landing-layout {
  position: relative;
  background: #fff !important;

  > .v-main {
    padding-top: 92px !important;
  }
}

@media (max-width: 959px) {
  .figma-landing-layout > .v-main {
    padding-top: 68px !important;
  }

  .figma-landing-layout.is-home > .v-main {
    padding-top: 0 !important;
  }
}
</style>
