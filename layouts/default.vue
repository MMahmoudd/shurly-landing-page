<template>
  <v-app dark>
    <navbarComponent />
    <v-main>
        <Nuxt />
    </v-main>
    <footerComponent />
  </v-app>
</template>

<script>
import navbarComponent from '../components/layout/navbar.vue'
import footerComponent from '../components/layout/footer.vue'
export default {
  name: 'DefaultLayout',
  components: {
    navbarComponent,
    footerComponent
  },
  head () {
    const localeCode = this.$i18n?.locale || 'en'
    const localeDir = this.$i18n?.localeProperties?.dir || 'ltr'

    return {
      htmlAttrs: {
        lang: localeCode,
        dir: localeDir
      }
    }
  },
  data () {
    return {
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss">
  .v-main{
    padding-top: 0 !important;
  }
</style>
