<template>
  <section class="inside">
    <v-container>
      <div class="section-head centered">
        <h2>{{ t.inside.title }}</h2>
        <p>{{ t.inside.subtitle }}</p>
      </div>
      <VueSlickCarousel class="inside-slider" v-bind="carouselSettings">
        <div class="inside-item" v-for="(item, i) in insideImages" :key="`inside-${i}`">
          <img :src="item" alt="app inside" loading="lazy" decoding="async">
        </div>
      </VueSlickCarousel>
    </v-container>
  </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import image1 from '../../assets/images/new-landing/app-img1.svg'
import image2 from '../../assets/images/new-landing/app-img2.svg'
import image3 from '../../assets/images/new-landing/app-img3.svg'
import image4 from '../../assets/images/new-landing/app-img4.svg'

export default {
  name: 'FigmaShowcaseInsideSection',
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      sliderSettings: {
        speed: 900,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        waitForAnimate: false,
        responsive: [
          {
            breakpoint: 1263,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 959,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  computed: {
    t() {
      return this.$i18n.messages[this.$i18n.locale].figmaLanding
    },
    carouselSettings() {
      return {
        ...this.sliderSettings,
        ltr: this.$i18n.locale !== 'ar'
      }
    },
    insideImages() {
      return [image1, image2, image3, image4]
    }
  }
}
</script>

<style lang="scss" scoped>
.inside {
  padding: 90px 0 10px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  margin-bottom: 34px;

  h2 {
    font-size: 46px;
    line-height: 1.2;
    margin: 0;
  }

  p {
    margin: 0;
    font-size: 18px;
    color: #59607a;
  }
}

.section-head.centered {
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.inside-slider {
  :deep(.slick-list) {
    margin: 0 -11px;
  }

  :deep(.slick-slide) {
    padding: 0 11px;
  }
}

.inside-item {
  display: flex !important;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
}

@media (max-width: 959px) {
  .inside {
    padding: 44px 0 6px;
  }

  .section-head {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 22px;

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 15px;
    }
  }

  .section-head.centered {
    align-items: center;
  }
}
</style>
