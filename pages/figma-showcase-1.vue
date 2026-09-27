<template>
  <div>
    <section>
      <headerComponent />
    </section>
        <section>
      <jurneyComponent />
    </section>
    <section>
      <thirdComponent />
    </section>
    <section>
      <forthComponent />
    </section>
        <section>
      <sliderComponent />
    </section>
    <section id="contact">
      <contactComponent />
    </section>
    <section>
      <downloadAppComponent />
    </section>
  </div>
</template>

<script>
import headerComponent from '../components/landing/header.vue'
import jurneyComponent from '../components/landing/jurney.vue'
import thirdComponent from '../components/landing/third.vue'
import forthComponent from '../components/landing/forth.vue'
import contactComponent from '../components/landing/contact.vue'
import downloadAppComponent from '../components/landing/downloadApp.vue'
import sliderComponent from '../components/landing/slider.vue'
export default {
  name: 'IndexPage',
  components: {
    headerComponent,
    jurneyComponent,
    thirdComponent,
    forthComponent,
    contactComponent,
    downloadAppComponent,
    sliderComponent
  }
}
</script>
