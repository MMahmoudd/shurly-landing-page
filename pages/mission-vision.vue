<template>
  <div>
    <section>
      <headerComponent />
    </section>
    <section>
      <contentComponent />
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/mission-vision/header.vue'
import contentComponent from '../components/mission-vision/content.vue'
export default {
  name: 'IndexPage',
  components: {
    headerComponent,
    contentComponent
  }
}
</script>
