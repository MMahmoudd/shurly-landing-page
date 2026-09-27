<template>
  <div class="figma-showcase-page">
    <HeroSection />
    <LoveSection />

    <client-only>
      <LazySection min-height="520px">
        <EmpowerSection />
      </LazySection>
      <LazySection min-height="420px">
        <InsideSection />
      </LazySection>
      <LazySection min-height="680px">
        <GrowthSection />
      </LazySection>
    </client-only>
  </div>
</template>

<script>
import HeroSection from '~/components/figma-showcase/HeroSection.vue'
import LoveSection from '~/components/figma-showcase/LoveSection.vue'
import LazySection from '~/components/common/LazySection.vue'

export default {
  name: 'FigmaShowcasePage',
  layout: 'figma-landing',
  components: {
    HeroSection,
    LoveSection,
    LazySection,
    EmpowerSection: () => import(
      /* webpackChunkName: "home-empower" */
      '~/components/figma-showcase/EmpowerSection.vue'
    ),
    InsideSection: () => import(
      /* webpackChunkName: "home-inside" */
      '~/components/figma-showcase/InsideSection.vue'
    ),
    GrowthSection: () => import(
      /* webpackChunkName: "home-growth" */
      '~/components/figma-showcase/GrowthSection.vue'
    )
  },
  head () {
    return {
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: require('~/assets/images/new-landing/BG.svg')
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.figma-showcase-page {
  background: #fff;
  color: #10142a;
  width: 100%;
  overflow-x: hidden;
}
</style>
