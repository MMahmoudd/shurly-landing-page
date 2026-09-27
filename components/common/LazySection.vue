<template>
  <div ref="root" class="lazy-section" :style="placeholderStyle">
    <slot v-if="isVisible" />
  </div>
</template>

<script>
export default {
  name: 'LazySection',
  props: {
    minHeight: {
      type: String,
      default: '320px'
    },
    rootMargin: {
      type: String,
      default: '240px 0px'
    }
  },
  data () {
    return {
      isVisible: false
    }
  },
  computed: {
    placeholderStyle () {
      return this.isVisible ? null : { minHeight: this.minHeight }
    }
  },
  mounted () {
    if (!('IntersectionObserver' in window)) {
      this.isVisible = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return
        }

        this.isVisible = true
        observer.disconnect()
      },
      { rootMargin: this.rootMargin }
    )

    observer.observe(this.$refs.root)
    this._lazyObserver = observer
  },
  beforeDestroy () {
    this._lazyObserver?.disconnect()
  }
}
</script>

<style lang="scss" scoped>
.lazy-section {
  content-visibility: auto;
  contain-intrinsic-size: auto 320px;
}
</style>
