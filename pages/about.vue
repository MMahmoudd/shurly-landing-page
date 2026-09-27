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
  layout: 'figma-landing',
  components: {
    aboutComponent,
  }
}
</script>
