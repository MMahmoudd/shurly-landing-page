<template>
  <div>
    <section>
      <aboutComponent />
    </section>
  </div>
</template>

<script>
import aboutComponent from '../components/about/about.vue'
export default {
  name: 'About',
  components: {
    aboutComponent,
  }
}
</script>
