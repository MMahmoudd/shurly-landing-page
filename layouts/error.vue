<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink :to="localePath('/')">
      {{ $t('error.home') }}
    </NuxtLink>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    pageNotFound () {
      return this.$t('error.notFound')
    },
    otherError () {
      return this.$t('error.generic')
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
      htmlAttrs: {
        lang: this.$i18n?.locale || 'en',
        dir: this.$i18n?.localeProperties?.dir || 'ltr'
      }
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
