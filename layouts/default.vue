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
